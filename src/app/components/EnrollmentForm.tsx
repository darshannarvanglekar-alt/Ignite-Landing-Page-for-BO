import { useState } from 'react';
import { motion } from 'motion/react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const colorPalette = {
  darkest: '#012a4a',
  darker: '#013a63',
  dark: '#01497c',
  darkMid: '#014f86',
  mid: '#2a6f97',
  midLight: '#2c7da0',
  light: '#468faf',
  lighter: '#61a5c2',
  lightest: '#89c2d9',
  palest: '#a9d6e5',
};

interface EnrollmentFormProps {
  onPaymentSuccess?: (paymentId: string) => void;
}

export function EnrollmentForm({ onPaymentSuccess }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    businessType: '',
    employeeCount: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const openRazorpayModal = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      setIsSubmitting(false);
      return;
    }

    const options = {
      key: 'rzp_live_SVil93BbGSPBRb',
      amount: '19900',
      currency: 'INR',
      name: 'Ignite',
      description: 'AI Tools for Business Owners',
      image: 'https://ignite-learn.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-01-at-4.44.31-PM-1.png',
      handler: (response: any) => {
        console.log('Payment successful:', response);
        setIsSubmitting(false);
        localStorage.setItem('razorpay_payment_id', response.razorpay_payment_id);
        if (onPaymentSuccess) {
          onPaymentSuccess(response.razorpay_payment_id);
        }
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        email: formData.email,
        name: formData.fullName,
        phone: formData.phone,
        company: formData.company,
        jobTitle: formData.jobTitle,
        businessType: formData.businessType,
      },
      theme: {
        color: '#01497c',
      },
      modal: {
        ondismiss: () => {
          console.log('Payment modal dismissed');
          setIsSubmitting(false);
        },
        escape: true,
        backdropclose: false,
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on('payment.failed', (response: any) => {
      console.error('Payment failed:', response.error);
      alert('Payment failed: ' + response.error.description);
      setIsSubmitting(false);
    });

    rzp1.open();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = {
        fields: [
          { name: "email", value: formData.email },
          { name: "firstname", value: formData.fullName },
          { name: "phone", value: formData.phone },
          { name: "jobtitle", value: formData.jobTitle },
          { name: "businesstype", value: formData.businessType },
          { name: "companyname", value: formData.company },
          { name: "companysize", value: formData.employeeCount }
        ]
      };

      const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/243745082/2a389fbd-148a-4bd9-bfd6-6075d511a22a", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        localStorage.setItem("name", formData.fullName);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("phone", formData.phone);
	formData.phone = formData.phone.replace(/\D/g, '').slice(-10);
        await openRazorpayModal();
      } else {
        console.error("Form submission failed:", await response.text());
        alert("There was an error submitting the form. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
      alert("There was an error submitting the form. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl"
      style={{
        background: `linear-gradient(135deg, ${colorPalette.darkest} 0%, ${colorPalette.dark} 100%)`,
      }}
    >
      <h2 className="text-3xl font-bold text-white mb-2 text-center">Enroll Now</h2>
      <p className="text-center mb-8" style={{ color: colorPalette.palest }}>
        Transform your business with AI expertise
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-white">Full Name *</Label>
          <Input
            id="fullName"
            required
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            placeholder="John Doe"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Business Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            placeholder="john@company.com"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-white">Company Name *</Label>
          <Input
            id="company"
            required
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            placeholder="Your Company Inc."
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            placeholder="+91 98765 43210"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-white">Job Title *</Label>
          <Input
            id="jobTitle"
            required
            value={formData.jobTitle}
            onChange={(e) => handleChange('jobTitle', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            placeholder="Your Job Title"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessType" className="text-white">Business Type *</Label>
          <Select required onValueChange={(value) => handleChange('businessType', value)} disabled={isSubmitting}>
            <SelectTrigger
              id="businessType"
              className="bg-white/10 border-white/20 text-white"
            >
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="finance">Finance & Banking</SelectItem>
              <SelectItem value="marketing">Marketing & Advertising</SelectItem>
              <SelectItem value="sales">Sales & E-commerce</SelectItem>
              <SelectItem value="operations">Operations & Logistics</SelectItem>
              <SelectItem value="legal">Legal Services</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="employeeCount" className="text-white">Company Size *</Label>
          <Select required onValueChange={(value) => handleChange('employeeCount', value)} disabled={isSubmitting}>
            <SelectTrigger
              id="employeeCount"
              className="bg-white/10 border-white/20 text-white"
            >
              <SelectValue placeholder="Number of employees" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="500+">500+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-white font-semibold py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{ backgroundColor: colorPalette.dark }}
        >
          {isSubmitting ? 'Processing...' : 'Proceed to Payment — ₹199'}
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm" style={{ color: colorPalette.palest }}>
          <span>Powered by</span>
          <img
            src="https://razorpay.com/assets/razorpay-glyph.svg"
            alt="Razorpay"
            className="h-5 w-auto"
          />
          <span className="font-semibold">Razorpay</span>
        </div>
      </form>
    </motion.div>
  );
}
