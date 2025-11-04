import { motion } from 'motion/react';
import { ContactDialog } from './ContactDialog';

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#13131A] to-[#0B0B0D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0F62FE]/20 to-[#00BFA6]/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block mb-8">
            <h2 className="text-white" style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '1.2' }}>
              准备好让你的想法
              <br />
              <span className="bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] bg-clip-text text-transparent">
                落地了吗？
              </span>
            </h2>
            
            {/* Decorative Lines */}
            <motion.div
              className="absolute -left-16 top-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent to-[#0F62FE]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute -right-16 top-1/2 w-12 h-[2px] bg-gradient-to-l from-transparent to-[#00BFA6]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            无论是初创项目还是企业转型，我们都能为您提供专业的技术支持和创新解决方案
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactDialog />
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#0F62FE]/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#00BFA6]/20 rounded-br-3xl" />
      </div>
    </section>
  );
}