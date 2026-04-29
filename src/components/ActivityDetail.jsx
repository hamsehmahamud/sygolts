import { useParams, Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { ArrowLeft, CheckCircle2, Users, Target, Maximize2 } from 'lucide-react';
import { useEffect } from 'react';

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = activities.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-black transition-colors duration-300">
        <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-sygo-purple dark:text-white">Activity Not Found</h2>
          <Link to="/" className="inline-block mt-4 bg-sygo-pink text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Header Spacer */}
      <div className="h-[80px] lg:h-[100px]"></div>

      {/* Hero Section with Modern Glowing Orbs */}
      <section className="relative py-[64px] lg:py-[96px] bg-slate-50 dark:bg-slate-900/30 overflow-hidden border-b border-slate-200 dark:border-slate-800/50">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-blue/20 dark:bg-sygo-blue/10 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-pink/20 dark:bg-sygo-pink/10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px] relative z-10">
          <Link 
            to="/programs" 
            className="inline-flex items-center gap-2 text-sygo-purple dark:text-sygo-pink font-bold mb-8 hover:-translate-x-2 transition-transform bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm"
          >
            <ArrowLeft size={20} /> Back to Programs
          </Link>

          <div className="grid lg:grid-cols-2 gap-[48px] lg:gap-[64px] items-center">
            {/* Text Content */}
            <div className="space-y-[24px] animate-slide-in-up">
              <div className="inline-flex items-center gap-[8px] bg-sygo-blue/10 border-[2px] border-sygo-blue/20 px-[16px] py-[6px] rounded-full">
                <span className="w-2 h-2 rounded-full bg-sygo-blue animate-pulse"></span>
                <span className="text-[12px] font-bold text-sygo-blue uppercase tracking-widest">
                  {activity.category}
                </span>
              </div>

              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-black leading-[1.1]">
                <span className="text-sygo-purple dark:text-white">{activity.title}</span>
              </h1>
              
              <p className="text-[18px] md:text-[20px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {activity.description}
              </p>
              
              {/* Impact Badges */}
              <div className="flex flex-wrap gap-[24px] pt-[16px]">
                <div className="flex items-center gap-[16px] bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:scale-105 transition-transform">
                  <div className="w-[48px] h-[48px] bg-sygo-pink/10 rounded-xl flex items-center justify-center text-sygo-pink">
                    <Target size={24} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Impact Focus</div>
                    <div className="text-[16px] font-black text-sygo-purple dark:text-white">Direct Reach</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-[16px] bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:scale-105 transition-transform">
                  <div className="w-[48px] h-[48px] bg-sygo-yellow/10 rounded-xl flex items-center justify-center text-sygo-yellow">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Engagement</div>
                    <div className="text-[16px] font-black text-sygo-purple dark:text-white">Community Led</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative mt-[32px] lg:mt-0 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white/60 dark:border-slate-800/60 backdrop-blur-sm group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 bg-sygo-purple/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-[24px] -right-[24px] z-20 w-[120px] h-[120px] bg-gradient-to-br from-sygo-pink to-sygo-purple rounded-[30px] flex items-center justify-center text-white shadow-2xl rotate-12 animate-float">
                <div className="text-center">
                  <div className="text-[28px] font-black leading-none">2026</div>
                  <div className="text-[12px] font-bold uppercase tracking-wider mt-1">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-[80px] lg:py-[120px]">
        <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px]">
          <div className="max-w-[800px] mx-auto">
            
            <h2 className="text-[32px] font-black text-sygo-purple dark:text-white mb-[32px] flex items-center gap-4">
              <span className="w-[12px] h-[40px] bg-sygo-pink rounded-full block"></span>
              Detailed Overview
            </h2>
            
            <p className="text-[18px] text-slate-700 dark:text-slate-300 leading-relaxed mb-[64px]">
              {activity.fullDescription}
            </p>
            
            {/* Modern Glassmorphism Outcomes Box */}
            <div className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-[32px] p-[40px] md:p-[56px] mb-[64px] border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-sygo-green/20 rounded-full blur-[50px]"></div>
              
              <h3 className="text-[28px] font-black text-transparent bg-clip-text bg-gradient-to-r from-sygo-blue to-sygo-pink mb-[24px] flex items-center gap-[16px] relative z-10">
                <CheckCircle2 size={32} className="text-sygo-pink" /> Key Outcomes
              </h3>
              
              <p className="text-[20px] font-bold text-sygo-purple dark:text-white mb-[32px] relative z-10">
                {activity.impact}
              </p>
              
              <ul className="space-y-[16px] relative z-10">
                {[
                  'Sustainable community development through active youth participation.',
                  'Empowerment of marginalized voices in local decision-making.',
                  'Measurable positive behavior change and social norms transformation.',
                  'Strengthened local capacity and long-term organizational resilience.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-[16px] group">
                    <div className="mt-[4px] w-[24px] h-[24px] rounded-full bg-sygo-blue/20 group-hover:bg-sygo-blue flex items-center justify-center text-sygo-blue group-hover:text-white flex-shrink-0 transition-colors">
                      <span className="text-[12px] font-bold">✓</span>
                    </div>
                    <span className="text-[16px] text-slate-700 dark:text-slate-300 font-medium group-hover:text-sygo-purple dark:group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Section mimicking the new Gallery Page */}
            <h2 className="text-[32px] font-black text-sygo-purple dark:text-white mb-[32px] flex items-center gap-4">
              <span className="w-[12px] h-[40px] bg-sygo-blue rounded-full block"></span>
              Activity Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {activity.gallery.map((img, i) => (
                <div key={i} className="group relative rounded-[24px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-square">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <div className="w-[48px] h-[48px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                  <img src={img} alt={`${activity.title} Snapshot ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Modern Gradient CTA Section */}
      <section className="relative py-[80px] bg-gradient-to-r from-sygo-purple via-sygo-pink to-sygo-blue overflow-hidden text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-[36px] md:text-[48px] font-black mb-[24px]">Support This Initiative</h2>
          <p className="text-[18px] md:text-[20px] opacity-90 mb-[40px] max-w-[600px] mx-auto font-medium">
            Your contributions help us scale these high-impact activities and empower more youth across the region.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-[16px]">
            <button className="bg-white text-sygo-purple px-[40px] py-[16px] rounded-full font-bold text-[18px] shadow-xl hover:scale-105 transition-transform">
              Donate Now
            </button>
            <button className="bg-transparent border-[3px] border-white text-white px-[40px] py-[16px] rounded-full font-bold text-[18px] hover:bg-white/10 transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityDetail;
