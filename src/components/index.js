import React, { Component } from 'react';

import SeasonPage from '@/components/season-page';
import Loading from '@/components/loading';
import "@/style/main.scss";

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: '', error: false, month: 0, loading: true };
    this.determineSeason = this.determineSeason.bind(this);
  }

  componentDidMount() {
    // Loading current position
    navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude, loading: false}),
      error => this.setState({error: true}),
    );

    //Get date
    const month = new Date().getMonth() + 1;
    this.setState({month: month});
  }

  determineSeason(lat, month) {
    let term = ''; 
    let place = ''; 

    //If latitud is greater than 0 (north)
    // if it is during first term (months 3-8)  = Summer
    if(lat > 0) {
      if(month > 3 && month <= 8) {
        return 'summer';
      } 
      else {
        return 'winter';
      }
    } 

    //If latitud is less than 0 (south)
    if(lat <= 0) {
      if(month > 3 && month <= 8) {
        return 'winter';
      } else {
        return 'summer'; 
      }
    }
  }

  render() {
    if(this.state.error) {
      return <SeasonPage type='error' />;
    }

    const season = this.determineSeason(this.state.lat, this.state.month);

    if(this.state.loading) {
      <Loading />
    } else {
      return (
        <div className="which-season-wrapper">
          <SeasonPage type={season} />
        </div>
      );
    }
  }
}

export default Hello;