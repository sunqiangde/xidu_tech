import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0D]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0F62FE]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00BFA6]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Flowing Data Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M0,100 Q250,50 500,100 T1000,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M0,200 Q250,150 500,200 T1000,200"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0F62FE" stopOpacity="0" />
              <stop offset="50%" stopColor="#0F62FE" stopOpacity="1" />
              <stop offset="100%" stopColor="#00BFA6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00BFA6" stopOpacity="0" />
              <stop offset="50%" stopColor="#00BFA6" stopOpacity="1" />
              <stop offset="100%" stopColor="#0F62FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#0F62FE]/30 bg-[#0F62FE]/10 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-[#00BFA6]" />
            <span className="text-sm text-gray-300">智能软件开发专家</span>
          </motion.div>

          <h1 className="mb-6 text-white" style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.1' }}>
            打造有温度的
            <br />
            <span className="bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] bg-clip-text text-transparent">
              智能软件
            </span>
          </h1>

          <p className="mb-10 text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.25rem' }}>
            从设计到托管，一站式高效开发解决方案
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="relative group overflow-hidden bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] hover:shadow-[0_0_30px_rgba(15,98,254,0.4)] transition-all duration-300"
              style={{ fontSize: '1.125rem', padding: '1.5rem 3rem' }}
            >
              <span className="relative z-10">立即咨询</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
          <motion.div
            className="w-1 h-2 bg-gradient-to-b from-[#0F62FE] to-[#00BFA6] rounded-full mx-auto"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}