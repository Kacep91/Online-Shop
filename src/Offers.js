import React, { Component } from 'react';

import pictureOffersOne from './pictures/1.png';
import pictureOffersTwo from './pictures/2.png';
import pictureOffersThree from './pictures/3.png';
import pictureOffersFour from './pictures/4.png';

class Offers extends Component {
  state ={

  
  }
  render() {
    return (
      <div className="special-offers">
        <p className="offers-logo-text">Special Offers</p>
        <div className = "offers-items border">
          <div className="offers-item">
            <img className="offers-picture" src={pictureOffersOne} alt="A small picture" />
            <div className = "offers-item-under-text">HELLO</div>
          </div>
          <div className="offers-item">
            <img className="offers-picture" src={pictureOffersTwo} alt="A small picture" />
            <div className = "offers-item-under-text">HELLO</div>
          </div>
          <div className="offers-item">
            <img className="offers-picture" src={pictureOffersThree} alt="A small picture" />
            <div className = "offers-item-under-text">HELLO</div>
          </div>
          <div className="offers-item">
            <img className="offers-picture" src={pictureOffersFour} alt="A small picture" />
            <div className = "offers-item-under-text">HELLO</div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Offers;
