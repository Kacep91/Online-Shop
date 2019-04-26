import React, { Component } from 'react';
import manBig from './pictures/man-big.png';
import womanBig from './pictures/woman-big.png';
import pictureLong from './pictures/picture-long.png';
import pictureSmallOne from './pictures/picture-small-1.png';
import pictureSmallTwo from './pictures/picture-small-2.png';
import pictureSmallThree from './pictures/picture-small-3.png';
import pictureSmallFour from './pictures/picture-small-4.png';


class Body extends Component {
  state ={

  
  }
  render() {
    return (
      <div className="gallery border">
        <div className = "row-1">
          <div className="picture-big"><img src={womanBig} alt="Beautiful Woman" /></div>
          <div className="picture-big"><img src={manBig} alt="Handsome Man" /></div>          
        </div>
        <div className = "row-2">
          <div className = "picture-long"><img src={pictureLong} alt="A long picture" /></div>
          <div className = "picture-small"><img src={pictureSmallOne} alt="A small picture" /></div>
        </div>
        <div className = "row-3">
          <div className = "picture-small"><img src={pictureSmallTwo} alt="A small picture" /></div>
          <div className = "picture-small"><img src={pictureSmallThree} alt="A small picture" /></div>
          <div className = "picture-small"><img src={pictureSmallFour} alt="A small picture" /></div>
        </div>
      </div>
    )
  }
}

export default Body;
