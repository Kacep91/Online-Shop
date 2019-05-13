import React, { Component } from 'react'
import pictureWatchOne from './pictures/Watch-1.jpg';
import pictureWatchTwo from './pictures/Watch-2.jpg';
import pictureWatchThree from './pictures/Watch-3.jpg';
import pictureWatchFour from './pictures/Watch-4.jpg';


export class Watches extends Component {
  render() {
    return (
      <div>
        <div className = "detail-items">
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureWatchOne} alt="Watches" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Lorem ipsum dolor </p>
              <p>SPECIAL PRICE $25.90</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureWatchTwo} alt="Watches" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Consectetur adipis</p>
              <p>SPECIAL PRICE $34.70</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureWatchThree} alt="Watches" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Commodo consequat</p>
              <p>SPECIAL PRICE $21.40</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-small">
            <img className="detail-picture-small" src={pictureWatchFour} alt="Watches" />
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

export default Watches
