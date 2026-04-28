const Partners = () => {
  const partners = [
    { 
      name: 'Swiss Agency for Development and Cooperation SDC', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Swiss_Agency_for_Development_and_Cooperation_logo.svg',
      fallback: '/partners/sdc.jpg',
      alt: 'SDC Logo'
    },
    { 
      name: 'SRS Women & Children Affairs Bureau', 
      logo: 'https://ui-avatars.com/api/?name=SRS+Women&background=7209B7&color=fff&size=200&bold=true',
      fallback: '/partners/srs-women-children.jpg',
      alt: 'SRS Women & Children Affairs Bureau Logo'
    },
    { 
      name: 'Somali Regional State Youth and Sport Bureau', 
      logo: 'https://ui-avatars.com/api/?name=SRS+Youth&background=4CC9F0&color=fff&size=200&bold=true',
      fallback: '/partners/srs-youth-sport.jpg',
      alt: 'SRS Youth and Sport Bureau Logo'
    },
    { 
      name: 'WDRO - Women Development & Reliance Organization', 
      logo: 'https://ui-avatars.com/api/?name=WDRO&background=F72585&color=fff&size=200&bold=true',
      fallback: '/partners/wdro.jpg',
      alt: 'WDRO Logo'
    },
    { 
      name: 'Plan International', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Plan_International_Logo.svg',
      fallback: '/partners/plan-international.jpg',
      alt: 'Plan International Logo'
    }
  ];

  return (
    <section className="py-[64px] lg:py-[96px] bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
        <div className="text-center mb-[64px]">
          <h2 className="text-[14px] font-bold text-sygo-pink uppercase tracking-[0.2em] mb-[8px]">
            Trusted By
          </h2>
          <h3 className="text-[32px] md:text-[40px] font-bold text-sygo-purple dark:text-slate-200">
            Our Key Partners
          </h3>
        </div>
      </div>
      
      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center h-[260px] md:h-[300px]">
        {/* Gradient Fades for modern look */}
        <div className="absolute left-0 top-0 bottom-0 w-[50px] md:w-[150px] bg-gradient-to-r from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[50px] md:w-[150px] bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-[200%] md:w-[150%] lg:w-[100%] animate-scroll-left hover:[animation-play-state:paused]">
          <div className="flex w-1/2 justify-around items-start min-w-max px-[20px]">
            {partners.map((partner, idx) => (
              <div 
                key={`group1-${idx}`} 
                className="flex flex-col items-center justify-start mx-[30px] md:mx-[50px] group cursor-pointer"
                title={partner.name}
              >
                <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex items-center justify-center mb-[20px]">
                  {/* Rotating Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-sygo-pink/30 group-hover:border-sygo-pink transition-colors duration-500 animate-rotate-slow"></div>
                  
                  {/* Inner Floating Circle */}
                  <div 
                    className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full bg-white dark:bg-slate-800 shadow-md relative flex items-center justify-center p-[20px] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-sygo-pink/30 group-hover:shadow-xl overflow-hidden animate-float"
                    style={{ animationDelay: `${idx * 0.7}s` }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.alt}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:rotate-[5deg]"
                      onError={(e) => {
                        if(e.target.src !== partner.fallback) {
                          e.target.src = partner.fallback;
                        } else {
                          e.target.style.display = 'none';
                        }
                      }}
                    />
                  </div>
                </div>
                
                {/* Partner Name Below Logo */}
                <h4 className="text-[14px] font-bold text-center text-sygo-purple dark:text-slate-300 max-w-[180px] opacity-70 group-hover:opacity-100 group-hover:text-sygo-pink transition-all duration-300 line-clamp-2">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
          
          <div className="flex w-1/2 justify-around items-start min-w-max px-[20px]">
            {partners.map((partner, idx) => (
              <div 
                key={`group2-${idx}`} 
                className="flex flex-col items-center justify-start mx-[30px] md:mx-[50px] group cursor-pointer"
                title={partner.name}
              >
                <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex items-center justify-center mb-[20px]">
                  <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-sygo-pink/30 group-hover:border-sygo-pink transition-colors duration-500 animate-rotate-slow"></div>
                  
                  <div 
                    className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full bg-white dark:bg-slate-800 shadow-md relative flex items-center justify-center p-[20px] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-sygo-pink/30 group-hover:shadow-xl overflow-hidden animate-float"
                    style={{ animationDelay: `${idx * 0.7}s` }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.alt}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:rotate-[5deg]"
                      onError={(e) => {
                        if(e.target.src !== partner.fallback) {
                          e.target.src = partner.fallback;
                        } else {
                          e.target.style.display = 'none';
                        }
                      }}
                    />
                  </div>
                </div>
                
                <h4 className="text-[14px] font-bold text-center text-sygo-purple dark:text-slate-300 max-w-[180px] opacity-70 group-hover:opacity-100 group-hover:text-sygo-pink transition-all duration-300 line-clamp-2">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
