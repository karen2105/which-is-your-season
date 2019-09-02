import React, {Component} from 'react';

import {SPRING, SUMMER, AUTUMM, WINTER} from '@/constants/seasons';

import summerVideo from '@/assets/summer.mp4';
import winterVideo from '@/assets/winter.mp4';
import springVideo from '@/assets/spring.mp4';
import autummVideo from '@/assets/autumm.mp4';

class SeasonPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      currentSeason: this.props.currentSeason, 
      country: this.props.country,
      video: this.getVideoLink(this.props.currentSeason),
      message2: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.getVideoLink = this.getVideoLink.bind(this);
    this.addButtons = this.addButtons.bind(this);

  }

  getVideoLink(currentSeason) {
    switch(currentSeason){
      case SPRING:
        return springVideo;
      case SUMMER:
        return summerVideo;
      case AUTUMM:
        return autummVideo;
      case WINTER:
        return winterVideo;
      default:
        return summerVideo;
    }
  }

  addButtons(removeSeason) {
    const seasons = [SPRING, SUMMER, AUTUMM, WINTER];
    const buttons = seasons
      .filter(season => season !== removeSeason)
      .map((seasonText, index) => <button onClick={(e) => this.handleClick(seasonText)} key={`btn-${index}`}> {seasonText} </button>);

    return buttons;
  }

  handleClick(season) {
    this.setState({
      currentSeason: season, 
      video: this.getVideoLink(season),
      message2: true,
    });
  }

  render() {
    const seasons = [SPRING, SUMMER, AUTUMM, WINTER];
    const {currentSeason, country} = this.state;
    let message = '';
    let loopState = currentSeason !== 'autumm' ? false : true;

    if(seasons.includes(currentSeason)) {
        message = !this.state.message2 
          ? `Amazing ${currentSeason} time in ${country == 'United Kingdom' ? `the ${country}` : country }, isn't it?.`
          : `Now, we're counting down for ${currentSeason} time in ${country == 'United Kingdom' ? `the ${country}` : country }!`;
    } else {
      message = "Oops, we don't where you are in this moment, but this is how British summer looks :D";
    }

    return (
      <div className="which-season-container">
        <div className="video-overlay-pattern" />
        <video 
          loop={loopState} 
          id={`${currentSeason}-bgVideo`} 
          className="bgVideo" 
          src={this.state.video}
          autoPlay 
          muted
        >
          <source id={`${currentSeason}-id`} type="video/mp4" />
        </video>

        <div className="season-page-message">
          <span className="message-min-text">{message}</span>
          <div className="season-page-buttons-wrapper">
            <p>Check out other seasons</p>
            {this.addButtons(currentSeason)}
          </div>
        </div>
      </div>

    );
  }
}

export default SeasonPage;