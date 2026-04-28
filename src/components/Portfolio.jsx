import { Link } from 'react-router-dom';
import stakeholder from '../assets/portfolio/stakeholder.jpg';
import service from '../assets/portfolio/service.jpg';
import training from '../assets/portfolio/training.jpg';
import workshop from '../assets/portfolio/workshop.jpg';
import governance from '../assets/portfolio/governance.jpg';
import advocacy from '../assets/portfolio/advocacy.jpg';
import peerEducation from '../assets/portfolio/peer_education.jpg';

const Portfolio = () => {
  const programs = [
    { 
      id: 'gbv-response',
      title: 'Awareness Raising on Youth-led GBV Response', 
      image: training, 
      category: 'SYGO Activities',
      description: 'Awareness Raising on Youth-led GBV response and social norms change to empower young people to challenge harmful practices.'
    },
    { 
      id: 'psychosocial-training',
      title: 'Psychosocial Training', 
      image: workshop, 
      category: 'SYGO Activities',
      description: 'Comprehensive training for staff to promote gender equity and active youth participation in decision-making.'
    },
    { 
      id: 'peer-education',
      title: 'Youths Peer-to-Peer Education', 
      image: peerEducation, 
      category: 'SYGO Activities',
      description: 'Empowering young people to educate their peers on critical health and social issues.'
    },
    { 
      id: 'capacity-building',
      title: 'Capacity Building', 
      image: governance, 
      category: 'SYGO Activities',
      description: 'Equipping youth leaders with the skills to manage organizations effectively and transparently.'
    },
    { 
      id: 'youth-advocacy',
      title: 'Youth Advocacy & Radio Discourse', 
      image: advocacy, 
      category: 'SYGO Activities',
      description: 'Using radio and social behavior change communication to amplify youth voices and drive social change.'
    },
    { 
      id: 'gbv-awareness',
      title: 'Youth GBV Awareness Campaign', 
      image: stakeholder, 
      category: 'SYGO Activities',
      description: 'Strengthening relationships with key community leaders and organizations to drive sustainable growth.'
    },
    { 
      id: 'mhpss',
      title: 'Mental Health & Psychosocial Support (MHPSS)', 
      image: service, 
      category: 'SYGO Activities',
      description: 'Providing compassionate, inclusive support services for survivors, focusing on holistic recovery and empowerment.'
    },
  ];

  return (
    <section id="portfolio" className="py-[64px] lg:py-[96px] bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-[24px] lg:px-[96px] max-w-[1280px]">
        <div className="text-center mb-[64px]">
          <h2 className="text-[48px] font-bold text-sygo-purple dark:text-sygo-purple">
            Our <span className="text-sygo-pink">Program</span> Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {programs.map((program, idx) => (
            <div 
              key={program.id}
              className={`bg-white dark:bg-slate-800 rounded-[16px] overflow-hidden shadow-md flex flex-col group transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl animate-slide-in-up ${idx === 6 ? 'lg:col-start-2' : ''}`}
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              {/* Image Header */}
              <div className="relative h-[250px] overflow-hidden rounded-t-[16px]">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-[16px] right-[16px] z-10 px-[12px] py-[4px] bg-pastel-blue dark:bg-sygo-blue/90 text-sygo-blue dark:text-white text-[12px] font-bold rounded-[20px] shadow-sm">
                  {program.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-[20px] flex flex-col flex-grow">
                <h4 className="text-[20px] font-bold text-sygo-purple dark:text-slate-200 mb-[12px] leading-tight group-hover:text-sygo-pink transition-colors">
                  {program.title}
                </h4>
                
                <p className="text-[14px] text-on-surface dark:text-slate-400 mb-[24px] line-clamp-3 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={`/activity/${program.id}`}
                    className="inline-flex items-center text-sygo-green font-bold text-[14px] hover:underline transition-all"
                  >
                    Learn More →
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
