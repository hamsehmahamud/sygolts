import heroImage from '../assets/hero_women.png';
import sealLogo from '../assets/sygo_main_logo.jpg';

const Hero = () => {
  return (
    <section className="relative pt-[120px] pb-[64px] lg:pt-[160px] lg:pb-[96px] overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-[24px] lg:px-[96px] max-w-[1280px] grid lg:grid-cols-2 gap-[48px] items-center">
        
        {/* Left Column Content */}
        <div className="space-y-[24px] animate-slide-in-up">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-[8px] bg-pastel-yellow dark:bg-sygo-yellow/10 border-[2px] border-sygo-yellow px-[16px] py-[4px] rounded-full">
            <span className="text-[14px]">👋</span>
            <span className="text-[12px] font-bold text-sygo-purple dark:text-sygo-yellow tracking-wider">
              WELCOME TO SYGO
            </span>
          </div>
          
          <div className="space-y-[16px]">
            <h2 className="text-[18px] md:text-[20px] font-bold text-sygo-blue uppercase tracking-[0.1em]">
              Strategic Focus
            </h2>
            
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1]">
              <span className="text-on-surface dark:text-white">Primary Focus: </span><br className="hidden md:block" />
              <span className="text-sygo-pink">Youth Empowerment</span>
            </h1>
          </div>

          <div className="pt-2">
            <h3 className="text-[20px] font-bold text-sygo-purple">
              Women & Girls Empowerment
            </h3>
          </div>
          
          <p className="text-[18px] text-on-surface dark:text-slate-300 max-w-[500px] leading-[1.6]">
            To empower youth—especially young women and girls—through skills development, leadership protection, and economic opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-[16px] pt-[16px]">
            <button className="bg-sygo-purple text-white px-[40px] py-[16px] rounded-[32px] font-bold text-[20px] shadow-lg hover:scale-105 transition-all">
              Support Our Mission
            </button>
            <button className="bg-white dark:bg-slate-800 text-sygo-purple font-bold text-[20px] border-[4px] border-sygo-blue px-[32px] py-[16px] rounded-[20px] hover:bg-sygo-blue/10 transition-all">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="relative mt-[32px] lg:mt-0 flex justify-center animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Main Hero Image */}
          <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-irregular-1 overflow-hidden border-[8px] border-white dark:border-slate-800 shadow-2xl transition-transform duration-500 hover:scale-105">
            <img 
              src={heroImage} 
              alt="Youth Empowerment" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge Circle */}
          <div className="absolute -bottom-[40px] -left-[40px] z-20 w-[224px] h-[224px] bg-white dark:bg-slate-800 rounded-full border-[4px] border-sygo-yellow p-[8px] shadow-xl animate-pulse-glow hidden md:block">
            <img 
              src={sealLogo} 
              alt="SYGO Seal" 
              className="w-full h-full object-contain rounded-full" 
            />
          </div>

          {/* Stats Card */}
          <div className="absolute -top-[20px] -right-[20px] z-20 bg-white dark:bg-slate-800 border-[2px] border-pastel-green p-[24px] rounded-[24px] shadow-xl transition-all duration-300 hover:rotate-[-1deg] hover:scale-105 hidden md:block">
            <div className="text-[36px] font-bold text-sygo-purple dark:text-sygo-purple leading-none">1,000+</div>
            <div className="text-[14px] text-on-surface dark:text-slate-300 font-bold mt-[4px]">Youth Engaged</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
