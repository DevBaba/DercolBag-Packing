import React from 'react';
import './Footer.css';
import { images, data } from '../../constants';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img src={images.logofooter} alt="logo" className="img-fluid" />
        </div>
        <div className="col-md-8 col-12 ">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
              <li> <a href="#" >{item.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-md-2 col-12 text-center text-md-end fs-4"><BsFacebook /> <BsTwitter /></div>
      </div>
      <div className="row">

        <div className="col-md-4 col-12">
          <ul className="info-contact">
            <li> <span>Contact us:</span></li>
            <li>Email: dercolbags@gmail.com</li>
            <li>Phone: 030 285 9583 / 030 252 5384</li>
            <li>19 Mkogh Lane, West Legon(Accra)
              Block H 1/8 GICEL Estates SCC, New Weija(Accra)</li>
          </ul>
        </div>
        <div className="col-md-8 col-12">

          <form className="row form-news">
            <div className="col-lg-6 col-12">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
              <button type="submit" className="btn-positivus w-100">Subscribe to news</button>
            </div>
          </form>

        </div>

        <div className="rights">
          <p>© 2023 DercolBags Packaging. All Rights Reserved.</p>
          <p><a href="#" alt="Privacy Policy">Privacy Policy</a></p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
