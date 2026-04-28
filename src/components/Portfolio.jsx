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
      id: 'stakeholder-engagement',
      title: 'Networking Stakeholder Engagement', 
      image: stakeholder, 
      category: 'Networking',
      description: 'Strengthening relationships with key community leaders and organizations to drive sustainable growth.'
    },
    { 
      id: 'gbv-response',
      title: 'Awareness Raising on Youth-led GBV Response', 
      image: training, 
      category: 'SYGO Activities',
      description: 'Awareness Raising on Youth-led GBV response and social norms change to empower young people to challenge harmful practices.'
    },
    { 
      id: 'gender-equality',
      title: 'Staff Training: Gender Equality & Youth Engagement', 
      image: workshop, 
      category: 'Advocacy',
      description: 'Comprehensive training for staff to promote gender equity and active youth participation in decision-making.'
    },
    { 
      id: 'inclusive-services',
      title: 'Survivor-Centered Support & Inclusive Services', 
      image: service, 
      category: 'Service Provision',
      description: 'Providing compassionate, inclusive support services for survivors, focusing on holistic recovery and empowerment.'
    },
    { 
      id: 'org-governance',
      title: 'Training: Organizational Governance & Operations', 
      image: governance, 
      category: 'Governance',
      description: 'Equipping youth leaders with the skills to manage organizations effectively and transparently.'
    },
    { 
      id: 'media-advocacy',
      title: 'Youth Advocacy: Radio Discourse & SBCC', 
      image: advocacy, 
      category: 'Media',
      description: 'Using radio and social behavior change communication to amplify youth voices and drive social change.'
    },
    { 
      id: 'peer-education',
      title: 'Youth Peer-to-Peer Education', 
      image: peerEducation, 
      category: 'Education',
      description: 'Empowering young people to educate their peers on critical health and social issues.'
    },
  ];

  return (
    <section id="portfolio" className="py-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-sygo-pink uppercase tracking-[0.2em] mb-2">Our Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-sygo-purple dark:text-sygo-purple-light">Our Program Portfolio</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm">
            Explore our diverse range of programs designed to empower the youth of Somalia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sygo-purple to-sygo-blue">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-sygo-blue/10 dark:bg-sygo-blue/20 text-sygo-blue text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {program.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-sygo-purple dark:group-hover:text-sygo-purple-light transition-colors">
                  {program.title}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={`/activity/${program.id}`}
                    className="inline-flex items-center text-sygo-purple dark:text-sygo-purple-light font-black text-sm hover:gap-2 transition-all"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* "View More" Card */}
          <div className="rounded-2xl bg-sygo-purple/5 dark:bg-sygo-purple/10 border-2 border-dashed border-sygo-purple/30 flex flex-col items-center justify-center p-8 group cursor-pointer hover:bg-sygo-purple/10 dark:hover:bg-sygo-purple/20 transition-all min-h-[400px]">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-sygo-purple dark:text-sygo-purple-light shadow-md mb-4 group-hover:rotate-45 transition-transform">
              <span className="text-2xl">+</span>
            </div>
            <span className="font-bold text-sygo-purple dark:text-sygo-purple-light">View More Activities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
