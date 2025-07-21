import React from 'react';

import CardCarousel from '../Widgets/CardCarousel';  
import TiltedCard from '../components/TiltedCard/TiltedCard';
import '../index.css';



const tiltedCardsData = [
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX Album Cover",
    captionText: "Kendrick Lamar - GNX",
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
      <p className="tilted-card-demo-text">
        Kendrick Lamar - GNX
      </p>
    )
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX Album Cover",
    captionText: "Kendrick Lamar - GNX",
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
      <p className="tilted-card-demo-text">
        Kendrick Lamar - GNX
      </p>
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



export default function Projects() {
  return (
    <div className="page-container">

      <section>
        <h1 style={{paddingBottom: "5rem"}}>My Projets</h1>
        
        <div style={{ height: '2rem' }} />

        <TiltedCardList />
        <div style={{ height: '4rem' }} />

        <TiltedCardList />



      </section>
    
    </div>
  );
}


