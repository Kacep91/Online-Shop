import React, { Component } from 'react'
import pictureGlassesOne from './pictures/Glasses-1.jpg';
import pictureGlassesTwo from './pictures/Glasses-2.jpg';
import pictureGlassesThree from './pictures/Glasses-3.jpg';
import pictureGlassesFour from './pictures/Glasses-4.jpg';

export class Glasses extends Component {
  render() {
    return (
      <div>
        <div className = "detail-items">
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureGlassesOne} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Lorem ipsum dolor </p>
              <p>SPECIAL PRICE $25.90</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureGlassesTwo} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Consectetur adipis</p>
              <p>SPECIAL PRICE $34.70</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureGlassesThree} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Commodo consequat</p>
              <p>SPECIAL PRICE $21.40</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureGlassesFour} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Voluptate velit</p>
              <p>SPECIAL PRICE $18.60</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Glasses
