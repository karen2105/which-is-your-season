import React from 'react';

import {SPRING, SUMMER, AUTUMM, WINTER} from '@/constants/seasons';
import summerVideo from '@/assets/summer.mp4';
import winterVideo from '@/assets/winter.mp4';
import springVideo from '@/assets/spring.mp4';
import autummVideo from '@/assets/autumm.mp4';

function addButtons(removeSeason) {
  const seasons = [SPRING, SUMMER, AUTUMM, WINTER];
  const buttons = seasons
    .filter(season => season !== removeSeason)
    .map((seasonText, index) => <button key={`btn-${index}`}> {seasonText} </button>);

  return buttons;
}

const SeasonPage = ({currentSeason, country}) => {
  let message = '';
  let video = '';
  let loopState = false;
  const seasons = [SPRING, SUMMER, AUTUMM, WINTER];

  if(seasons.includes(currentSeason)) {
      message = `Amazing ${currentSeason} time in ${country == 'United Kingdom' ? `the ${country}` : country }, isn't it?.`;
  } else {
    message = "Oops, we don't where you are in this moment, but this is how British summer looks :D";
  }

  switch(currentSeason){
    case SPRING:
      video = springVideo;
      break;
    case SUMMER:
      video = summerVideo;
      break;
    case AUTUMM:
      video = autummVideo;
      loopState = true;
      break;
    case WINTER:
      video = winterVideo;
      break;
    default:
      video = summerVideo;
      break;
  }

  return (
    <div className="which-season-container">
      <div className="video-overlay-pattern" />
      <video autoPlay muted loop={loopState} id="bgVideo" className="bgVideo">
        <source src={video} type="video/mp4" />
      </video>

      <div className="season-page-message">
        <span className="message-min-text">{message}</span>
        <div className="season-page-buttons-wrapper">
          <p>Check out other seasons</p>
          {addButtons(currentSeason)}
        </div>
      </div>
    </div>

  );
}

export default SeasonPage;