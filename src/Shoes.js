import React, { Component } from 'react'
import pictureShoesOne from './pictures/Shoes-1.jpg';
import pictureShoesTwo from './pictures/Shoes-2.jpg';
import pictureShoesThree from './pictures/Shoes-3.jpg';
import pictureShoesFour from './pictures/Shoes-4.jpg';

export class Shoes extends Component {
  render() {
    return (
      <div>
        <div className = "detail-items">
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureShoesOne} alt="Shoes" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Lorem ipsum dolor </p>
              <p>SPECIAL PRICE $25.90</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureShoesTwo} alt="Shoes" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Consectetur adipis</p>
              <p>SPECIAL PRICE $34.70</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureShoesThree} alt="Shoes" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Commodo consequat</p>
              <p>SPECIAL PRICE $21.40</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureShoesFour} alt="Shoes" />
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

export default Shoes
