import React, { Component } from 'react';
import telephoneIcon from './pictures/telephone.png';


class Header extends Component {
  state ={

  
  }


  render() {
    return (
      <div>
        <div className="info-tab">
          <p className="help-section">Help</p>
          <p className="help-section">Contact</p>
          <p className="help-section">Delivery Information</p>
          <img src='.\src\pictures\telephone.png' alt="telephone"/> <p className="call-us">Call us: 032 2352 782</p>
        </div>
        <div className="control-bar">
          <div className="gretong-logo border">
            <p className="gretong">GRETONG</p>
            <p className="online-store">ONLINE STORE</p>
          </div> 
          
          <div class="border">
            
          </div>
          
          <div className="control-buttons border">
            <button className = "btn login">LOGIN</button>
            <button className = "btn register">REGISTER</button>
            <img src={telephoneIcon} alt="cart" />
            <button className = "btn checkout">CHECKOUT</button>
            <input type="search" placeholder="Search" />
          </div>
          <div className="nav border">
          <button className = "btn-nav">HOME</button>
          <button className = "btn-nav" id="arrivals">NEW ARRIVALS</button>
          <button className = "btn-nav">TUXEDO</button>
          <button className = "btn-nav">SWEATER</button>
          <button className = "btn-nav">SHOES</button>
          <button className = "btn-nav">GLASSES</button>
          <button className = "btn-nav">T-SHIRT</button>
          <button className = "btn-nav">HOME</button>
          <button className = "btn-nav">WATCHES</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
