import React from 'react';
import { Headings } from '../../components';
import { data } from '../../constants';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import './Services.css';


const Services = () => {
  return (
    <div id="services" className="d-block pt-md-4">
      <Headings title="Our Services" text="At DercolBag Packaging, we offer a range of packaging services to help brands in the markets. These services include" />

      <div className="row">
        {data.ServicesData.map(({ titleone, titletwo , link, itemclass, imgURL }, index) => (
          <div className="col-lg-6 col-12" key={index}>
          <div className={`row ${itemclass}`}>
              <div className="col-md-6 box">
             <div>  <span>{titleone} </span> 
               <span>{titletwo}</span> 
               </div>
                <a href={link} alt={titleone} className="readmore"> <BsFillArrowUpRightCircleFill /> Learn more </a>
              </div>
              <div className="col-md-6 text-end"><img src={imgURL} alt={titleone} className="img-fluid img-services" /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
