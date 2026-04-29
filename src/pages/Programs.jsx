import React from 'react';

const Programs = () => {
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sygo-blue to-sygo-pink">Programs</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-600 dark:text-slate-300 max-w-[800px] mx-auto leading-relaxed">
            Explore our initiatives across health, education, environment, and social empowerment.
          </p>
        </div>
      </section>

      {/* Page Content Placeholder */}
      <section className="py-[80px] lg:py-[120px]">
        <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
          <div className="bg-white dark:bg-slate-900/50 rounded-3xl p-[40px] md:p-[60px] shadow-xl border border-slate-100 dark:border-slate-800">
            <h2 className="text-[28px] md:text-[36px] font-bold text-sygo-purple dark:text-white mb-[24px]">
              Content Coming Soon
            </h2>
            <p className="text-[16px] md:text-[18px] text-slate-600 dark:text-slate-400 mb-[32px] leading-relaxed">
              We are actively building this section to provide you with the most up-to-date and comprehensive information. Check back soon for exciting updates!
            </p>
            <div className="w-full h-[300px] rounded-2xl bg-slate-100 dark:bg-slate-800/50 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
