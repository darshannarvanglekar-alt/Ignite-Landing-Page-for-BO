import { motion } from 'motion/react';
import { Award, Users, TrendingUp } from 'lucide-react';

const colorPalette = {
  darkest: '#012a4a',
  dark: '#01497c',
  mid: '#2a6f97',
  light: '#468faf',
  lighter: '#61a5c2',
  lightest: '#89c2d9',
  palest: '#a9d6e5',
};

const testimonials = [
  { src: '/testimonials/testimonial1.png', alt: 'Testimonial 1' },
  { src: '/testimonials/testimonial2.png', alt: 'Testimonial 2' },
  { src: '/testimonials/testimonial3.png', alt: 'Testimonial 3' },
  { src: '/testimonials/testimonial4.png', alt: 'Testimonial 4' },
  { src: '/testimonials/testimonial5.png', alt: 'Testimonial 5' },
];

function BackgroundCarousel() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Grey overlay */}
      <div className="absolute inset-0 z-10" style={{ backgroundColor: '#e3f2fd', opacity: 0.75 }} />

      {/* Row 1 — scrolls left */}
      <div className="absolute top-[15%] flex overflow-hidden w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <img
              key={i}
              src={t.src}
              alt={t.alt}
              className="h-144 w-auto rounded-xl flex-shrink-0"
              style={{ opacity: 0.6 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="absolute top-[45%] flex overflow-hidden w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <img
              key={i}
              src={t.src}
              alt={t.alt}
              className="h-72 w-auto rounded-xl flex-shrink-0"
              style={{ opacity: 0.6 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Row 3 — scrolls left */}
      <div className="absolute top-[72%] flex overflow-hidden w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <img
              key={i}
              src={t.src}
              alt={t.alt}
              className="h-40 w-auto rounded-xl flex-shrink-0"
              style={{ opacity: 0.6 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById('enrollment-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">

      {/* Testimonials as background */}
      <BackgroundCarousel />

      {/* Foreground content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">

        {/* Logo — bigger and bolder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-1 flex justify-center"
        >
          <img
            src="https://ignite-learn.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-01-at-4.44.31-PM-1.png"
            alt="Company Logo"
            className="h-48 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(1,42,74,0.3))' }}
          />
        </motion.div>

        {/* Golden Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-base font-bold shadow-lg border-2"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              color: '#7B3F00',
              borderColor: '#FFB300',
              boxShadow: '0 4px 20px rgba(255, 193, 7, 0.5)',
              letterSpacing: '0.03em',
            }}
          >
            ⚡ 8 Tools in just ₹199 — Limited Offer!
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: colorPalette.darkest }}
          >
            Master AI Tools for
            <br />
            <span style={{ color: colorPalette.mid }}>Business Excellence</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          style={{ color: colorPalette.dark }}
        >
          From AI fundamentals to practical tools like HubSpot, Brevo, MS Co-Pilot, Claude, OpenAI Agents, and N8N.
          Master 8 essential modules designed to transform how you work.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10"
        >
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white text-xl font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${colorPalette.dark} 0%, ${colorPalette.mid} 100%)`,
              boxShadow: `0 8px 30px rgba(1, 73, 124, 0.4)`,
            }}
          >
            🚀 Enroll Now — ₹199 Only
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-3"
        >
          {[
            { icon: <Award className="w-8 h-8" style={{ color: colorPalette.darkest }} />, value: '8', label: 'Modules Covered' },
            { icon: <Users className="w-8 h-8" style={{ color: colorPalette.darkest }} />, value: '1,000+', label: 'Business Owners Trained' },
            { icon: <TrendingUp className="w-8 h-8" style={{ color: colorPalette.darkest }} />, value: '300%', label: 'Average ROI Increase' },
          ].map(({ icon, value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: colorPalette.palest }}>
                {icon}
              </div>
              <div className="text-3xl font-bold" style={{ color: colorPalette.darkest }}>{value}</div>
              <div className="text-sm" style={{ color: colorPalette.mid }}>{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xl"
          style={{ color: colorPalette.mid }}
        >
          Scroll to explore the tools ↓
        </motion.div>
      </div>
    </div>
  );
}
