import { useState } from 'react';
import { Hero } from './components/Hero';
import { AIToolsShowcase } from './components/AIToolsShowcase';
import { EnrollmentForm } from './components/EnrollmentForm';
import { PaymentSuccess } from './components/PaymentSuccess';

export default function App() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState('');

  const handlePaymentSuccess = (id: string) => {
    console.log('handlePaymentSuccess called with ID:', id);
    console.log('Current paymentSuccess state:', paymentSuccess);
    setPaymentId(id);
    setPaymentSuccess(true);
    console.log('State updated - paymentSuccess should now be true');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setPaymentSuccess(false);
    setPaymentId('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  console.log('App render - paymentSuccess:', paymentSuccess, 'paymentId:', paymentId);

  if (paymentSuccess) {
    console.log('Rendering PaymentSuccess component');
    return <PaymentSuccess paymentId={paymentId} onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="size-full min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Hero />
      <AIToolsShowcase />
      <div className="py-16 px-4" style={{ backgroundColor: '#f8fbfd' }}>
        <EnrollmentForm onPaymentSuccess={handlePaymentSuccess} />
      </div>
      
      <footer className="py-8 px-4 text-center" style={{ backgroundColor: '#012a4a', color: '#a9d6e5' }}>
        <p className="text-sm">© 2026 AI Business Training. All rights reserved.</p>
        <p className="text-xs mt-2">Empowering businesses through AI education</p>
      </footer>
    </div>
  );
}