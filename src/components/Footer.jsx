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
    <footer className="bg-sygo-purple text-white pt-[96px] pb-[32px] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-[24px] lg:px-[96px] max-w-[1280px] relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[32px] mb-[64px]">
          {/* Brand Col */}
          <div className="space-y-[16px]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[48px] h-[48px] bg-white rounded-full p-[2px] flex items-center justify-center overflow-hidden">
                <img src={logo} alt="SYGO Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-[24px] font-bold tracking-tight">SYGO</span>
            </div>
            <p className="text-[14px] text-white/80 leading-[1.6]">
              Empowering Somali youth through education, health, and leadership programs to drive sustainable change.
            </p>
            <div className="flex gap-[16px]">
              {socialIcons.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="text-white/80 hover:text-sygo-pink transition-colors"
                >
                  {social.Icon && <social.Icon size={20} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[18px] font-bold mb-[24px]">Quick Links</h4>
            <ul className="space-y-[12px]">
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white hover:underline transition-colors">About Us</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white hover:underline transition-colors">Our Programs</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white hover:underline transition-colors">Impact Reports</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white hover:underline transition-colors">Latest Blog</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white hover:underline transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-[18px] font-bold mb-[24px]">Contact Us</h4>
            <ul className="space-y-[16px]">
              <li className="flex items-start gap-[12px]">
                <MapPin size={20} className="text-sygo-yellow shrink-0 mt-[4px]" />
                <span className="text-[14px] text-white/80 leading-[1.6]">
                  06 Kebele, inside Jigjiga Youth Center (in front of Public Admin & Management College), Jigjiga City, Ethiopia
                </span>
              </li>
              <li className="flex items-start gap-[12px]">
                <Phone size={20} className="text-sygo-yellow shrink-0 mt-[4px]" />
                <span className="text-[14px] text-white/80 leading-[1.6]">
                  +251 948 677 457<br />
                  +251 915 428 533
                </span>
              </li>
              <li className="flex items-start gap-[12px]">
                <Mail size={20} className="text-sygo-yellow shrink-0 mt-[4px]" />
                <span className="text-[14px] text-white/80 leading-[1.6]">
                  sygoacorg@gmail.com<br />
                  samiiraomer7457@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[18px] font-bold mb-[24px]">Newsletter</h4>
            <p className="text-[14px] text-white/80 mb-[16px]">Stay updated with our latest news and impact stories.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-[16px] py-[12px] bg-white rounded-[8px] text-sygo-purple outline-none focus:ring-2 ring-sygo-pink transition-all"
              />
              <button className="absolute right-[4px] top-[4px] bottom-[4px] bg-sygo-pink px-[16px] rounded-[4px] flex items-center justify-center hover:bg-sygo-pink/90 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-[32px] flex flex-col md:flex-row justify-between items-center gap-[16px]">
          <p className="text-[12px] text-white/60">
            © 2026 Somali Youth Growth Mind Organisation (SYGO). All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-[40px] h-[40px] bg-sygo-pink rounded-full flex items-center justify-center shadow-lg hover:-translate-y-[2px] transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
