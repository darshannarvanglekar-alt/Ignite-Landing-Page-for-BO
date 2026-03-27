import { motion } from 'motion/react';

const testimonials = [
  { src: '/testimonials/testimonial1.png', alt: 'Testimonial 1' },
  { src: '/testimonials/testimonial2.png', alt: 'Testimonial 2' },
  { src: '/testimonials/testimonial3.png', alt: 'Testimonial 3' },
  { src: '/testimonials/testimonial4.png', alt: 'Testimonial 4' },
  { src: '/testimonials/testimonial5.png', alt: 'Testimonial 5' },
];

export function TestimonialsCarousel() {
  return (
    <div className="w-full py-16 overflow-hidden" style={{ backgroundColor: '#e3f2fd' }}>
      <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#012a4a' }}>
        What People Are Saying
      </h2>

      {/* Row 1 — scrolls left */}
      <div className="relative flex mb-6 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <img
              key={i}
              src={t.src}
              alt={t.alt}
              className="h-48 w-auto rounded-xl shadow-lg flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <img
              key={i}
              src={t.src}
              alt={t.alt}
              className="h-48 w-auto rounded-xl shadow-lg flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
