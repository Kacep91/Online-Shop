import React, { Component } from 'react';
import Pinterest from './pictures/pinterest.png';
import Google from './pictures/google.png';
import Instagram from './pictures/instagram.png';
import Twitter from './pictures/twitter.png';
import Facebook from './pictures/facebook.png';
import Gps from './pictures/gps.png';
import Phone2 from './pictures/phone2.png';
import Email from './pictures/email.png';

class Footer extends Component {
  state ={

  
  }
  render() {
    return (
      <div className="footer-position">
      <div className="footer">
          <div className = "footer-follow">
            <div className="footer-follow-part-1">
            <p>FOLLOW US ON</p>
            <a href="http://facebook.com" id="menu"><img src={Facebook} alt="Facebook" /></a>
            <a href="http://twitter.com" id="menu"><img src={Twitter} alt="Twitter" /></a>
            <a href="http://google.com" id="menu"><img src={Google} alt="Google" /></a>
            <a href="http://instagram.com" id="menu"><img src={Instagram} alt="Instagram" /></a>
            <a href="http://pinterest.com" id="menu"><img src={Pinterest} alt="Pinterest" /></a>
            </div>
            <div className="footer-follow-part-2">
              <input className="input-email" type="text" placeholder="Enter your email to join our newsletter"/>
              <button className="btn-join" type="submit">JOIN</button>
            </div>
          </div>
      
        <div className="footer-navigation">
          <div className="footer-nav-col-1">
            <p className="playfair">CUSTOMER CARE</p>
              <li><a href="#" id="menu">Help Center</a></li>
              <li><a href="#" id="menu">FAQ</a></li>
              <li><a href="#" id="menu">How To Buy</a></li>
              <li><a href="#" id="menu">Delivery</a></li>
          </div>
          <div className="footer-nav-col-2">
            <p className="playfair">ABOUT US</p>
              <li><a href="#" id="menu">Our Stories</a></li>
              <li><a href="#" id="menu">Press</a></li>
              <li><a href="#" id="menu">Career</a></li>
              <li><a href="#" id="menu">Contact</a></li>
          </div>
          <div className="footer-nav-col-3">
          <p className="playfair">MY ACCOUNT</p>
              <li><a href="#" id="menu">Login</a></li>
              <li><a href="#" id="menu">My cart</a></li>
              <li><a href="#" id="menu">Order History</a></li>
              <li><a href="#" id="menu">Payment</a></li>
          </div>
          <div className="footer-nav-col-4">
          <div className="col-4-top">
            <p className="playfair">OUR STORES</p>
            <button className="btn-solo">SOLO</button>
            <button className="btn-bogor">BOGOR</button>
          </div>
          <div className="col-4-bottom">
              <li><img src={Gps} className = "img-icon" alt="adress" />Jl. Haji Muhidin, Blok G no.69</li>
              <li><img src={Phone2} className = "img-icon" alt="phone" />025-2839341 </li>
              <li><a href = "mailto:solo@gretong.com"><img src={Email} className = "img-icon" alt="email" />solo@gretong.com</a></li>
          </div>
          </div>
        </div>
        <div className="footer-other">
          <p>(C) 2015 Gretongan</p>
          <p>Terms & Conditions</p>
          <p>Privacy and Policy</p>
        </div>
        </div>
      </div>
    )
  }
}

export default Footer;
