import React, { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (!inView) {
      setCount(0); // Reset to 0 when out of view
      return;
    }

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const nextCount = Math.min(
        Math.floor((progress / duration) * end),
        end
      );
      
      setCount(nextCount);
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, inView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const Stats = () => {
  const stats = [
    { label: 'Completed Projects', value: 31 },
    { label: 'Projects Implemented', value: 2 },
    { label: 'Beneficiaries Reached', value: 3000 },
    { label: 'Partners', value: 6 }
  ];

  return (
    <section className="py-20 relative bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 bg-sygo-blue/5 dark:bg-sygo-blue/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg md:text-xl font-bold text-sygo-purple dark:text-sygo-blue leading-relaxed">
            Together, we are not just counting numbers; we are transforming lives and building a brighter future for our communities.
          </p>
        </div>
        
        <div className="bg-sygo-blue/20 dark:bg-sygo-pink/20 rounded-[24px] shadow-[0_10px_40px_rgba(114,9,183,0.1)] dark:shadow-[0_10px_40px_rgba(247,37,133,0.1)] overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 border border-sygo-blue/20 dark:border-sygo-pink/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-900 p-10 text-center flex flex-col justify-center items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-sygo-pink dark:text-sygo-blue mb-4 tracking-tight drop-shadow-sm">
                  <AnimatedNumber end={stat.value} duration={2500} />
                </div>
                <div className="text-md md:text-lg font-bold text-sygo-purple dark:text-slate-200 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
