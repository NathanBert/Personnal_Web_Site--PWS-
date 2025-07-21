import React from 'react';
import '../index.css'; // Ensure this imports your Tailwind CSS styles


import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import TechBadge from '../components/TechBadge/TechBadge';
import SocialBadge from '../components/SocialBadge/SocialBadge';
import Tech from '../components/Tech/Tech';
import { Icon } from '@iconify/react';
import memeImg from '../assets/images/meme.jpg';
import Contact from  '../components/ContactWidget/ContactWidget';


import CardCarousel from '../Widgets/CardCarousel';  
import TiltedCard from '../components/TiltedCard/TiltedCard';


export default function Home() {


  const list_lang = ["devicon-java-plain", "devicon-cplusplus-plain", "devicon-c-original", "devicon-python-plain", "devicon-javascript-plain"];
  const list_framework = ["devicon-react-original", "devicon-tailwindcss-original colored"];
  const lang_color = "#59f4e1";
  const framework_color = "#59f4e1";


  return (
    <div className="page-container slide-in-left">

      <section id="home">


          <h1 className="text-3xl px-35 text-[#59f4e1] font-bold mt-20">
            <div className="flex justify-between">
              <span className="text-[#ffffff]">Welcome,</span>
              <div className="flex gap-[2.5rem] items-center">
                <a href="https://github.com/NathanBert">
                  <SocialBadge icon="devicon-github-original" color="#59f4e1" />
                </a>
                <SocialBadge icon="devicon-linkedin-plain" color="#59f4e1" />
              </div>
            </div>
            <div style={{ height: '2rem' }} />

            <span className="text-4xl"><span className="text-[#ffffff]">I'm </span>Nathan</span><br></br>
            <div style={{ height: '2rem' }} />

            <span className="text-5xl "><span className="text-[#ffffff] text-4xl">Computer Engineer specializing in </span>embedded systems.</span><br></br>
            <div style={{ height: '0.5rem' }} />
            <div className="flex items-center gap-2 ">
              <Icon icon="simple-icons:googlemaps" color="#59f4e1" width="20" />
              <span className="text-[#ffffff] text-lg"> Based in France, Clermont-Ferrand 63000</span>
            </div>
          </h1>

        <div style={{ height: '1rem' }} />

        <div className="flex justify-end mt-20 pr-[120px]">
          <div className="w-[1265px] rounded-xl p-10 border-4 border-[#59f4e1] bg-[#000000]">

            <h1 className="text-xl text-[#59f4e1] font-bold">
              {/* Contenu */}
            </h1>
          </div>
        </div> 


      </section> 
        

      <section id="about">
        <div className="mt-20 px-35">
          <h1 className="text-4xl font-bold text-left w-full">
            <span className="text-[#ffffff]">Technologies</span>
          </h1>


        </div>

        <Tech name="Langages" list={list_lang} color={lang_color} />

        <Tech name="Frameworks" list={list_framework} color={framework_color} />

      </section>

      <section id="projects">

        <div style={{ height: '0rem' }} />

        <div className="mt-20 px-35">
          <h1 className="text-4xl font-bold text-left w-full">
            <span className="text-[#ffffff]">My Projects</span>
          </h1>
        </div>

        <div style={{ height: '3rem' }} />

        <TiltedCardList />
        <div style={{ height: '5rem' }} />
        <TiltedCardList />


      </section>

      <section id="contact">
        <div className="relative w-full flex items-center mt-20 px-35">
          <div className="text-4xl font-bold text-left">
            <p>If you wanna...</p>
          </div>

          <div className="absolute text-4xl font-bold left-1/2 transform -translate-x-1/2">
            <p>contact me</p>
          </div>
        </div>
        
        <div className="">
          <Contact/>
        </div>
          


      </section>

      <div style={{ height: '12rem' }} />




    </div>
  );
}





const tiltedCardsData = [
  {
    imageSrc: memeImg,
    altText: "Incoming Project",
    captionText: "Incoming Project",
    containerHeight: "250px",
    containerWidth: "350px",
    imageHeight: "250px",
    imageWidth: "350px",
    rotateAmplitude: 12,
    scaleOnHover: 1.2,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: (
      <a href="https://github.com/NathanBert">

        <p className="tilted-card-demo-text border-2 border-[#59f4e1] rounded-lg p-2">
          Incoming Project
        </p>
      </a>
    )
  },
  {
    imageSrc: memeImg,
    altText: "Incoming Project",
    captionText: "Incoming Project",
    containerHeight: "250px",
    containerWidth: "350px",
    imageHeight: "250px",
    imageWidth: "350px",
    rotateAmplitude: 12,
    scaleOnHover: 1.2,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: (
      <a href="https://github.com/NathanBert">

        <p className="tilted-card-demo-text border-2 border-[#59f4e1] rounded-lg p-2">
          Incoming Project
        </p>
      </a>
    )
  },
    {
    imageSrc: memeImg,
    altText: "Incoming Project",
    captionText: "Incoming Project",
    containerHeight: "250px",
    containerWidth: "350px",
    imageHeight: "250px",
    imageWidth: "350px",
    rotateAmplitude: 12,
    scaleOnHover: 1.2,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: (
      <a href="https://github.com/NathanBert">

        <p className="tilted-card-demo-text border-2 border-[#59f4e1] rounded-lg p-2">
          Incoming Project
        </p>
      </a>
    )
  },

];


const TiltedCardList = () => (
  <div style={{ display: "flex", gap: "16px", flexWrap: "nowrap", justifyContent: "center" }}>
    {tiltedCardsData.map((card, idx) => (
      <TiltedCard
        key={idx}
        {...card}
      />
    ))}
  </div>
);

