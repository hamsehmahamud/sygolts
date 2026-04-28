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
    <section className="py-[64px] lg:py-[96px] bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
        <div className="text-center mb-[64px] animate-slide-in-up">
          <h2 className="text-[40px] md:text-[48px] font-bold text-on-surface dark:text-slate-200 mb-[8px]">
            Our <span className="text-sygo-pink">Team</span> Working
          </h2>
          <p className="text-[18px] text-slate-500 dark:text-slate-400">
            Meet the dedicated professionals driving SYGO's mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[48px]">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 dark:bg-slate-800 rounded-[12px] p-[32px] text-center shadow-sm border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slide-in-up opacity-0"
              style={{ animationDelay: `${(idx + 1) * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <h3 className="text-[20px] font-bold text-on-surface dark:text-slate-200 mb-[8px] leading-tight">
                {member.name.split(' ').map((word, i, arr) => 
                  <span key={i}>{word}{i !== arr.length - 1 && <br className="hidden md:block lg:hidden" />} </span>
                )}
              </h3>
              <p className="text-[14px] font-bold text-sygo-blue mb-[16px]">
                {member.role}
              </p>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-sygo-blue hover:bg-sygo-blue/90 text-white font-bold py-[12px] px-[32px] rounded-[8px] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            View Full Team &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
