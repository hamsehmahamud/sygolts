import logo from '../assets/sygo_main_logo.jpg';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowUp, 
  Send,
  MapPin,
  Phone,
  Mail 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-sygo-purple dark:bg-[#0B0F19] text-white pt-[96px] pb-[32px] relative overflow-hidden transition-colors duration-300 dark:border-t dark:border-slate-800">
      <div className="container mx-auto px-[24px] lg:px-[96px] max-w-[1280px] relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[48px] mb-[64px]">
          {/* Brand Col */}
          <div className="space-y-[24px]">
            <div className="flex items-center gap-[16px]">
              <div className="w-[64px] h-[64px] bg-white rounded-xl p-[2px] flex items-center justify-center overflow-hidden shadow-md">
                <img src={logo} alt="SYGO Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-[28px] font-bold tracking-tight">SYGO</span>
            </div>
            <p className="text-[16px] text-white/80 leading-relaxed pr-[20px]">
              Empowering Somali youth through education, health, and leadership programs to drive sustainable change.
            </p>
            <div className="flex gap-[16px]">
              {socialIcons.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-sygo-pink hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  {social.Icon && <social.Icon size={20} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[20px] font-bold mb-[32px] text-sygo-yellow">Quick Links</h4>
            <ul className="space-y-[16px]">
              <li><a href="#" className="text-[16px] text-white/80 hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">About Us</a></li>
              <li><a href="#" className="text-[16px] text-white/80 hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">Our Programs</a></li>
              <li><a href="#" className="text-[16px] text-white/80 hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">Impact Reports</a></li>
              <li><a href="#" className="text-[16px] text-white/80 hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">Latest Blog</a></li>
              <li><a href="#" className="text-[16px] text-white/80 hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-[20px] font-bold mb-[32px] text-sygo-yellow">Contact Us</h4>
            <ul className="space-y-[24px]">
              <li className="flex items-start gap-[16px] group">
                <div className="bg-white/10 p-[10px] rounded-lg group-hover:bg-sygo-pink transition-colors">
                  <MapPin size={20} className="text-sygo-yellow group-hover:text-white transition-colors" />
                </div>
                <span className="text-[15px] text-white/80 leading-relaxed pt-[2px]">
                  06 Kebele, inside Jigjiga Youth Center, Jigjiga City, Ethiopia
                </span>
              </li>
              <li className="flex items-start gap-[16px] group">
                <div className="bg-white/10 p-[10px] rounded-lg group-hover:bg-sygo-pink transition-colors">
                  <Phone size={20} className="text-sygo-yellow group-hover:text-white transition-colors" />
                </div>
                <span className="text-[15px] text-white/80 leading-relaxed pt-[2px]">
                  +251 948 677 457<br />
                  +251 915 428 533
                </span>
              </li>
              <li className="flex items-start gap-[16px] group">
                <div className="bg-white/10 p-[10px] rounded-lg group-hover:bg-sygo-pink transition-colors">
                  <Mail size={20} className="text-sygo-yellow group-hover:text-white transition-colors" />
                </div>
                <span className="text-[15px] text-white/80 leading-relaxed pt-[2px] break-all">
                  sygoacorg@gmail.com<br />
                  samiiraomer7457@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[20px] font-bold mb-[32px] text-sygo-yellow">Newsletter</h4>
            <p className="text-[15px] text-white/80 mb-[24px] leading-relaxed">Stay updated with our latest news and impact stories.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-[20px] py-[16px] bg-white/10 border border-white/20 rounded-[12px] text-white placeholder-white/50 outline-none focus:ring-2 ring-sygo-pink focus:bg-white/20 transition-all duration-300"
              />
              <button className="absolute right-[6px] top-[6px] bottom-[6px] bg-sygo-pink px-[20px] rounded-[8px] flex items-center justify-center hover:bg-[#d61b6d] shadow-md hover:shadow-lg transition-all duration-300">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-[32px] flex flex-col md:flex-row justify-between items-center gap-[24px]">
          <p className="text-[14px] text-white/60 text-center md:text-left order-2 md:order-1">
            Develop Fududeeye Tech solution (+252 63 4512840)
          </p>
          
          <p className="text-[14px] text-white/60 text-center md:text-right order-3 md:order-2">
            © 2026 Somali Youth Growth Mind Organisation (SYGO). All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-[48px] h-[48px] bg-sygo-pink rounded-full flex items-center justify-center shadow-lg hover:-translate-y-[4px] hover:shadow-sygo-pink/50 transition-all duration-300 order-1 md:order-3"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
