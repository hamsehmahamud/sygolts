import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import logo from '../assets/sygo_main_logo.jpg';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Programs', href: '#' },
    { name: 'Training', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Reports', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-slate-900 shadow-md' 
          : 'bg-white dark:bg-slate-900'
      } h-[64px] lg:h-[80px] px-[16px] py-[12px] flex items-center`}
    >
      <div className="container mx-auto flex justify-between items-center w-full max-w-[1280px]">
        {/* Logo */}
        <div className="flex items-center gap-[12px] group cursor-pointer">
          <div className="w-[60px] h-[60px] overflow-hidden">
            <img 
              src={logo} 
              alt="SYGO Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="flex flex-col hidden sm:flex">
            <span className="text-[20px] font-bold text-sygo-purple leading-tight">SYGO</span>
            <span className="text-[12px] text-sygo-pink">
              Somali Youth Growth Mind Organization
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[32px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className="nav-link text-[16px]"
            >
              {link.name}
              {activeTab === link.name && (
                <div className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-sygo-yellow"></div>
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-[16px]">
          <button 
            onClick={toggleTheme}
            className="w-[40px] h-[40px] bg-pastel-blue dark:bg-slate-800 rounded-full flex items-center justify-center text-sygo-purple dark:text-sygo-yellow transition-all"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="bg-sygo-pink text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[20px] hover:scale-105 transition-transform">
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-[40px] h-[40px] bg-pastel-blue dark:bg-slate-800 rounded-full flex items-center justify-center text-sygo-purple dark:text-sygo-yellow"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            className="text-sygo-purple dark:text-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[64px] left-0 w-full bg-white dark:bg-slate-900 shadow-xl py-6 px-6 border-t dark:border-slate-800 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[18px] font-bold ${
                  activeTab === link.name ? 'text-sygo-purple' : 'text-on-surface dark:text-slate-200'
                }`}
                onClick={() => {
                  setActiveTab(link.name);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button className="bg-sygo-pink text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[20px] w-full">
            Donate Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
