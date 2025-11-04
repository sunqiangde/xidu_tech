import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "2024年Web开发趋势分析",
      excerpt: "随着技术的不断发展，Web开发领域也在持续演进。本文将分析2024年最值得关注的Web开发趋势。",
      date: "2024-06-15",
      author: "张技术总监",
      category: "技术分享"
    },
    {
      id: 2,
      title: "React 18新特性深度解析",
      excerpt: "React 18带来了并发渲染等重要更新，本文将详细介绍这些新特性及其应用场景。",
      date: "2024-05-28",
      author: "李前端专家",
      category: "技术教程"
    },
    {
      id: 3,
      title: "企业数字化转型实践",
      excerpt: "结合我们为多家企业提供的数字化转型服务，分享其中的关键成功要素和注意事项。",
      date: "2024-05-10",
      author: "王项目经理",
      category: "行业洞察"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-[#121215]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">技术博客</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            分享技术见解、行业趋势和实践经验，与您共同探索数字世界的无限可能。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1d] rounded-xl overflow-hidden border border-white/10 hover:border-[#0F62FE]/50 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#0F62FE]/20 text-[#0F62FE] text-sm rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0F62FE] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <User size={16} className="text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">{post.author}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
            查看更多文章
          </button>
        </div>
      </div>
    </section>
  );
}