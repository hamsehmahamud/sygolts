const Team = () => {
  const teamMembers = [
    {
      name: 'Amina Hassan Mohamed',
      role: 'Executive Director',
      description: "Leading SYGO's vision for empowering Somali youth through strategic initiatives.",
    },
    {
      name: 'Mohamed Ahmed Farah',
      role: 'Programs Director',
      description: 'Overseeing all SYGO programs with focus on gender-based violence prevention.',
    },
    {
      name: 'Fatima Ali Ibrahim',
      role: 'Community Engagement Lead',
      description: 'Connecting SYGO with communities across Somalia for maximum impact.',
    },
    {
      name: 'Hassan Abdi Osman',
      role: 'Operations Manager',
      description: 'Ensuring seamless execution of all SYGO operations and partnerships.',
    }
  ];

  return (
    <section className="relative py-[80px] lg:py-[120px] bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Animated Glowing Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sygo-blue/10 dark:bg-sygo-blue/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sygo-pink/10 dark:bg-sygo-pink/10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px] relative z-10">
        <div className="text-center mb-[80px] animate-slide-in-up">
          <h2 className="text-[40px] md:text-[56px] font-black leading-tight mb-[16px]">
            <span className="text-sygo-purple dark:text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sygo-pink to-sygo-purple">Team</span>
            <span className="text-sygo-purple dark:text-white"> Working</span>
          </h2>
          <p className="text-[18px] text-slate-500 dark:text-slate-400">
            Meet the dedicated professionals driving SYGO's mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[64px]">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-[24px] p-[32px] text-center shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-2xl animate-slide-in-up overflow-hidden"
              style={{ animationDelay: `${(idx + 1) * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sygo-pink/5 to-sygo-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-[80px] h-[80px] mx-auto bg-gradient-to-tr from-sygo-blue to-sygo-pink rounded-full mb-[24px] flex items-center justify-center text-white text-[32px] font-black shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  {member.name.charAt(0)}
                </div>
                
                <h3 className="text-[20px] font-black text-sygo-purple dark:text-white mb-[8px] leading-tight group-hover:text-sygo-pink transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[14px] font-bold text-sygo-blue mb-[16px] tracking-wider uppercase">
                  {member.role}
                </p>
                <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-sygo-purple to-sygo-pink text-white font-bold py-[16px] px-[40px] rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sygo-pink/30 flex items-center justify-center mx-auto gap-[8px] group">
            View Full Team <span className="transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
