import heroImage from '../assets/hero_women.png';
import sealLogo from '../assets/sygo_main_logo.jpg';
import { Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-8 flex items-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="animate-fade-in-left space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFF9C4] dark:bg-[#FFF9C4]/10 px-5 py-1.5 rounded-full shadow-sm border border-[#FBC02D]/20">
            <span className="text-base">👋</span>
            <span className="text-xs font-black text-[#4A148C] dark:text-[#FFF9C4] uppercase tracking-wider">Welcome to SYGO</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#E91E63] rounded-full flex items-center justify-center text-white shadow-lg">
                <span className="text-sm">🎯</span>
              </div>
              <h2 className="text-xl font-black text-[#00ACC1] dark:text-[#26C6DA] uppercase tracking-[0.1em]">Strategic Focus</h2>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1]">
              <span className="text-[#8E24AA] dark:text-[#BA68C8]">Primary Focus:</span><br />
              <span className="text-[#E91E63] dark:text-[#F06292]">Youth Empowerment</span>
            </h1>
          </div>

          <div className="flex gap-4 border-l-4 border-[#FFB300] pl-4 py-1">
            <div className="space-y-0">
              <h3 className="text-lg font-bold text-[#FFB300]">Cross-cutting Priority:</h3>
              <p className="text-2xl font-black text-[#8E24AA] dark:text-[#BA68C8]">Women & Girls Empowerment</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed font-medium">
            To empower youth—especially young women and girls—through skills development, leadership protection, and economic opportunities.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-[#6200EA] text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl shadow-purple-200 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Support Our Mission
            </button>
            <button className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-2 border-[#E0F2F1] dark:border-gray-800 px-8 py-4 rounded-xl font-black text-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-sm">
              <Eye size={20} className="text-[#E91E63]" />
              View Projects
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative animate-fade-in-right flex justify-center">
          {/* Main Image Container */}
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white dark:border-gray-800 p-3 bg-white dark:bg-gray-900 shadow-2xl max-w-lg">
            <div className="rounded-[2rem] overflow-hidden">
              <img 
                src={heroImage} 
                alt="Youth Empowerment" 
                className="w-full h-auto object-cover aspect-[4/5] transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Circular Seal Overlay */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 w-36 h-36 drop-shadow-2xl bg-white dark:bg-transparent rounded-full p-1 border-4 border-sygo-purple/20 dark:border-transparent transition-all duration-300">
              <img 
                src={sealLogo} 
                alt="SYGO Seal" 
                className="w-full h-full object-contain rounded-full dark:filter dark:brightness-110" 
              />
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-6 -right-6 z-20 bg-white dark:bg-gray-800 p-5 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 bg-[#E91E63] rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
              👥
            </div>
            <div>
              <div className="text-2xl font-black text-[#8E24AA] dark:text-[#BA68C8]">1,000+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Youth Engaged</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
