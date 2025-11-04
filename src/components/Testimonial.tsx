import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonial() {
  return (
    <section id="testimonials" className="py-24 bg-[#13131A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0F62FE]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00BFA6]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
            客户评价
          </h2>
          <p className="text-gray-400">
            听听我们的合作伙伴怎么说
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-[#1A1A1F] to-[#13131A] border border-white/10 rounded-2xl p-10 md:p-12 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-20 h-20 text-[#0F62FE]" />
            </div>

            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0F62FE]/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Testimonial Text */}
              <p className="text-gray-300 mb-8 italic" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
                "与 喜都科技 合作是我们做出的最佳决策之一。他们不仅交付了一个功能强大的系统，
                更重要的是理解了我们的业务需求，提供了超出预期的解决方案。专业、高效、值得信赖！"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F62FE] to-[#00BFA6] rounded-full blur-md opacity-50" />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIyNjYwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Client"
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-[#0F62FE]/50"
                  />
                </div>
                <div>
                  <h4 className="text-white" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                    张经理
                  </h4>
                  <p className="text-gray-400">
                    蓝天公司 首席执行官
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0F62FE]/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
