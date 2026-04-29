import heroImage from '../assets/hero_women.png';
import sealLogo from '../assets/sygo_main_logo.jpg';

const Hero = () => {
  return (
    <section className="relative pt-[120px] pb-[64px] lg:pt-[160px] lg:pb-[96px] overflow-hidden bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800/50">
      {/* Animated Glowing Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sygo-blue/20 dark:bg-sygo-blue/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-pink/20 dark:bg-sygo-pink/10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-[24px] lg:px-[96px] max-w-[1280px] grid lg:grid-cols-2 gap-[48px] items-center relative z-10">
        
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sygo-pink to-sygo-purple">Youth Empowerment</span>
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
          <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-[40px] overflow-hidden border-[8px] border-white/60 dark:border-slate-800/60 shadow-2xl backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02] animate-float">
            <div className="absolute inset-0 bg-sygo-blue/10 hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
            <img 
              src={heroImage} 
              alt="Youth Empowerment" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge Circle with Rotation Animation */}
          <div className="absolute -bottom-[40px] -left-[40px] z-20 w-[224px] h-[224px] bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-full border-[4px] border-sygo-yellow/80 p-[8px] shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-full h-full animate-rotate-slow">
              <img 
                src={sealLogo} 
                alt="SYGO Seal" 
                className="w-full h-full object-contain rounded-full shadow-inner mix-blend-multiply dark:mix-blend-normal" 
              />
            </div>
          </div>

          {/* Stats Card */}
          <div className="absolute -top-[20px] -right-[20px] z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-[2px] border-pastel-green p-[24px] rounded-[24px] shadow-xl transition-all duration-300 hover:rotate-[-2deg] hover:scale-105 hidden md:block animate-float" style={{ animationDelay: '2s' }}>
            <div className="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-sygo-purple to-sygo-blue leading-none">1,000+</div>
            <div className="text-[14px] text-slate-600 dark:text-slate-300 font-bold mt-[4px]">Youth Engaged</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
