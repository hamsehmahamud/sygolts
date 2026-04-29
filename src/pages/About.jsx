import React from 'react';
import WhoWeAre from '../components/WhoWeAre';
import ContactForm from '../components/ContactForm';

const About = () => {
  return (
    <div className="pt-[80px] lg:pt-[100px] min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Page Hero */}
      <section className="relative py-[80px] lg:py-[120px] bg-slate-50 dark:bg-slate-900/30 overflow-hidden border-b border-slate-200 dark:border-slate-800/50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-blue/10 dark:bg-sygo-blue/20 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-pink/10 dark:bg-sygo-pink/20 blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px] relative z-10 text-center">
          <h1 className="text-[40px] md:text-[56px] font-bold text-sygo-purple dark:text-white mb-[24px] leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sygo-pink to-sygo-purple">SYGO</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-600 dark:text-slate-300 max-w-[800px] mx-auto leading-relaxed">
            Discover our mission, vision, and the passionate team driving change in the Somali Regional State.
          </p>
        </div>
      </section>

      {/* Embedded WhoWeAre Section */}
      <WhoWeAre />

      {/* Embedded ContactForm Section */}
      <div className="bg-slate-50 dark:bg-slate-900/50">
        <ContactForm />
      </div>
    </div>
  );
};

export default About;
