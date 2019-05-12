import { unmountComponentAtNode } from "react-dom";
import React, { Component } from 'react';
import TelephoneIcon from './pictures/telephone.png';
import Gretong from './pictures/gretong.png';
import CartIcon from './pictures/cart.png';
import SearchIcon from './pictures/search.png';
import Body from "./Body";
import ReactDOM from 'react-dom';
import Arrivals from "./Arrivals";
import Tuxedo from "./Tuxedo";
import Sweater from "./Sweater";
import Shoes from "./Shoes";
import Glasses from "./Glasses";
import TShirt from "./TShirt";
import Watches from "./Watches";


class Header extends Component {
  state ={

  
  }
  
  loadHome = () => {
  unmountComponentAtNode(document.getElementById('gallery'));
  ReactDOM.render (<Body />, document.getElementById('gallery')) ;
  }

  loadNewArrivals = () => {
    unmountComponentAtNode(document.getElementById('gallery'));
    ReactDOM.render (<Arrivals />, document.getElementById('gallery')) 
  }

  loadTuxedo = () => {
    unmountComponentAtNode(document.getElementById('gallery'));
    ReactDOM.render (<Tuxedo />, document.getElementById('gallery')) ;
  }

  loadSweater = () => {
    unmountComponentAtNode(document.getElementById('gallery'));
    ReactDOM.render (<Sweater />, document.getElementById('gallery')) ;
  }

  loadShoes = () => {
    unmountComponentAtNode(document.getElementById('gallery'));
    ReactDOM.render (<Shoes />, document.getElementById('gallery')) ;
  }

  loadGlasses = () => {
    unmountComponentAtNode(document.getElementById('gallery'));
    ReactDOM.render (<Glasses />, document.getElementById('gallery')) ;
  }

  loadTShirt = () => {
    unmountComponentAtNode(document.getElementById('gallery'));
    ReactDOM.render (<TShirt />, document.getElementById('gallery')) ;
  }

  loadWatches = () => {
    unmountComponentAtNode(document.getElementById('gallery'));
    ReactDOM.render (<Watches />, document.getElementById('gallery')) ;
  }



  render() {
    return (
      <div>
        <div className = "header-position">
        <div className="info-tab">
          <div className="header-justify">
            <div className="header-part-1">
              <a href="#" id="menu"><p id="nav-text">Help</p></a>
              <a href="#" id="menu"><p id="nav-text">Contact</p></a>
              <a href="#" id="menu"><p id="nav-text">Delivery Information</p></a>
            </div>
            <div className="header-part-2">
              <img className="img-icon" src={TelephoneIcon} alt="cart" />
              <p className="call-us">Call us: 032 2352 782</p>
            </div>
          </div>
        </div>
        
        <div className="control-bar">
          <div className="gretong-logo">
          <a href="#" id="menu"><img src={Gretong} alt="Gretong-logo" /></a>
          </div> 
          
          <div>
            
          </div>
          
          <div className="control-buttons">
            <div className = "control-buttons-position">
              <button className = "btn-login">LOGIN</button>
              <button className = "btn-register">REGISTER</button>
              <img className="img-icon" src={CartIcon} alt="cart" />
              <p>My Cart ( 0 ) : $0</p>
              <button className = "btn-checkout">CHECKOUT</button>
            </div>
            <div className="search">
              <form>
                <input type="search" placeholder="Search"/>
                <input type="submit" value="" src={SearchIcon}/>
              </form>
            </div>
            </div>
          <div className="nav">
          <button className = "btn-nav" onClick={this.loadHome}>HOME</button>
          <button className = "btn-nav" onClick={this.loadNewArrivals} id="arrivals">NEW ARRIVALS</button>
          <button className = "btn-nav" onClick={this.loadTuxedo}>TUXEDO</button>
          <button className = "btn-nav" onClick={this.loadSweater}>SWEATER</button>
          <button className = "btn-nav" onClick={this.loadShoes}>SHOES</button>
          <button className = "btn-nav" onClick={this.loadGlasses}>GLASSES</button>
          <button className = "btn-nav" onClick={this.loadTShirt}>T-SHIRT</button>
          <button className = "btn-nav" onClick={this.loadWatches} >WATCHES</button>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Header;
