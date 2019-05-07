import React, { Component } from 'react';

import pictureOffersOne from './pictures/1.png';
import pictureOffersTwo from './pictures/2.png';
import pictureOffersThree from './pictures/3.png';
import pictureOffersFour from './pictures/4.png';
import OffersLinesPicture from './pictures/line.png';

class Offers extends Component {
  state ={

  
  }
  render() {
    return (
      <div className="special-offers">
        <div className="offers-logo-text-wrapper">
          <p className="offers-logo-text">Special Offers</p>
          <div className="offers-lines-picture">
            <img src={OffersLinesPicture} alt="" />
          </div>
        </div>
        <div className = "offers-items">
          <div className="offers-item">
            <img className="offers-picture" src={pictureOffersOne} alt="A small picture" />
            <div className="picture-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "offers-item-under-text">
              <p>Lorem ipsum dolor</p>
              <p>ONLY $40.00</p>
            </div>
          </div>
          <div className="offers-item">
            <img className="offers-picture" src={pictureOffersTwo} alt="A small picture" />
            <div className="picture-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "offers-item-under-text">
              <p>Consectetur adipis</p>
              <p>ONLY $60.00</p>
            </div>
          </div>
          <div className="offers-item">
            <img className="offers-picture" src={pictureOffersThree} alt="A small picture" />
            <div className="picture-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "offers-item-under-text">
              <p>Commodo consequat</p>
              <p>ONLY $14.20</p>
            </div>
          </div>
          <div className="offers-item">
            <img className="offers-picture" src={pictureOffersFour} alt="A small picture" />
            <div className="picture-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "offers-item-under-text">
              <p>Voluptate velit</p>
              <p>ONLY $37.00</p>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Offers;
