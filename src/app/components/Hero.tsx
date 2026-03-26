import { motion } from 'motion/react';
import { Sparkles, Award, Users, TrendingUp } from 'lucide-react';

const colorPalette = {
  darkest: '#012a4a',
  dark: '#01497c',
  mid: '#2a6f97',
  light: '#468faf',
  lighter: '#61a5c2',
  lightest: '#89c2d9',
  palest: '#a9d6e5',
};

export function Hero() {
  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${colorPalette.lighter}, transparent 50%),
                       radial-gradient(circle at 70% 50%, ${colorPalette.mid}, transparent 50%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: colorPalette.lightest,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-1 flex justify-center"
        >
          <img 
            src="https://ignite-learn.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-01-at-4.44.31-PM-1.png"
            alt="Company Logo"
            className="h-32 w-auto object-contain scale-100"
          />
        </motion.div>

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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          style={{ color: colorPalette.dark }}
        >
          From AI fundamentals to practical tools like HubSpot, Brevo, MS Co-Pilot, Claude, OpenAI Agents, and N8N.
          Master 8 essential modules designed to transform how you work.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
        >
          <div className="flex flex-col items-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
              style={{ backgroundColor: colorPalette.palest }}
            >
              <Award className="w-8 h-8" style={{ color: colorPalette.darkest }} />
            </div>
            <div className="text-3xl font-bold" style={{ color: colorPalette.darkest }}>8</div>
            <div className="text-sm" style={{ color: colorPalette.mid }}>Modules Covered</div>
          </div>

          <div className="flex flex-col items-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
              style={{ backgroundColor: colorPalette.palest }}
            >
              <Users className="w-8 h-8" style={{ color: colorPalette.darkest }} />
            </div>
            <div className="text-3xl font-bold" style={{ color: colorPalette.darkest }}>1,000+</div>
            <div className="text-sm" style={{ color: colorPalette.mid }}>Business Owners Trained</div>
          </div>

          <div className="flex flex-col items-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
              style={{ backgroundColor: colorPalette.palest }}
            >
              <TrendingUp className="w-8 h-8" style={{ color: colorPalette.darkest }} />
            </div>
            <div className="text-3xl font-bold" style={{ color: colorPalette.darkest }}>300%</div>
            <div className="text-sm" style={{ color: colorPalette.mid }}>Average ROI Increase</div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm"
          style={{ color: colorPalette.mid }}
        >
          Scroll to explore the tools ↓
        </motion.div>
      </div>
    </div>
  );
}