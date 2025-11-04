import { motion } from 'motion/react';
import { Palette, Code, Cloud, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Palette,
    title: '软件设计',
    description: 'UI/UX 原型设计',
    color: '#0F62FE',
  },
  {
    icon: Code,
    title: '软件开发',
    description: '企业级 Web / App 系统',
    color: '#00BFA6',
  },
  {
    icon: Cloud,
    title: '云托管',
    description: '远程运维与性能监控',
    color: '#0F62FE',
  },
  {
    icon: Sparkles,
    title: 'AI集成',
    description: '智能助手与数据分析',
    color: '#00BFA6',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0B0B0D] relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0F62FE]/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00BFA6]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
            核心服务
          </h2>
          <p className="text-gray-400">
            全方位技术服务，助力企业数字化转型
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative h-full bg-[#1A1A1F]/50 border border-white/5 backdrop-blur-sm overflow-hidden hover:border-[#0F62FE]/50 transition-all duration-300">
                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${service.color}20, transparent 70%)`,
                    }}
                  />

                  <div className="relative p-8">
                    {/* Icon */}
                    <div
                      className="inline-flex p-4 rounded-xl mb-6 relative group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                        boxShadow: `0 0 20px ${service.color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-white" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400">
                      {service.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{
                        background: `linear-gradient(90deg, ${service.color}, transparent)`,
                      }}
                    />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
