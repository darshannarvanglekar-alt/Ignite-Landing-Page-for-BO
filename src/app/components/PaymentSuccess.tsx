import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

const colorPalette = {
  darkest: '#012a4a',
  dark: '#01497c',
  mid: '#2a6f97',
  light: '#468faf',
  lighter: '#61a5c2',
  lightest: '#89c2d9',
  palest: '#a9d6e5',
};

interface PaymentSuccessProps {
  paymentId: string;
  onBackToHome: () => void;
}

export function PaymentSuccess({ paymentId, onBackToHome }: PaymentSuccessProps) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onBackToHome();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onBackToHome]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#f8fbfd' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 rounded-2xl shadow-2xl text-center"
        style={{
          background: `linear-gradient(135deg, ${colorPalette.darkest} 0%, ${colorPalette.dark} 100%)`,
        }}
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 10 }}
          className="flex justify-center mb-6"
        >
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#10b981' }}
          >
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Payment Successful! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg mb-6"
          style={{ color: colorPalette.palest }}
        >
          Thank you for enrolling in our AI Tools Training program!
        </motion.p>

        {/* Payment Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6"
        >
          <p className="text-sm mb-2" style={{ color: colorPalette.lightest }}>
            Payment ID
          </p>
          <p className="text-white font-mono text-sm break-all">
            {paymentId}
          </p>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <p className="text-sm mb-2" style={{ color: colorPalette.palest }}>
            📧 Check your email for course access details
          </p>
          <p className="text-sm" style={{ color: colorPalette.palest }}>
            🚀 You'll receive login credentials within 24 hours
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm mb-6"
          style={{ color: colorPalette.lightest }}
        >
          Redirecting to homepage in <span className="font-bold text-white">{countdown}</span> seconds...
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={onBackToHome}
            className="w-full text-white font-semibold py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: colorPalette.mid }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Homepage
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
