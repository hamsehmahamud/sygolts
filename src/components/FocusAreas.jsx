import { Heart, BookOpen, Zap, HeartPulse, Users2 } from 'lucide-react';

const FocusAreas = () => {
  const areas = [
    {
      title: 'Health',
      description: 'Promoting youth well-being and access to essential health services.',
      icon: <Heart size={32} />,
      color: 'bg-blue-50 text-blue-500 border-blue-100',
      hoverColor: 'hover:bg-blue-500',
    },
    { 
      title: 'Education', 
      icon: <BookOpen size={32} />, 
      color: 'bg-sygo-purple/10 text-sygo-purple',
      description: 'Quality educational support and vocational training for a brighter future.' 
    },
    { 
      title: 'Health', 
      icon: <HeartPulse size={32} />, 
      color: 'bg-sygo-pink/10 text-sygo-pink',
      description: 'Promoting mental health awareness and physical well-being in youth.' 
    },
    { 
      title: 'Empowerment', 
      icon: <Zap size={32} />, 
      color: 'bg-sygo-yellow/10 text-sygo-yellow',
      description: 'Unlocking potential through leadership and entrepreneurial skills.' 
    },
    { 
      title: 'Engagement', 
      icon: <Users2 size={32} />, 
      color: 'bg-sygo-blue/10 text-sygo-blue',
      description: 'Fostering civic participation and active community involvement.' 
    },
  ];

  return (
    <section id="focus-areas" className="py-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold text-sygo-pink uppercase tracking-[0.2em] mb-2">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-sygo-purple dark:text-sygo-purple-light">Our Core Focus Areas</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div 
              key={area.title}
              className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 group border border-transparent hover:border-sygo-purple/10 hover:shadow-2xl text-center"
            >
              <div className={`w-16 h-16 mx-auto ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                {area.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 dark:text-gray-100">{area.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
