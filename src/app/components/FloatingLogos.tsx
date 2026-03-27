import { motion } from 'motion/react';

const logos = [
  { src: '/logos/chatgpt.png', alt: 'ChatGPT' },
  { src: '/logos/hubspot.png', alt: 'HubSpot' },
  { src: '/logos/brevo.png', alt: 'Brevo' },
  { src: '/logos/perplexity.png', alt: 'Perplexity' },
  { src: '/logos/n8n.png', alt: 'N8N' },
  { src: '/logos/copilot.png', alt: 'Copilot' },
  { src: '/logos/claude.png', alt: 'Claude' },
  { src: '/logos/razorpay.png', alt: 'Razorpay' },
];

const positions = [
  { top: '10%', left: '5%' },
  { top: '20%', left: '90%' },
  { top: '50%', left: '3%' },
  { top: '70%', left: '88%' },
  { top: '30%', left: '85%' },
  { top: '80%', left: '10%' },
  { top: '15%', left: '50%' },
  { top: '65%', left: '55%' },
];

export function FloatingLogos() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {logos.map((logo, index) => (
        <motion.div
          key={logo.alt}
          className="absolute"
          style={{ top: positions[index].top, left: positions[index].left }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3,
          }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-40 h-40 object-contain"
            style={{ opacity: 0.20 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

