import React from 'react';

const SeasonPage = ({type, location}) => {
  let message = '';
  if(type== 'winter' || type== 'winter') {
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