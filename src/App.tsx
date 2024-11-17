import React from 'react';
import ServerIP from './components/ServerIP';
import InfoBox from './components/InfoBox';
import Particles from './components/Particles';
import ServerStatus from './components/ServerStatus';
import Features from './components/Features';
import Rules from './components/Rules';
import VoteSection from './components/VoteSection';
import Footer from './components/Footer';
import StoreSection from './components/StoreSection';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      
      <Particles />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        
        <ServerStatus />
        <ServerIP />
        
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <Features />
          <Rules />
        </div>
        
        <StoreSection />
        <InfoBox />
        <VoteSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
