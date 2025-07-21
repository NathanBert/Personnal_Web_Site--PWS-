import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import TiltedCard from '../components/TiltedCard/TiltedCard';

function CardCarousel() {
  const cards = [ 
    {
      title: 'Projet 1',
      description: 'Description du projet 1',
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2',
    },
    {
      title: 'Projet 3',
      description: 'Description du projet 3',
    },
  ];

  return (
    <Carousel>
      {cards.map((card, index) => (
        <TiltedCard
          key={index}
          title={card.title}
          description={card.description}
          className="mx-4" // pour espacer les cartes
        />
      ))}
    </Carousel>
  );
}

export default CardCarousel;
