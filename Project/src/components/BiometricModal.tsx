import React, { useState, useEffect } from 'react';
import { X, Fingerprint, Shield, CheckCircle, AlertCircle } from 'lucide-react';

interface BiometricModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BiometricModal: React.FC<BiometricModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'scanning' | 'success' | 'error'>('scanning');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen && step === 'scanning') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            // Simulate successful authentication
            setTimeout(() => setStep('success'), 500);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isOpen, step]);

  const handleClose = () => {
    setStep('scanning');
    setProgress(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Biometric Authentication
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="text-center">
          {step === 'scanning' && (
            <>
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse">
                  <div className="w-full h-full flex items-center justify-center">
                    <Fingerprint className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
                <div 
                  className="absolute inset-0 bg-blue-600 rounded-full transition-all duration-300 flex items-center justify-center"
                  style={{ 
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + progress * 0.5}% 0%, ${50 + progress * 0.5}% 100%, 50% 100%)`,
                    opacity: progress > 0 ? 0.2 : 0 
                  }}
                >
                  <Fingerprint className="w-16 h-16 text-white" />
                </div>
                
                {/* Scanning animation */}
                <div 
                  className="absolute left-0 w-full h-1 bg-blue-600 transition-all duration-200"
                  style={{ 
                    top: `${30 + (progress * 0.4)}%`,
                    opacity: progress < 100 ? 1 : 0
                  }}
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Scanning Fingerprint
              </h3>
              <p className="text-gray-600 mb-4">
                Please place your finger on the sensor and hold steady
              </p>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <p className="text-sm text-gray-500">
                Scanning... {progress}%
              </p>
            </>
          )}

          {step === 'success' && (
            <>
              <div className="mx-auto w-24 h-24 mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Authentication Successful
              </h3>
              <p className="text-gray-600 mb-6">
                Your identity has been verified successfully. You now have secure access to bank account integration features.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-800">
                    Secure Banking Integration Enabled
                  </span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  You can now safely access EMI calculations and loan services
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Continue
              </button>
            </>
          )}

          {step === 'error' && (
            <>
              <div className="mx-auto w-24 h-24 mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-12 h-12 text-red-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-red-900 mb-2">
                Authentication Failed
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't verify your fingerprint. Please try again or use alternative authentication.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setStep('scanning')}
                  className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Try Again
                </button>
                <button
                  onClick={handleClose}
                  className="border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>

        {/* Security Notice */}
        <div className="mt-6 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-start">
            <Shield className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <div className="text-xs text-blue-800">
              <p className="font-medium">Security Notice:</p>
              <p>Your biometric data is encrypted and stored securely. We never share your personal authentication information with third parties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};