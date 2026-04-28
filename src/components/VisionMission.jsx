import { Heart, Users } from 'lucide-react';
import empowermentImage from '../assets/empowerment.png';
import educationImage from '../assets/education.png';

const VisionMission = () => {
  return (
    <section className="py-[64px] lg:py-[96px] bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-[48px] items-center mb-[96px]">
          <div className="order-2 md:order-1">
            <img 
              src={empowermentImage} 
              alt="Our Vision" 
              className="w-full aspect-square object-cover rounded-irregular-2 border-8 border-white dark:border-slate-800 shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="w-16 h-16 bg-pastel-pink dark:bg-sygo-pink/20 rounded-2xl flex items-center justify-center">
              <Heart className="text-sygo-pink w-8 h-8" />
            </div>
            <h2 className="text-[40px] font-bold text-sygo-purple">Our Vision</h2>
            <p className="text-[18px] text-on-surface dark:text-slate-300 leading-[1.6]">
              A Society Where Empowered Youth Lead. The SYGO movement believes in the power of youth to transform society. We provide the tools for young Somalis to reach their full potential.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-[48px] items-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-pastel-blue dark:bg-sygo-blue/20 rounded-2xl flex items-center justify-center">
              <Users className="text-sygo-blue w-8 h-8" />
            </div>
            <h2 className="text-[40px] font-bold text-sygo-purple">Our Mission</h2>
            <p className="text-[18px] text-on-surface dark:text-slate-300 leading-[1.6]">
              To empower Somali youth and women through comprehensive education, health access, skill training, and leadership opportunities, enabling them to become active contributors to a sustainable and inclusive society.
            </p>
          </div>
          <div>
            <img 
              src={educationImage} 
              alt="Our Mission" 
              className="w-full aspect-square object-cover rounded-irregular-2 border-8 border-white dark:border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
