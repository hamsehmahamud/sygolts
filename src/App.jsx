import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FocusAreas from './components/FocusAreas';
import Interventions from './components/Interventions';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ActivityDetail from './components/ActivityDetail';

const Home = () => (
  <main>
    <Hero />
    
    {/* About Section */}
    <section className="py-8 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div className="relative flex justify-center">
            <div className="w-64 h-64 bg-sygo-purple/5 dark:bg-sygo-purple/10 rounded-[3rem] flex flex-col items-center justify-center p-8">
              <div className="text-6xl mb-4">💡</div>
              <h4 className="text-xl font-bold text-sygo-purple mb-2">Empowerment</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Leading to a better future.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-sygo-pink uppercase tracking-[0.2em]">Our Vision</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-sygo-purple dark:text-sygo-purple-light leading-tight">
              A Society Where <span className="text-sygo-yellow">Empowered Youth Lead</span>
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              The SYGO movement believes in the power of youth to transform society. We provide the tools for young Somalis to reach their full potential.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Quality Education', color: 'sygo-purple' },
                { label: 'Health Access', color: 'sygo-pink' },
                { label: 'Skill Training', color: 'sygo-yellow' },
                { label: 'Leadership Roles', color: 'sygo-blue' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black/5 dark:bg-white/10 rounded-lg flex items-center justify-center text-sygo-purple dark:text-sygo-yellow font-bold text-xs">✓</div>
                  <span className="font-bold text-sm dark:text-gray-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <FocusAreas />
    
    <Interventions />

    {/* Collaborative Approach Section */}
    <section className="py-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="bg-sygo-purple dark:bg-gray-900 rounded-[3rem] p-10 md:p-14 relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-sygo-pink/10 -skew-x-12 transform translate-x-1/4"></div>
          
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-xs font-bold text-sygo-yellow uppercase tracking-[0.2em]">Our Methodology</h2>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">Our Collaborative Approach</h3>
              <p className="text-base opacity-90 leading-relaxed max-w-md">
                We work with communities and partners to ensure our programs are impactful and sustainable.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Strategic Partnerships',
                  'Community Inclusion',
                  'Evidence-Based Action',
                  'Continuous Monitoring'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-sygo-yellow rounded-full flex items-center justify-center text-sygo-purple font-bold text-[10px]">✓</div>
                    <span className="font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="45%" className="stroke-current text-white/10" strokeWidth="12" fill="transparent" />
                  <circle cx="50%" cy="50%" r="45%" className="stroke-current text-sygo-yellow" strokeWidth="12" fill="transparent" strokeDasharray="283" strokeDashoffset="0" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl md:text-5xl font-black">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Portfolio />

    {/* Partners Section */}
    <section className="py-8 bg-gray-50 dark:bg-gray-900/40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xs font-bold text-sygo-pink uppercase tracking-[0.2em] mb-2">Our Network</h2>
          <h3 className="text-3xl font-bold text-sygo-purple dark:text-sygo-purple-light">Our Partners</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 dark:opacity-80">
          {['UNICEF', 'WFP', 'UNDP', 'Save the Children', 'Oxfam', 'CARE'].map((partner) => (
            <div key={partner} className="text-xl md:text-2xl font-black text-gray-400 dark:text-gray-500 hover:text-sygo-purple transition-colors cursor-default grayscale hover:grayscale-0">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>

    <Contact />

    {/* Final CTA */}
    <section className="py-12 bg-brand-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Together, We Can Drive <span className="text-sygo-yellow">Positive Change!</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-sygo-purple px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Donate Now
          </button>
          <button className="bg-sygo-purple text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/20 hover:bg-sygo-purple/80 transition-all transform hover:-translate-y-1">
            Join Movement
          </button>
        </div>
      </div>
    </section>
  </main>
);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black text-gray-800 dark:text-gray-100 font-inter">
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity/:id" element={<ActivityDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
