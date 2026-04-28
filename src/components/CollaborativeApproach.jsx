const CollaborativeApproach = () => {
  const approaches = [
    { title: 'Collaboration & Team-Work', description: 'Working together across all levels to maximize our impact.', color: 'bg-sygo-blue' },
    { title: 'Inclusiveness & Integrity', description: 'Ensuring every voice is heard while upholding the highest ethical standards.', color: 'bg-sygo-pink' },
    { title: 'Sustainability & Results', description: 'Focusing on long-term outcomes that benefit the community for generations.', color: 'bg-sygo-green' },
  ];

  return (
    <section className="py-[64px] lg:py-[96px] bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-[64px] items-center">
          
          {/* Left Column */}
          <div className="space-y-[32px]">
            <h2 className="text-[40px] font-bold text-sygo-purple">
              Our Collaborative Approach...
            </h2>
            <div className="space-y-[24px]">
              {approaches.map((item, idx) => (
                <div key={idx} className="flex items-start gap-[16px] group">
                  <div className={`w-[40px] h-[40px] ${item.color} rounded-[8px] flex-shrink-0 mt-1 transition-transform group-hover:scale-110`}></div>
                  <div>
                    <h3 className="text-[18px] font-bold text-sygo-purple dark:text-slate-200 mb-[8px]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-on-surface dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] rounded-full border-[8px] border-transparent bg-clip-padding flex items-center justify-center animate-pulse-glow"
                 style={{ backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #4CC9F0, #7209B7)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
              <div className="absolute inset-0 rounded-full dark:bg-slate-900" style={{ margin: '-8px', zIndex: -1 }}></div>
              <div className="text-center z-10">
                <div className="text-[48px] font-bold text-sygo-purple">100%</div>
                <div className="text-[14px] text-sygo-pink tracking-widest font-bold mt-2">LOVE & TRUST</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollaborativeApproach;
