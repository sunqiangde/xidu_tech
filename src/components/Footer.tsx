import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    服务: ['软件设计', '软件开发', '云托管', 'AI集成'],
    公司: [
      { name: '关于我们', href: '/about' }, 
      { name: '博客', href: '/blog' }, 
      '招聘', 
      '联系我们'
    ],
  };

  return (
    <footer className="bg-[#0B0B0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              <h3 className="relative text-white tracking-wide" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                喜都科技（吉林省）有限公司
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md" style={{ lineHeight: '1.8' }}>
              专注于为企业提供高品质的软件设计、开发与托管服务。
              我们致力于用技术创造价值，让每一个产品都充满温度。
            </p>
            <div className="flex flex-col gap-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0F62FE]" />
                <span>sunqiang@xidu-tech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00BFA6]" />
                <span>+86 186 8660 5444</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#0F62FE]" />
                <span>中国·长春</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
              服务
            </h4>
            <ul className="space-y-3">
              {footerLinks.服务.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 relative group inline-block"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
              公司
            </h4>
            <ul className="space-y-3">
              {footerLinks.公司.map((link, index) => {
                const isObject = typeof link === 'object' && link !== null;
                const linkName = isObject ? link.name : link;
                const linkHref = isObject ? link.href : '#';
                
                return (
                  <li key={index}>
                    <a
                      href={linkHref}
                      className="text-gray-400 hover:text-white transition-colors duration-200 relative group inline-block"
                    >
                      {linkName}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-start gap-2">
              <p className="text-gray-500 text-sm">
                © 2025 喜都科技（吉林省）有限公司. 保留所有权利.
              </p>
              <p className="text-gray-500 text-sm">
                吉 ICP 备 2025032619 号 - 1
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                隐私政策
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                服务条款
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0F62FE]/50 to-transparent" />
    </footer>
  );
}