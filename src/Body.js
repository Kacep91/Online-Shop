import { unmountComponentAtNode } from "react-dom";
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import manBig from './pictures/man-big.png';
import womanBig from './pictures/woman-big.png';
import pictureLong from './pictures/picture-long.png';
import pictureSmallOne from './pictures/picture-small-1.png';
import pictureSmallTwo from './pictures/picture-small-2.png';
import pictureSmallThree from './pictures/picture-small-3.png';
import pictureSmallFour from './pictures/picture-small-4.png';
import Arrow from './pictures/arrow.png';
import Arrivals from "./Arrivals";
import Tuxedo from "./Tuxedo";
import Sweater from "./Sweater";
import Shoes from "./Shoes";
import Glasses from "./Glasses";
import TShirt from "./TShirt";
import Watches from "./Watches";




class Body extends Component {
  
  
  state ={
    showBody: true,
  
  }

    loadTuxedo = () => {
      unmountComponentAtNode(document.getElementById('render-block'));
      ReactDOM.render (<Tuxedo />, document.getElementById('render-block'));
    }
  
    loadSweater = () => {
      unmountComponentAtNode(document.getElementById('render-block'));
      ReactDOM.render (<Sweater />, document.getElementById('render-block')) ;
    }
  
    loadShoes = () => {
      unmountComponentAtNode(document.getElementById('render-block'));
      ReactDOM.render (<Shoes />, document.getElementById('render-block')) ;
    }
  
    loadGlasses = () => {
      unmountComponentAtNode(document.getElementById('render-block'));
      ReactDOM.render (<Glasses />, document.getElementById('render-block')) ;
    }
  
    loadTShirt = () => {
      unmountComponentAtNode(document.getElementById('render-block'));
      ReactDOM.render (<TShirt />, document.getElementById('render-block')) ;
    }
  
    loadWatches = () => {
      unmountComponentAtNode(document.getElementById('render-block'));
      ReactDOM.render (<Watches />, document.getElementById('render-block')) ;
    }

  loadNewArrivals = () => {
    unmountComponentAtNode(document.getElementById('render-block'));
    ReactDOM.render (<Arrivals />, document.getElementById('render-block')) 
  }
  
  


  render() {
    return (
      <div className="gallery" id="gallery">
        <div className = "row-1">
          <div className="picture-big">
            <img src={womanBig} alt="Beautiful Woman" />
            <div className="picture-gradient"></div>
            <div className="picture-text">
              <p className="text-picture-middle-big">NEW ARRIVALS</p>
              <p className="text-picture-middle-small">REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
              <button className="btn-picture" onClick={this.loadNewArrivals}>TAKE A LOOK</button>
            </div>
          </div>
          <div className="picture-big">
            <img src={manBig} alt="Handsome Man" />
            <div className="picture-gradient"></div>
            <div className="picture-text">
              <p className="text-picture-middle-big">TUXEDO</p>
              <p className="text-picture-middle-small">REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
              <button className="btn-picture" onClick={this.loadTuxedo}>SHOP NOW</button>
            </div>
          </div>          
        </div>
        <div className = "row-2">
          <div className = "picture-long">
            <img src={pictureLong} alt="placeholder" />
            <div className="picture-gradient"></div>
            <div className="picture-text">
              <p className="text-picture-middle-big">SWEATER</p>
              <p className="text-picture-middle-small">REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
              <button className="btn-picture" onClick={this.loadSweater}>SHOP NOW</button>
            </div>
          </div>
          <div className = "picture-small">
            <img src={pictureSmallOne} alt="placeholder" />
            <div className="picture-gradient"></div>
            <div className="picture-text-2">
              <p className="text-bottom-big">Trekking Shoes</p>
              <img className="arrow-icon" src={Arrow} alt="arrow" onClick={this.loadShoes}/>
            </div>
          </div>
        </div>
        <div className = "row-3">
          <div className = "picture-small">
            <img src={pictureSmallTwo} alt="placeholder" />
            <div className="picture-gradient"></div>
            <div className="picture-text-2">
              <p className="text-bottom-big">Casual Glasses</p>
              <img className="arrow-icon" src={Arrow} alt="arrow" onClick={this.loadGlasses}/>
              </div>
          </div>
          <div className = "picture-small">
            <img src={pictureSmallThree} alt="placeholder" />
            <div className="picture-gradient"></div>
            <div className="picture-text">
                <p className="text-picture-middle-big-2">FRESH LOOK T-SHIRT</p>
                <button className="btn-picture" onClick={this.loadTShirt}>SHOP NOW</button>
            </div>
          </div>
          <div className = "picture-small">
          <img src={pictureSmallFour} alt="placeholder" />
          <div className="picture-gradient"></div>
            <div className="picture-text-2">
              <p className="text-bottom-big">Elegant Watches</p>
              <img className="arrow-icon" src={Arrow} alt="arrow" onClick={this.loadWatches}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
