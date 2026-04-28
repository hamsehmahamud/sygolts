import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import logo from '../assets/sygo_main_logo.jpg';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-md py-2' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer animate-fade-in-left">
          <div className="relative w-12 h-12 bg-white dark:bg-transparent rounded-full p-0.5 shadow-inner overflow-hidden border-2 border-sygo-purple/20 dark:border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <img 
              src={logo} 
              alt="SYGO Logo" 
              className="w-full h-full object-contain dark:filter dark:brightness-110" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-sygo-purple dark:text-sygo-purple-light leading-tight group-hover:tracking-wider transition-all">SYGO</span>
            <span className="text-[10px] font-bold text-sygo-pink uppercase tracking-tighter">
              Somali Youth Growth Mind Organization
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`font-bold text-sm transition-all relative py-2 ${
                activeTab === link.name 
                  ? 'text-sygo-purple dark:text-sygo-purple-light' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-sygo-purple dark:hover:text-white'
              }`}
            >
              {link.name}
              {activeTab === link.name && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-sygo-purple rounded-full"></div>
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 bg-sygo-purple/5 dark:bg-white/10 rounded-full flex items-center justify-center text-sygo-purple dark:text-sygo-yellow hover:rotate-12 active:scale-90 transition-all duration-300 shadow-sm"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? (
              <Moon size={18} fill="currentColor" className="animate-in fade-in zoom-in duration-300" />
            ) : (
              <Sun size={18} fill="currentColor" className="animate-in fade-in zoom-in duration-300" />
            )}
          </button>
          <button className="bg-[#E91E63] text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm">
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-sygo-purple dark:text-sygo-purple-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 absolute top-full left-0 w-full shadow-2xl py-8 px-6 animate-fade-in-down border-t dark:border-gray-700">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-bold ${
                  activeTab === link.name 
                    ? 'text-sygo-purple dark:text-sygo-purple-light' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => {
                  setActiveTab(link.name);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 bg-sygo-purple/5 dark:bg-white/10 rounded-full flex items-center justify-center text-sygo-purple dark:text-sygo-yellow active:scale-90 transition-all"
              >
                {theme === 'light' ? <Moon size={20} fill="currentColor" /> : <Sun size={20} fill="currentColor" />}
              </button>
              <button className="bg-[#E91E63] text-white font-bold py-3 px-8 rounded-full shadow-lg text-sm">
                Donate Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
