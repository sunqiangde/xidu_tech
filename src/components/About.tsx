import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">关于我们</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            喜都科技（吉林省）有限公司致力于提供创新的技术解决方案，帮助企业在数字化时代保持竞争力。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">我们的使命</h3>
            <p className="text-gray-400 mb-6">
              通过创新的技术解决方案，帮助企业实现数字化转型，提升业务效率和用户体验。
            </p>
            <p className="text-gray-400 mb-6">
              我们拥有一支经验丰富的技术团队，专注于前端开发、后端架构、移动应用开发和云计算服务。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1a1a1d] p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">创新</h4>
                <p className="text-gray-400 text-sm">持续探索前沿技术</p>
              </div>
              <div className="bg-[#1a1a1d] p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">质量</h4>
                <p className="text-gray-400 text-sm">严格把控产品质量</p>
              </div>
              <div className="bg-[#1a1a1d] p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">合作</h4>
                <p className="text-gray-400 text-sm">与客户建立长期合作关系</p>
              </div>
              <div className="bg-[#1a1a1d] p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">诚信</h4>
                <p className="text-gray-400 text-sm">坚持诚实守信的经营理念</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0F62FE]/20 to-[#00BFA6]/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-3xl font-bold text-white mb-6">公司历程</h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-[#0F62FE]/50">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0F62FE]"></div>
                <h4 className="text-white font-semibold">2018年</h4>
                <p className="text-gray-400">公司成立，专注于Web应用开发</p>
              </div>
              <div className="relative pl-8 border-l-2 border-[#0F62FE]/50">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0F62FE]"></div>
                <h4 className="text-white font-semibold">2020年</h4>
                <p className="text-gray-400">扩展移动应用开发业务</p>
              </div>
              <div className="relative pl-8 border-l-2 border-[#0F62FE]/50">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0F62FE]"></div>
                <h4 className="text-white font-semibold">2022年</h4>
                <p className="text-gray-400">获得国家高新技术企业认证</p>
              </div>
              <div className="relative pl-8 border-l-2 border-[#0F62FE]/50">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0F62FE]"></div>
                <h4 className="text-white font-semibold">2024年</h4>
                <p className="text-gray-400">服务客户超过100家，项目遍布全国</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}