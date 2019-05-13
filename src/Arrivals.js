import React, { Component } from 'react'
import pictureArrivalsOne from './pictures/Arrivals-1.jpg';
import pictureArrivalsTwo from './pictures/Arrivals-2.jpg';
import pictureArrivalsThree from './pictures/Arrivals-3.jpg';
import pictureArrivalsFour from './pictures/Arrivals-4.jpg';

export class Arrivals extends Component {
  render() {
    return (
      <div>
        <div className = "detail-items-big">
          <div className="detail-item-big">
            <img className="detail-picture-big" src={pictureArrivalsOne} alt="Arrivals" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Lorem ipsum dolor </p>
              <p>SPECIAL PRICE $25.90</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-big">
            <img className="detail-picture-big" src={pictureArrivalsTwo} alt="Arrivals" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Consectetur adipis</p>
              <p>SPECIAL PRICE $34.70</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-big">
            <img className="detail-picture-big" src={pictureArrivalsThree} alt="Arrivals" />
            <div className="detail-gradient-small"><p className="text-center-big">VIEW</p></div>
            <div className = "detail-item-under-text">
              <p>Commodo consequat</p>
              <p>SPECIAL PRICE $21.40</p>
              <button className = "btn-order">ORDER NOW</button>
            </div>
          </div>
          <div className="detail-item-big">
            <img className="detail-picture-big" src={pictureArrivalsFour} alt="Arrivals" />
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

export default Arrivals
