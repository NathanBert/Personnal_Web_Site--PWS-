import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { VscHome, VscFolderLibrary, VscAccount, VscBellDot } from 'react-icons/vsc';
//import { SiHomebridge, MdSwitchAccount, IoFolderOutline, FaPhoneSquare } from 'react-icons/vsc';

import NetworkBackground from "./Widgets/BackgroundRays";

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Dock from './components/Dock/Dock';


function App() {
  const navigate = useNavigate();

  const items = [
    { icon: <VscHome size={28} color="#59f4e1"/>, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscAccount size={28} color="#59f4e1"/>, label: 'About', onClick: () => navigate('/about') },
    { icon: <VscFolderLibrary size={28} color="#59f4e1"/>, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscBellDot size={28} color="#59f4e1"/>, label: 'Contact', onClick: () => navigate('/contact') },
  ];

  return (
    <div className="bg-black text-white min-h-screen w-screen relative overflow-hidden">
      <NetworkBackground />

      <div className="flex relative z-10 w-full border-b-4 p-8 pl-20 border-[#59f4e1] bg-[#202C29]">
        <h1 class= "text-xl text-[#59f4e1] font-bold">/dev/sda1/Bert_Nathan/Acceuil
            <span className="blink blink-1">.</span> 
            <span className="blink blink-2">.</span> 
            <span className="blink blink-3">.</span> </h1>
      </div> 

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
