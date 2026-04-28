import { Users, Shield, TrendingUp } from 'lucide-react';

const CollaborativeApproach = () => {
  const approaches = [
    { 
      title: 'Collaboration & Team-Work', 
      description: 'Working together across all levels to maximize our impact.', 
      color: 'bg-sygo-blue',
      icon: Users
    },
    { 
      title: 'Inclusiveness & Integrity', 
      description: 'Ensuring every voice is heard while upholding the highest ethical standards.', 
      color: 'bg-sygo-pink',
      icon: Shield
    },
    { 
      title: 'Sustainability & Results', 
      description: 'Focusing on long-term outcomes that benefit the community for generations.', 
      color: 'bg-sygo-yellow',
      icon: TrendingUp
    },
  ];

  return (
    <section className="py-[64px] lg:py-[96px] bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sygo-pink/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sygo-blue/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-[64px] items-center">
          
          {/* Left Column: Interactive Cards */}
          <div className="space-y-[48px]">
            <h2 className="text-[40px] md:text-[48px] font-bold text-sygo-purple dark:text-white leading-tight animate-slide-in-up">
              Our <span className="text-sygo-blue">Collaborative</span> Approach
            </h2>
            <div className="space-y-[24px]">
              {approaches.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-slate-800 p-[24px] rounded-[16px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700 flex items-start gap-[20px] group animate-slide-in-up"
                  style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  <div className={`w-[56px] h-[56px] ${item.color} rounded-[12px] flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-sygo-purple dark:text-slate-100 mb-[8px] group-hover:text-sygo-pink transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Modern Infographic */}
          <div className="flex justify-center items-center relative min-h-[450px]">
            {/* Core Circle */}
            <div className="relative w-[280px] h-[280px] rounded-full border-[2px] border-dashed border-sygo-blue/30 flex items-center justify-center animate-rotate-slow"></div>
            
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-sygo-purple to-sygo-pink shadow-2xl flex items-center justify-center animate-pulse-glow hover:scale-105 transition-transform duration-500 cursor-default">
                <div className="text-center text-white">
                  <div className="text-[56px] font-black leading-none drop-shadow-md">100%</div>
                  <div className="text-[14px] uppercase tracking-[0.2em] font-bold mt-2 text-sygo-yellow">Trust & Impact</div>
                </div>
              </div>
            </div>

            {/* Floating Stat Card 1 */}
            <div className="absolute top-[10%] right-[5%] lg:-right-[10%] bg-white dark:bg-slate-800 p-[20px] rounded-[16px] shadow-xl animate-float border border-slate-100 dark:border-slate-700 z-20">
              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] rounded-full bg-sygo-blue/10 flex items-center justify-center text-sygo-blue">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-[24px] font-black text-sygo-purple dark:text-white leading-none">50+</div>
                  <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Communities</div>
                </div>
              </div>
            </div>

            {/* Floating Stat Card 2 */}
            <div className="absolute bottom-[10%] left-[5%] lg:-left-[10%] bg-white dark:bg-slate-800 p-[20px] rounded-[16px] shadow-xl animate-float border border-slate-100 dark:border-slate-700 z-20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] rounded-full bg-sygo-yellow/10 flex items-center justify-center text-sygo-yellow">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="text-[24px] font-black text-sygo-purple dark:text-white leading-none">10k+</div>
                  <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Youth Reached</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborativeApproach;
