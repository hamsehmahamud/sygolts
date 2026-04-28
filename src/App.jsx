import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import CollaborativeApproach from './components/CollaborativeApproach';
import ImpactUpdatesHub from './components/ImpactUpdatesHub';
import Team from './components/Team';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ActivityDetail from './components/ActivityDetail';

const Home = () => (
  <main>
    <Hero />
    <VisionMission />
    <CollaborativeApproach />
    <ImpactUpdatesHub />
    <Portfolio />
    <Team />
    <Partners />
    <CTA />
    <ContactForm />
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
