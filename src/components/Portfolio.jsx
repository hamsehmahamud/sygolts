import { Link } from 'react-router-dom';
import { activities } from '../data/activities';

const Portfolio = () => {
  // Use the centralized activities data directly so the IDs match for the "Learn More" routing
  const programs = activities;

  return (
    <section id="portfolio" className="relative py-[80px] lg:py-[120px] bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800/50 overflow-hidden">
      {/* Animated Glowing Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sygo-pink/10 dark:bg-sygo-pink/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-blue/10 dark:bg-sygo-blue/10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-[24px] lg:px-[96px] max-w-[1280px] relative z-10">
        <div className="text-center mb-[80px]">
          <h2 className="text-[40px] md:text-[56px] font-black leading-tight">
            <span className="text-sygo-purple dark:text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sygo-pink to-sygo-purple">Program</span>
            <span className="text-sygo-purple dark:text-white"> Portfolio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {programs.map((program, idx) => (
            <div 
              key={program.id}
              className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-[24px] overflow-hidden shadow-lg border border-white/50 dark:border-slate-700/50 flex flex-col group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-in-up ${idx === 6 ? 'lg:col-start-2' : ''}`}
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              {/* Image Header */}
              <div className="relative h-[250px] overflow-hidden">
                <div className="absolute inset-0 bg-sygo-purple/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-[16px] right-[16px] z-20 px-[16px] py-[6px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-sygo-purple dark:text-white text-[12px] font-bold uppercase tracking-wider rounded-full shadow-md">
                  {program.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-[24px] md:p-[32px] flex flex-col flex-grow">
                <h4 className="text-[22px] font-black text-sygo-purple dark:text-white mb-[16px] leading-tight group-hover:text-sygo-pink transition-colors">
                  {program.title}
                </h4>
                
                <p className="text-[16px] text-slate-600 dark:text-slate-300 mb-[32px] line-clamp-3 leading-relaxed font-medium">
                  {program.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={`/activity/${program.id}`}
                    className="inline-flex items-center gap-[8px] bg-sygo-blue/10 dark:bg-sygo-blue/20 text-sygo-blue px-[24px] py-[12px] rounded-full font-bold text-[14px] hover:bg-sygo-blue hover:text-white transition-all group-hover:shadow-lg"
                  >
                    Learn More <span className="text-[18px] leading-none transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
