import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-[64px] lg:py-[96px] bg-brand-gradient transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-[96px] max-w-[1000px] text-center">
        <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-white mb-[40px] leading-tight animate-slide-in-up">
          Together, We Can Drive <br className="hidden md:block" />
          Positive <span className="text-sygo-yellow">Social Change!</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[24px] animate-slide-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto bg-sygo-pink hover:bg-[#d61b6d] text-white font-bold py-[16px] px-[40px] rounded-[16px] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Partner With Us
          </Link>
          <Link 
            to="/portfolio" 
            className="w-full sm:w-auto bg-white text-sygo-purple font-bold py-[16px] px-[40px] rounded-[16px] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            View Our Interventions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
