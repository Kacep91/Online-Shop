import React, { Component } from 'react'
import pictureTuxedoOne from './pictures/Tuxedo-1.jpg';
import pictureTuxedoTwo from './pictures/Tuxedo-2.jpg';
import pictureTuxedoThree from './pictures/Tuxedo-3.jpg';
import pictureTuxedoFour from './pictures/Tuxedo-4.jpg';


export class Tuxedo extends Component {
  render() {
    return (
      <div>
        <div className = "detail-items">
          <div className="detail-item">
            <img className="detail-picture" src={pictureTuxedoOne} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Lorem ipsum dolor </p>
              <p>SPECIAL PRICE $25.90</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item">
            <img className="detail-picture" src={pictureTuxedoTwo} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Consectetur adipis</p>
              <p>SPECIAL PRICE $34.70</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item">
            <img className="detail-picture" src={pictureTuxedoThree} alt="A small picture" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Commodo consequat</p>
              <p>SPECIAL PRICE $21.40</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item">
            <img className="detail-picture" src={pictureTuxedoFour} alt="A small picture" />
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

export default Tuxedo;
