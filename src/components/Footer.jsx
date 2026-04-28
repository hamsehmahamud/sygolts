import logo from '../assets/sygo_main_logo.jpg';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowUp, 
  Send 
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
    <footer className="bg-[#4A148C] dark:bg-black text-white pt-8 pb-8 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-sygo-pink/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sygo-blue/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden">
                <img src={logo} alt="SYGO Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight">SYGO</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering Somali youth through education, health, and leadership programs to drive sustainable change.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sygo-pink transition-colors group"
                >
                  {social.Icon && <social.Icon size={18} className="group-hover:scale-110 transition-transform" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 border-l-4 border-sygo-pink pl-4">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-sygo-pink transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-sygo-pink transition-colors">Our Programs</a></li>
              <li><a href="#" className="hover:text-sygo-pink transition-colors">Impact Reports</a></li>
              <li><a href="#" className="hover:text-sygo-pink transition-colors">Latest Blog</a></li>
              <li><a href="#" className="hover:text-sygo-pink transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-xl font-bold mb-8 border-l-4 border-sygo-blue pl-4">Get Involved</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-sygo-blue transition-colors">Become a Volunteer</a></li>
              <li><a href="#" className="hover:text-sygo-blue transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-sygo-blue transition-colors">Make a Donation</a></li>
              <li><a href="#" className="hover:text-sygo-blue transition-colors">Sponsor a Project</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-8 border-l-4 border-sygo-yellow pl-4">Newsletter</h4>
            <p className="text-gray-300 mb-6">Stay updated with our latest news and impact stories.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-6 py-4 bg-white/10 rounded-2xl outline-none focus:ring-2 ring-sygo-pink transition-all border-none text-white"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-sygo-pink px-4 rounded-xl hover:bg-sygo-pink/80 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-4" />

        <div className="flex flex-col md:row-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2026 Somali Youth Growth Mind Organisation (SYGO). All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-sygo-pink rounded-full flex items-center justify-center shadow-lg hover:shadow-sygo-pink/20 hover:-translate-y-1 transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
