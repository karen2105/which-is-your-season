import React, { Component } from 'react';

import {SPRING, SUMMER, AUTUMM, WINTER} from '@/constants/seasons';
import SeasonPage from '@/components/season-page';
import Loading from '@/components/loading';

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: '', country: '', error: false, month: 0, loading: true };
    this.determineSeason = this.determineSeason.bind(this);
  }

  componentDidMount() {
    // Loading current position
    fetch('http://api.ipstack.com/check?access_key=9c931dc3d6e35fcd0c782d4d1475b21e')
    .then(res => res.json())
    .then(result => {
      this.setState({lat: result.latitude, country: result.country_name, loading: false})
    },
    error => {
      this.setState({error: true, loading: false})
    });

    //Get date
    const month = new Date().getMonth() + 1;
    this.setState({month: month});
  }

  determineSeason(lat, month) {
    let season = '';

    //These seasons take into account meteorological dates
    const trimester1 = [3, 4, 5];
    const trimester2 = [6, 7, 8];
    const trimester3 = [9, 10, 11];
    const trimester4 = [12, 1, 2];

    //If latitud is greater than 0 (north) 
    if(lat > 0) {
      if(trimester1.includes(month)) {
        season = SPRING;
      } else if(trimester2.includes(month)){
        season = SUMMER;
      } else if(trimester3.includes(month)){
        season = AUTUMM;
      } else if(trimester4.includes(month)){
        season = WINTER;
      }
    } 

    //If latitud is greater than 0 (north) 
    if(lat < 0) {
      if(trimester1.includes(month)) {
        season = AUTUMM;
      } else if(trimester2.includes(month)){
        season = WINTER;
      } else if(trimester3.includes(month)){
        season = SPRING;
      } else if(trimester4.includes(month)){
        season = SUMMER;
      }
    } 

    return season;
  }

  render() {
    if(this.state.error) {
      return (
        <div className="which-season-wrapper">
          <SeasonPage currentSeason='error' />
        </div>
        );
    }

    const season = this.determineSeason(this.state.lat, this.state.month);

    if(this.state.loading) {
      return <Loading />
    } else {
      return (
        <div className="which-season-wrapper">
          <SeasonPage currentSeason={season} country={this.state.country} />
        </div>
      );
    }
  }
}

export default MainComponent;