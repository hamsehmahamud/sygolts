import { Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-[64px] lg:py-[96px] bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-[96px] max-w-[800px]">
        <div className="text-center mb-[48px] animate-slide-in-up">
          <h2 className="text-[40px] md:text-[48px] font-bold text-on-surface dark:text-slate-200 mb-[16px]">
            Get in <span className="text-sygo-pink">Touch</span>
          </h2>
          <p className="text-[16px] text-slate-600 dark:text-slate-400 max-w-[600px] mx-auto leading-relaxed">
            Have questions or want to collaborate? We'd love to hear from you. Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-[16px] p-[32px] md:p-[48px] shadow-lg animate-slide-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
          <form className="space-y-[24px]">
            <div>
              <label htmlFor="fullName" className="block text-[14px] font-bold text-on-surface dark:text-slate-300 mb-[8px]">
                Full Name *
              </label>
              <input 
                type="text" 
                id="fullName" 
                placeholder="Enter your full name" 
                className="w-full px-[16px] py-[12px] border border-sygo-blue/30 dark:border-slate-600 rounded-[8px] bg-transparent text-on-surface dark:text-white focus:outline-none focus:ring-2 focus:ring-sygo-pink focus:border-transparent transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-[14px] font-bold text-on-surface dark:text-slate-300 mb-[8px]">
                Email Address *
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="your.email@example.com" 
                className="w-full px-[16px] py-[12px] border border-sygo-blue/30 dark:border-slate-600 rounded-[8px] bg-transparent text-on-surface dark:text-white focus:outline-none focus:ring-2 focus:ring-sygo-pink focus:border-transparent transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-[14px] font-bold text-on-surface dark:text-slate-300 mb-[8px]">
                Message *
              </label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Write your message here... (minimum 10 characters)" 
                className="w-full px-[16px] py-[12px] border border-sygo-blue/30 dark:border-slate-600 rounded-[8px] bg-transparent text-on-surface dark:text-white focus:outline-none focus:ring-2 focus:ring-sygo-pink focus:border-transparent transition-all resize-none"
                required
                minLength={10}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-sygo-purple hover:bg-[#5a0791] text-white font-bold py-[14px] rounded-[8px] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-[8px]"
            >
              Send Message <Mail size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
