import React from 'react';

const Training = () => {
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
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-sygo-yellow to-sygo-pink">Training</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-600 dark:text-slate-300 max-w-[800px] mx-auto leading-relaxed">
            Empowering youth and women through comprehensive capacity building and skills development.
          </p>
        </div>
      </section>

      {/* Modern Training Works Section */}
      <section className="py-[80px] lg:py-[120px]">
        <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {/* Training Card 1 */}
            <div className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 cursor-pointer">
              <div className="absolute inset-0 bg-sygo-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Vocational Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-full p-[32px] z-20 translate-y-[20px] group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-sygo-pink text-white px-[12px] py-[4px] rounded-full text-[12px] font-bold uppercase tracking-wider mb-[12px] inline-block shadow-md">Skill Building</span>
                <h3 className="text-[24px] font-bold text-white mb-[8px] leading-tight">Vocational Training</h3>
                <p className="text-white/80 text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Equipping youth with practical, market-ready skills to thrive in the modern economy.</p>
              </div>
            </div>

            {/* Training Card 2 */}
            <div className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 cursor-pointer">
              <div className="absolute inset-0 bg-sygo-purple/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Leadership Workshops" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-full p-[32px] z-20 translate-y-[20px] group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-sygo-purple text-white px-[12px] py-[4px] rounded-full text-[12px] font-bold uppercase tracking-wider mb-[12px] inline-block shadow-md">Leadership</span>
                <h3 className="text-[24px] font-bold text-white mb-[8px] leading-tight">Youth Leadership</h3>
                <p className="text-white/80 text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Empowering the next generation of leaders through intensive workshops and mentorship.</p>
              </div>
            </div>

            {/* Training Card 3 */}
            <div className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 cursor-pointer lg:col-span-1 md:col-span-2">
              <div className="absolute inset-0 bg-sygo-green/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tech Skills" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-full p-[32px] z-20 translate-y-[20px] group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-sygo-blue text-white px-[12px] py-[4px] rounded-full text-[12px] font-bold uppercase tracking-wider mb-[12px] inline-block shadow-md">Technology</span>
                <h3 className="text-[24px] font-bold text-white mb-[8px] leading-tight">Digital Literacy</h3>
                <p className="text-white/80 text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Bridging the digital divide with comprehensive computer and internet training.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Training;
