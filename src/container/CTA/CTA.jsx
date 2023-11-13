import React from 'react';
import './CTA.css';
import { images } from '../../constants';

const CTA = () => {
  return (
    <div className="section-padding">
<div className="row cta">
    <div className="col-lg-8 col-12">
<h3>Who we are</h3>

<p className="pt-2 pb-4">DercolBags is a Sustainable Packaging firm, Empowering Women enterpreneurs to replace Single-Use plastic packages with eco-friendly packages for a cleaner environment.

Established in 2018, Our Key goal has been to add Value to products and services for local and international markets.</p>
<buton className="btn-positivus">Book an appointment</buton>
</div>
<div className="col-lg-4 d-lg-flex d-none">
<img src={images.thingshappen} alt="thingshappen" />
</div>
    </div>
    </div>
  )
}

export default CTA
