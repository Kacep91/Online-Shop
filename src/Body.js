import React, { Component } from 'react';
import manBig from './pictures/man-big.png';
import womanBig from './pictures/woman-big.png';
import pictureLong from './pictures/picture-long.png';
import pictureSmallOne from './pictures/picture-small-1.png';
import pictureSmallTwo from './pictures/picture-small-2.png';
import pictureSmallThree from './pictures/picture-small-3.png';
import pictureSmallFour from './pictures/picture-small-4.png';
import Arrow from './pictures/arrow.png';



class Body extends Component {
  state ={

  
  }

  render() {
    return (
      <div className="gallery">
        <div className = "row-1">
          <div className="picture-big">
            <img src={womanBig} alt="Beautiful Woman" />
            <div className="picture-gradient"></div>
            <div className="picture-text">
              <p className="text-picture-middle-big">NEW ARRIVALS</p>
              <p className="text-picture-middle-small">REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
              <button className="btn-picture" onclick="loadNewArrivals()">TAKE A LOOK</button>
            </div>
          </div>
          <div className="picture-big">
            <img src={manBig} alt="Handsome Man" />
            <div className="picture-gradient"></div>
            <div className="picture-text">
              <p className="text-picture-middle-big">TUXEDO</p>
              <p className="text-picture-middle-small">REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
              <button className="btn-picture">SHOP NOW</button>
            </div>
          </div>          
        </div>
        <div className = "row-2">
          <div className = "picture-long">
            <img src={pictureLong} alt="A long picture" />
            <div className="picture-gradient"></div>
            <div className="picture-text">
              <p className="text-picture-middle-big">SWEATER</p>
              <p className="text-picture-middle-small">REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
              <button className="btn-picture">SHOP NOW</button>
            </div>
          </div>
          <div className = "picture-small">
            <img src={pictureSmallOne} alt="A small picture" />
            <div className="picture-gradient"></div>
            <div className="picture-text-2">
              <p className="text-bottom-big">Trekking Shoes</p>
              <img className="arrow-icon" src={Arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className = "row-3">
          <div className = "picture-small">
            <img src={pictureSmallTwo} alt="A small picture" />
            <div className="picture-gradient"></div>
            <div className="picture-text-2">
              <p className="text-bottom-big">Casual Glasses</p>
              <img className="arrow-icon" src={Arrow} alt="arrow" />
              </div>
          </div>
          <div className = "picture-small">
            <img src={pictureSmallThree} alt="A small picture" />
            <div className="picture-gradient"></div>
            <div className="picture-text">
                <p className="text-picture-middle-big-2">FRESH LOOK T-SHIRT</p>
                <button className="btn-picture">SHOP NOW</button>
            </div>
          </div>
          <div className = "picture-small">
          <img src={pictureSmallFour} alt="A small picture" />
          <div className="picture-gradient"></div>
            <div className="picture-text-2">
              <p className="text-bottom-big">Elegant Watches</p>
              <img className="arrow-icon" src={Arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
