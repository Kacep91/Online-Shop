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
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Google} alt="Google" />
              <img src={Instagram} alt="Instagram" />
              <img src={Pinterest} alt="Pinterest" />
            </div>
            <div className="footer-follow-part-2">
              <input className="input-email" type="text" placeholder="Enter your email to join our newsletter"/>
              <button className="btn-join" type="submit">JOIN</button>
            </div>
          </div>
      
        <div className="footer-navigation">
          <div className="footer-nav-col-1">
            <p className="playfair">CUSTOMER CARE</p>
              <li>Help Center</li>
              <li>FAQ</li>
              <li>How To Buy</li>
              <li>Delivery</li>
          </div>
          <div className="footer-nav-col-2">
            <p className="playfair">ABOUT US</p>
              <li>Our Stories</li>
              <li>Press</li>
              <li>Career</li>
              <li>Contact</li>
          </div>
          <div className="footer-nav-col-3">
          <p className="playfair">MY ACCOUNT</p>
              <li>Login</li>
              <li>My cart</li>
              <li>Order History</li>
              <li>Payment</li>
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
              <li><img src={Email} className = "img-icon" alt="email" />solo@gretong.com</li>
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
