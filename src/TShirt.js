import React, { Component } from 'react'
import pictureTShirtOne from './pictures/TShirt-1.jpg';
import pictureTShirtTwo from './pictures/TShirt-2.jpg';
import pictureTShirtThree from './pictures/TShirt-3.jpg';
import pictureTShirtFour from './pictures/TShirt-4.jpg';

export class TShirt extends Component {
  render() {
    return (
      <div>
        <div className = "detail-items">
          <div className="detail-item">
            <img className="detail-picture" src={pictureTShirtOne} alt="TShirt" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Lorem ipsum dolor </p>
              <p>SPECIAL PRICE $25.90</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item">
            <img className="detail-picture" src={pictureTShirtTwo} alt="TShirt" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Consectetur adipis</p>
              <p>SPECIAL PRICE $34.70</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item">
            <img className="detail-picture" src={pictureTShirtThree} alt="TShirt" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Commodo consequat</p>
              <p>SPECIAL PRICE $21.40</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item">
            <img className="detail-picture" src={pictureTShirtFour} alt="TShirt" />
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

export default TShirt
