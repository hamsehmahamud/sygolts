const ImpactUpdatesHub = () => {
  const updates = [
    {
      label: 'MILESTONE',
      date: 'April 15, 2026',
      title: 'Best Emerging Young Leader',
      description: 'Our founder was recently awarded for outstanding contributions to youth empowerment and community development in Somalia.',
      linkText: 'Read the Story',
      borderColor: 'border-l-sygo-yellow',
      labelColor: 'text-sygo-yellow'
    },
    {
      label: 'PROJECT UPDATE',
      date: 'March 22, 2026',
      title: '6 Months of Impact on GBV',
      description: 'Review the latest statistics and stories from our ongoing campaign to combat Gender-Based Violence through youth-led initiatives.',
      linkText: 'View Impact Data',
      borderColor: 'border-l-sygo-blue',
      labelColor: 'text-sygo-blue'
    },
    {
      label: 'COMMUNITY',
      date: 'February 10, 2026',
      title: 'Digital Awareness Drive',
      description: 'Launching our new digital literacy program to equip young people with the skills needed for the modern digital economy.',
      linkText: 'See the Tech',
      borderColor: 'border-l-sygo-purple',
      labelColor: 'text-sygo-purple'
    }
  ];

  return (
    <section className="py-[64px] lg:py-[96px] bg-pastel-blue/30 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
        <h2 className="text-[48px] font-bold text-sygo-purple text-center mb-[64px]">
          Impact & Updates Hub
        </h2>
        
        <div className="grid md:grid-cols-3 gap-[32px]">
          {updates.map((update, idx) => (
            <div key={idx} className={`bg-white dark:bg-slate-900 rounded-[16px] p-[32px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-[8px] ${update.borderColor}`}>
              <div className="flex justify-between items-center mb-[16px]">
                <span className={`text-[12px] font-bold ${update.labelColor} tracking-wider`}>
                  {update.label}
                </span>
                <span className="text-[12px] text-slate-500">
                  {update.date}
                </span>
              </div>
              <h3 className="text-[24px] font-bold text-sygo-purple dark:text-slate-200 mb-[16px] leading-[1.3]">
                {update.title}
              </h3>
              <p className="text-[16px] text-on-surface dark:text-slate-400 mb-[32px] leading-[1.6]">
                {update.description}
              </p>
              <a href="#" className="text-sygo-green font-bold text-[16px] hover:underline transition-all">
                {update.linkText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactUpdatesHub;
