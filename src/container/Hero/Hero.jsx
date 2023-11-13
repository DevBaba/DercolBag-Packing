import React from 'react';
import { images } from '../../constants';
import {IconScroll} from '../../components';
import './Hero.css';


const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title"> Superior packaging for exceptional products
</h1>
          <p className="py-4">Every brand is unique, and so should be its packaging. We specialize in creating tailor-made packaging solutions that align with brand objectives, enhance product visibility, and resonate with target audiences.</p>
          <button className="btn-positivus">Get started</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
      
      <div className="clients">
      {logos.map((logo, index) => (
      <img
        key={index}
        src={images[logo]}
        alt={images[logo]}
      />
    ))}
  
      </div>
      <IconScroll />
    </div>
    
  )
}

export default Hero
