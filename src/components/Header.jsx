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
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-md border-b border-slate-200/50 dark:border-slate-800/50' 
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'
      } h-[80px] lg:h-[100px] px-[20px] py-[12px] flex items-center`}
    >
      <div className="container mx-auto flex justify-between items-center w-full max-w-[1280px]">
        {/* Logo */}
        <div className="flex items-center gap-[16px] group cursor-pointer transition-transform hover:scale-105">
          <div className="w-[64px] h-[64px] bg-white dark:bg-slate-100 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] p-[4px] flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-600">
            <img 
              src={logo} 
              alt="SYGO Logo" 
              className="w-full h-full object-contain rounded-full mix-blend-multiply" 
            />
          </div>
          <div className="flex flex-col hidden sm:flex">
            <span className="text-[24px] font-bold text-sygo-purple dark:text-white leading-tight tracking-tight">SYGO</span>
            <span className="text-[14px] font-medium text-sygo-pink">
              Somali Youth Growth Mind Organization
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[8px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`relative px-[20px] py-[10px] text-[18px] font-bold rounded-full transition-all duration-300 ${
                activeTab === link.name 
                  ? 'text-sygo-purple dark:text-white bg-sygo-blue/10 dark:bg-sygo-blue/20' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-sygo-purple dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {link.name}
              {activeTab === link.name && (
                <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-sygo-pink"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-[24px]">
          <button 
            onClick={toggleTheme}
            className="group relative w-[48px] h-[48px] bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-sygo-purple dark:text-sygo-yellow shadow-inner hover:shadow-md transition-all duration-500 overflow-hidden"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-sygo-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {theme === 'light' ? (
              <Moon size={24} className="transition-transform duration-500 group-hover:-rotate-[20deg]" />
            ) : (
              <Sun size={24} className="transition-transform duration-500 group-hover:rotate-90" />
            )}
          </button>
          <button className="bg-sygo-pink hover:bg-[#d61b6d] text-white font-bold text-[18px] px-[32px] py-[14px] rounded-[30px] shadow-lg shadow-sygo-pink/30 hover:shadow-sygo-pink/50 hover:-translate-y-1 transition-all duration-300">
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-[16px]">
          <button 
            onClick={toggleTheme}
            className="w-[44px] h-[44px] bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-sygo-purple dark:text-sygo-yellow shadow-inner transition-transform duration-500 hover:rotate-180"
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button 
            className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-sygo-purple dark:text-slate-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} className="animate-spin-once" /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[80px] sm:top-[100px] left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl py-[32px] px-[24px] border-t dark:border-slate-800 flex flex-col gap-[24px] animate-slide-in-up">
          <nav className="flex flex-col gap-[12px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[20px] font-bold px-[20px] py-[14px] rounded-2xl transition-all ${
                  activeTab === link.name 
                    ? 'text-white bg-sygo-purple shadow-md' 
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
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
          <button className="bg-sygo-pink hover:bg-[#d61b6d] text-white font-bold text-[20px] px-[32px] py-[16px] rounded-[24px] w-full shadow-lg shadow-sygo-pink/30 hover:shadow-sygo-pink/50 transition-all">
            Donate Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
