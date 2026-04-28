import { useParams, Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { ArrowLeft, CheckCircle2, Users, Target } from 'lucide-react';
import { useEffect } from 'react';

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = activities.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Activity Not Found</h2>
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Header Spacer */}
      <div className="h-20 md:h-24"></div>

      {/* Hero Section */}
      <section className="relative py-12 bg-gray-50 dark:bg-gray-900/40">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sygo-purple dark:text-sygo-purple-light font-bold mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} /> Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-sygo-blue/10 dark:bg-sygo-blue/20 text-sygo-blue text-xs font-black uppercase tracking-widest rounded-full">
                {activity.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-sygo-purple dark:text-white leading-tight">
                {activity.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {activity.description}
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sygo-pink/10 rounded-xl flex items-center justify-center text-sygo-pink">
                    <Target size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase">Impact</div>
                    <div className="font-black dark:text-white">Direct Reach</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sygo-yellow/10 rounded-xl flex items-center justify-center text-sygo-yellow">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase">Engagement</div>
                    <div className="font-black dark:text-white">Youth Led</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sygo-pink rounded-[2rem] flex items-center justify-center text-white shadow-xl rotate-12">
                <div className="text-center">
                  <div className="text-2xl font-black">2026</div>
                  <div className="text-[10px] font-bold uppercase">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-sygo-purple dark:text-sygo-purple-light mb-8">Detailed Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
                {activity.fullDescription}
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 mb-12 border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-2xl font-black text-sygo-pink mb-6 flex items-center gap-3">
                  <CheckCircle2 size={28} /> Key Outcomes
                </h3>
                <p className="text-xl font-bold dark:text-white mb-6">
                  {activity.impact}
                </p>
                <ul className="space-y-4">
                  {[
                    'Sustainable community development through youth participation.',
                    'Empowerment of marginalized voices in decision-making.',
                    'Positive behavior change and social norms transformation.',
                    'Strengthened local capacity and organizational resilience.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-sygo-blue/20 flex items-center justify-center text-sygo-blue flex-shrink-0">
                        <span className="text-[10px] font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <h2 className="text-3xl font-black text-sygo-purple dark:text-sygo-purple-light mb-8 pt-8">Program Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {activity.gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-square hover:scale-105 transition-transform duration-500">
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Want to Support This Project?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Your contributions help us scale these high-impact activities and reach more youth across Somalia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-sygo-purple px-10 py-4 rounded-full font-black text-lg hover:shadow-xl transition-all">
              Donate Now
            </button>
            <button className="bg-transparent border-2 border-white px-10 py-4 rounded-full font-black text-lg hover:bg-white/10 transition-all">
              Join Movement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityDetail;
