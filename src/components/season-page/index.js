import React from 'react';

import {SPRING, SUMMER, AUTUMM, WINTER} from '@/constants/seasons';

const SeasonPage = ({type, location}) => {
  let message = '';
  const seasons = [SPRING, SUMMER, AUTUMM, WINTER];

  if(seasons.includes(type)) {
      message = `It is ${type} time in your location`;
  } else {
    message = "Oops, we don't where you are in this moment, but this is how British summer looks :D";
  }

  return (
    <div className="season-page-message">
      <span>{message}</span>
      <span>{location ? `(${location})` : ''}</span>
    </div>
  );
}

export default SeasonPage;