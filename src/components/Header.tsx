import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '/logo.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', id: 'home' },
    { name: '服务', id: 'services' },
    { name: '案例', id: 'portfolio' },
    // { name: '博客', id: 'blog' },
    // { name: '关于', id: 'about' },
    { name: '联系', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            <a href="#" className="relative flex items-center gap-3 text-white tracking-wide">
              <img 
                src={Logo} 
                alt="喜都科技（吉林省）有限公司" 
                className="h-10 w-auto object-contain rounded-sm"
              />
              <span className="hidden sm:inline">喜都科技（吉林省）有限公司</span>
              <span className="sm:hidden">喜都科技（吉林省）有限公司</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}