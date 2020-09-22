import React from 'react';
import cardInfo from './CardInfo';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import translateCard from './translateCard';


function ShowCard(props) {
  // conditional expression

  let card;


  if (props.initial) {
    card = <img src={process.env.PUBLIC_URL + '/small_cards/0_card_back.png'} alt='back' />
  } else {

    card = <img src={process.env.PUBLIC_URL + '/small_cards/' + translateCard(props.card.color, props.card.value) + '.png'} alt='img' />
  } 



  return (<p>
    {card}

  </p>
  )
}

export default ShowCard;