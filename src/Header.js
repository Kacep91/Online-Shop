import React, { Component } from 'react';
import TelephoneIcon from './pictures/telephone.png';
import Gretong from './pictures/gretong.png';
import CartIcon from './pictures/cart.png';
import SearchIcon from './pictures/search.png';

class Header extends Component {
  state ={

  
  }


  render() {
    return (
      <div>
        <div className = "header-position">
        <div className="info-tab">
          <div className="header-justify">
            <div className="header-part-1">
              <p>Help</p>
              <p>Contact</p>
              <p>Delivery Information</p>
            </div>
            <div className="header-part-2">
              <img className="img-icon" src={TelephoneIcon} alt="cart" />
              <p className="call-us">Call us: 032 2352 782</p>
            </div>
          </div>
        </div>
        
        <div className="control-bar">
          <div className="gretong-logo">
            {/* <p className="gretong">GRETONG</p>
            <p className="online-store">ONLINE STORE</p> */}
            <img src={Gretong} alt="Gretong-logo" />
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
                <input type="submit" value=""/>
              </form>
            </div>
            </div>
          <div className="nav">
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
      </div>
    )
  }
}

export default Header;
