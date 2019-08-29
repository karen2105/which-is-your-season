import React from 'react';

const SeasonPage = ({type}) => {

  if(type== 'winter') {
    return  <div>Winter</div>
  }
  if (type== 'summer') {
    return <div>Summer</div>
  }
  if (type== 'error') {
    return <div>Error</div>
  }
  return 'OMG';
}

export default SeasonPage;