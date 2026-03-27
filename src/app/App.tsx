import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { AIToolsShowcase } from './components/AIToolsShowcase';
import { EnrollmentForm } from './components/EnrollmentForm';
import { PaymentSuccess } from './components/PaymentSuccess';
import { FloatingLogos } from './components/FloatingLogos';

export default function App() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') {
      const storedId = localStorage.getItem('razorpay_payment_id') || 'Payment Confirmed';
      setPaymentId(storedId);
      setPaymentSuccess(true);
      window.history.replaceState({}, '', '/');
    }
  }, []);

  const handlePaymentSuccess = (id: string) => {
    setPaymentId(id);
    setPaymentSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setPaymentSuccess(false);
    setPaymentId('');
    localStorage.removeItem('razorpay_payment_id');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (paymentSuccess) {
    return <PaymentSuccess paymentId={paymentId} onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="size-full min-h-screen relative" style={{ backgroundColor: '#e3f2fd' }}>
      <FloatingLogos />
      <Hero />
      <AIToolsShowcase />
      <div id="enrollment-form" className="relative z-10 py-16 px-4" style={{ backgroundColor: '#e3f2fd' }}>
        <EnrollmentForm onPaymentSuccess={handlePaymentSuccess} />
      </div>
      <footer className="py-8 px-4 text-center" style={{ backgroundColor: '#012a4a', color: '#a9d6e5' }}>
        <p className="text-sm">© 2026 AI Business Training. All rights reserved.</p>
        <p className="text-xs mt-2">Empowering businesses through AI education</p>
      </footer>
    </div>
  );
}
