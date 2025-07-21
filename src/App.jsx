import React from 'react';
import { VscHome, VscFolderLibrary, VscAccount, VscBellDot } from 'react-icons/vsc';

import NetworkBackground from "./Widgets/BackgroundRays";
import Home from './pages/Home'; // Home contient maintenant toutes les sections
import Dock from './components/Dock/Dock';

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const items = [
    { icon: <VscHome size={28} color="#59f4e1"/>, label: 'Home', onClick: () => scrollTo('home') },
    { icon: <VscAccount size={28} color="#59f4e1"/>, label: 'About', onClick: () => scrollTo('about') },
    { icon: <VscFolderLibrary size={28} color="#59f4e1"/>, label: 'Projects', onClick: () => scrollTo('projects') },
    { icon: <VscBellDot size={28} color="#59f4e1"/>, label: 'Contact', onClick: () => scrollTo('contact') },
  ];

  return (
    <div className="bg-black text-white min-h-screen w-screen relative overflow-hidden scroll-smooth">
      <NetworkBackground />

      <div className="flex relative z-10 w-full border-b-4 p-8 pl-20 border-[#59f4e1] bg-[#202C29]">
        <h1 className="text-xl text-[#59f4e1] font-bold">/dev/sda1/Bert_Nathan/Acceuil<span className="blink blink-1">.</span><span className="blink blink-2">.</span><span className="blink blink-3">.</span></h1>
      </div>

      <main className="relative z-10">
        <Home />
      </main>

      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

export default App;
