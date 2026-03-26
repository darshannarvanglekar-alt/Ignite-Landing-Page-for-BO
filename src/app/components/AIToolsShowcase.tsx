import { motion } from 'motion/react';
import { Brain, TrendingUp, Users, Scale, Zap, BarChart3, Lightbulb, BotMessageSquare } from 'lucide-react';

const aiTools = [
  {
    category: 'Basics of AI',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2hhdGJvdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM4MzY2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tools: 'Fundamentals & Concepts',
  },
  {
    category: 'Sales & CRM',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHJlbGF0aW9uc2hpcCUyMG1hbmFnZW1lbnQlMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NzM5MTM3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tools: 'Hubspot',
  },
  {
    category: 'Marketing',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MzkwNDEyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    tools: 'Brevo',
  },
  {
    category: 'Data Analysis',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzM4NDA5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tools: 'MS Co-Pilot',
  },
  {
    category: 'MY AI Desk',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1767716134895-296cbd7aec1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM4NjEzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tools: 'Perplexity Spaces, Claude',
  },
  {
    category: 'AI Agents',
    icon: BotMessageSquare,
    image: 'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2hhdGJvdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM4MzY2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tools: 'OpenAI Agent Builder',
  },
  {
    category: 'Legal',
    icon: Scale,
    image: 'https://images.unsplash.com/photo-1659355894099-b2c2b2884322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMHRlY2hub2xvZ3klMjBkb2N1bWVudHN8ZW58MXx8fHwxNzczOTEzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tools: 'Perplexity Spaces',
  },
  {
    category: 'Automation',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1770509634681-be8be680968a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9wZXJhdGlvbnMlMjB3b3JrZmxvd3xlbnwxfHx8fDE3NzM4MzA2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tools: 'N8N',
  },
];

export function AIToolsShowcase() {
  return (
    <div className="w-full py-16 px-4" style={{ backgroundColor: '#e3f2fd' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#012a4a' }}>
          What You'll Learn in This Session
        </h2>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2a6f97' }}>
          8 powerful modules covering AI fundamentals and essential tools for every business function
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {aiTools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={tool.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={tool.image}
                  alt={tool.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#61a5c2' }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{tool.category}</h3>
                  <p className="text-white/90 text-sm">{tool.tools}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
