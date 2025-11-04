import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Finance',
    description: '金融数据分析平台，实时监控投资组合表现',
    image: 'https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzYyMTgxMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#0F62FE',
  },
  {
    title: 'E-commerce',
    description: '全渠道电商解决方案，无缝购物体验',
    image: 'https://images.unsplash.com/photo-1703206848101-e0b15d418ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjIyNTY3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00BFA6',
  },
  {
    title: 'ChatApp',
    description: '企业级即时通讯应用，安全高效协作',
    image: 'https://images.unsplash.com/photo-1623915695133-d624f7759fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjaGF0JTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzYyMjcwNjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#0F62FE',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-[#0B0B0D] to-[#13131A] relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
            精选案例
          </h2>
          <p className="text-gray-400">
            我们为客户打造的成功项目
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-[#1A1A1F] border border-white/5 hover:border-[#0F62FE]/50 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1F] via-transparent to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-white hover:text-[#00BFA6] transition-colors"
                      >
                        <span>查看详情</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-white" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400">
                    {project.description}
                  </p>

                  {/* Accent Line */}
                  <div
                    className="mt-4 h-[2px] w-16 transform origin-left group-hover:w-full transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${project.color}, transparent)`,
                    }}
                  />
                </div>

                {/* Corner Glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                  style={{
                    background: `radial-gradient(circle, ${project.color}40, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
