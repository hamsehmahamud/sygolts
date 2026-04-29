import { Heart, Users } from 'lucide-react';
import empowermentImage from '../assets/empowerment.png';
import educationImage from '../assets/education.png';

const VisionMission = () => {
  return (
    <section className="relative py-[80px] lg:py-[120px] bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Animated Glowing Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sygo-pink/10 dark:bg-sygo-pink/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] rounded-full bg-sygo-blue/10 dark:bg-sygo-blue/10 blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px] relative z-10">
        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-[48px] items-center mb-[96px] group">
          <div className="order-2 md:order-1 relative overflow-hidden rounded-irregular-2 shadow-2xl transition-all duration-700 hover:shadow-sygo-pink/30 hover:-translate-y-4">
            <div className="absolute inset-0 bg-sygo-pink/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <img 
              src={empowermentImage} 
              alt="Our Vision" 
              className="w-full aspect-square object-cover border-[12px] border-white/80 dark:border-slate-800/80 backdrop-blur-sm transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-[40px] rounded-[32px] border border-white dark:border-slate-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 bg-pastel-pink dark:bg-sygo-pink/20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-sygo-pink group-hover:rotate-12 group-hover:scale-110 shadow-lg">
              <Heart className="text-sygo-pink dark:text-sygo-pink group-hover:text-white w-8 h-8 transition-colors duration-500" />
            </div>
            <h2 className="text-[40px] md:text-[48px] font-black text-transparent bg-clip-text bg-gradient-to-r from-sygo-pink to-sygo-purple">
              Our Vision
            </h2>
            <p className="text-[18px] text-slate-700 dark:text-slate-300 leading-[1.8] font-medium">
              A Society Where Empowered Youth Lead. The SYGO movement believes in the power of youth to transform society. We provide the tools for young Somalis to reach their full potential.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-[48px] items-center group">
          <div className="space-y-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-[40px] rounded-[32px] border border-white dark:border-slate-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 bg-pastel-blue dark:bg-sygo-blue/20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-sygo-blue group-hover:-rotate-12 group-hover:scale-110 shadow-lg">
              <Users className="text-sygo-blue dark:text-sygo-blue group-hover:text-white w-8 h-8 transition-colors duration-500" />
            </div>
            <h2 className="text-[40px] md:text-[48px] font-black text-transparent bg-clip-text bg-gradient-to-r from-sygo-blue to-sygo-purple">
              Our Mission
            </h2>
            <p className="text-[18px] text-slate-700 dark:text-slate-300 leading-[1.8] font-medium">
              To empower Somali youth and women through comprehensive education, health access, skill training, and leadership opportunities, enabling them to become active contributors to a sustainable and inclusive society.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-irregular-2 shadow-2xl transition-all duration-700 hover:shadow-sygo-blue/30 hover:-translate-y-4">
            <div className="absolute inset-0 bg-sygo-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <img 
              src={educationImage} 
              alt="Our Mission" 
              className="w-full aspect-square object-cover border-[12px] border-white/80 dark:border-slate-800/80 backdrop-blur-sm transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
