import React, { Component } from 'react'
import pictureSweaterOne from './pictures/Sweater-1.jpg';
import pictureSweaterTwo from './pictures/Sweater-2.jpg';
import pictureSweaterThree from './pictures/Sweater-3.jpg';
import pictureSweaterFour from './pictures/Sweater-4.jpg';

export class Sweater extends Component {
  render() {
    return (
      <div>
        <div className = "detail-items">
          <div className="detail-item">
            <img className="detail-picture" src={pictureSweaterOne} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Lorem ipsum dolor </p>
              <p>SPECIAL PRICE $25.90</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item">
            <img className="detail-picture" src={pictureSweaterTwo} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Consectetur adipis</p>
              <p>SPECIAL PRICE $34.70</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item">
            <img className="detail-picture" src={pictureSweaterThree} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Commodo consequat</p>
              <p>SPECIAL PRICE $21.40</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item">
            <img className="detail-picture" src={pictureSweaterFour} alt="A small picture" />
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

export default Sweater
