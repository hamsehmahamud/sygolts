import { Link } from 'react-router-dom';
import healthImg from '../assets/health.png';
import educationImg from '../assets/education.png';
import empowermentImg from '../assets/empowerment.png';

const Interventions = () => {
  const interventions = [
    {
      id: 'gbv-response', // Linking to existing detail page for demo
      title: 'Youth Health Awareness Campaign',
      category: 'Health',
      description: 'A comprehensive program focused on mental health and physical well-being for youth in local communities.',
      image: healthImg,
    },
    {
      id: 'media-advocacy',
      title: 'Coding & Tech Skills Workshop',
      category: 'Education',
      description: 'Equipping youth with modern tech skills to thrive in the digital economy and global marketplace.',
      image: educationImg,
    },
    {
      id: 'gender-equality',
      title: 'Leadership & Civic Engagement',
      category: 'Empowerment',
      description: 'Training future leaders to take active roles in their communities and drive policy change.',
      image: empowermentImg,
    }
  ];

  return (
    <section id="interventions" className="py-6 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-sm font-bold text-sygo-pink uppercase tracking-[0.2em] mb-2">Our Impact</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-sygo-purple dark:text-sygo-purple-light">Recent Interventions</h3>
          </div>
          <Link to="/#portfolio" className="hidden md:block text-sygo-purple dark:text-sygo-purple-light font-bold border-b-2 border-sygo-purple dark:border-sygo-purple-light hover:text-sygo-pink hover:border-sygo-pink transition-all">
            View All Activities
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {interventions.map((item) => (
            <div key={item.title} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col group hover:shadow-2xl transition-all duration-300">
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative bg-gradient-to-br from-sygo-purple to-sygo-blue">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-sygo-blue/20 backdrop-blur-md text-sygo-blue text-[10px] font-bold uppercase tracking-wider rounded-full border border-sygo-blue/20">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-black mb-3 group-hover:text-sygo-purple dark:group-hover:text-sygo-purple-light transition-colors dark:text-gray-100 leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/activity/${item.id}`}
                    className="inline-flex items-center text-sygo-purple dark:text-sygo-purple-light font-black text-sm hover:gap-2 transition-all"
                  >
                    Learn More <span className="ml-1">→</span>
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

export default Interventions;
