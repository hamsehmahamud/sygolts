import React from 'react';
import { History, Briefcase, HeartHandshake, ArrowRight } from 'lucide-react';
import teamImg1 from '../assets/hero_women.png';
import teamImg2 from '../assets/hero_girls_studying.png';

const WhoWeAre = () => {
  return (
    <section className="py-[80px] lg:py-[120px] bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-[64px] items-center">
          
          {/* Left Column: Text & History */}
          <div className="space-y-[32px] relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-[8px] bg-sygo-pink/10 dark:bg-sygo-pink/20 text-sygo-pink px-[16px] py-[8px] rounded-full font-bold text-[14px] uppercase tracking-wider">
              <span className="w-[8px] h-[8px] rounded-full bg-sygo-pink animate-pulse"></span>
              Who We Are
            </div>

            <h2 className="text-[36px] md:text-[48px] font-bold text-sygo-purple dark:text-white leading-tight">
              A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sygo-pink to-sygo-blue">Empowerment</span> & Action
            </h2>

            <p className="text-[16px] md:text-[18px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded on the belief that youth and women are the backbone of society, the <strong>Somali Youth Growth Mind Organization (SYGO)</strong> has a rich history of grassroots activism. We began as a small initiative and have grown into a leading force for sustainable development in the Somali Regional State.
            </p>

            <div className="space-y-[24px] pt-[16px]">
              {/* Point 1 */}
              <div className="flex items-start gap-[16px] group">
                <div className="w-[48px] h-[48px] rounded-full bg-sygo-blue/10 flex-shrink-0 flex items-center justify-center text-sygo-blue group-hover:bg-sygo-blue group-hover:text-white transition-all duration-300">
                  <History size={24} />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-sygo-purple dark:text-white mb-[8px]">Our History</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Over the years, we have evolved from local community dialogues to spearheading regional campaigns, focusing heavily on education, health, and gender equality.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-[16px] group">
                <div className="w-[48px] h-[48px] rounded-full bg-sygo-pink/10 flex-shrink-0 flex items-center justify-center text-sygo-pink group-hover:bg-sygo-pink group-hover:text-white transition-all duration-300">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-sygo-purple dark:text-white mb-[8px]">How We Work</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We employ a collaborative, community-first approach. By partnering directly with local governments, international NGOs, and the youth themselves, we design programs that offer real, measurable impact.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-[24px] flex items-center gap-[12px] bg-sygo-purple text-white px-[32px] py-[16px] rounded-[30px] font-bold text-[16px] shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all group">
              Learn More About Our Team
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Modern Image Composition */}
          <div className="relative h-[500px] md:h-[600px] w-full mt-[40px] lg:mt-0 group">
            {/* Background Blob Effect */}
            <div className="absolute top-[10%] right-[10%] w-[60%] h-[60%] bg-sygo-blue/20 dark:bg-sygo-blue/10 rounded-full blur-[80px]"></div>
            
            {/* Image 1 (Main Team Photo) */}
            <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-[30px] overflow-hidden shadow-2xl border-[4px] border-white dark:border-slate-800 z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-sygo-purple/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <img 
                src={teamImg1} 
                alt="SYGO Team working together" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 (Secondary Team/Action Photo overlapping) */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-[30px] overflow-hidden shadow-2xl border-[6px] border-white dark:border-slate-900 z-20 transition-transform duration-500 group-hover:translate-y-2 group-hover:-translate-x-2">
              <div className="absolute inset-0 bg-sygo-pink/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <img 
                src={teamImg2} 
                alt="SYGO Members in action" 
                className="w-full h-full object-cover"
              />
              
              {/* Experience Floating Card inside Image 2 */}
              <div className="absolute bottom-[20px] left-[20px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-[20px] py-[12px] rounded-xl shadow-lg z-20 border border-white/20">
                <div className="flex items-center gap-[12px]">
                  <HeartHandshake className="text-sygo-pink" size={28} />
                  <div>
                    <span className="block text-[20px] font-bold text-sygo-purple dark:text-white leading-none">10+ Years</span>
                    <span className="text-[12px] text-slate-600 dark:text-slate-300 font-medium">Of Dedication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Dots Pattern */}
            <div className="absolute top-[60%] right-[-20px] z-0 opacity-30 dark:opacity-20 animate-pulse">
              <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle fill="#F72585" cx="2" cy="2" r="2"></circle>
                </pattern>
                <rect width="100" height="100" fill="url(#dots)"></rect>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
