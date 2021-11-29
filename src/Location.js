import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Location = (props) => {
  return(
    <>
      <div className={`loc ${props.isVisible ? "show" : "hidden-no-fade"}`}>
        <h2>{props.title}</h2>
        <h3>{props.locationName}</h3>
        <div className="tour-mobile">
        <iframe width="100%" height="auto" data-original-width="3992" data-original-height="2621" src="https://www.thinglink.com/card/1205257932048957445" type="text/html" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" scrolling="no"></iframe>
        <script async src="//cdn.thinglink.me/jse/responsive.js"></script>
        </div>
        <div className="tour">
        <iframe width="960" height="630" data-original-width="3992" data-original-height="2621" src="https://www.thinglink.com/card/1205257932048957445" type="text/html" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" scrolling="no"></iframe>
        <script async src="//cdn.thinglink.me/jse/responsive.js"></script>
        </div>
        <div className="description">
        <p>{props.description}</p>
        </div>
        <div className="location-info">
          <div className="location-info-col">
            <a href={props.website} target="_blank"><h3><FontAwesomeIcon icon="globe" /> Website</h3></a>
            <a href={`tel:${props.phone}`}><h3><FontAwesomeIcon icon="mobile-alt" /> {props.phone}</h3></a>
          </div>
          <div className="location-info-col">
            <a href={props.addressLink} target="_blank"><h3><FontAwesomeIcon icon="map-marker-alt" /> {props.address1}<br></br>
            &nbsp;&nbsp;{props.address3}</h3></a>
          </div>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.8601169677636!2d-89.89709648502642!3d35.110203668684086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f84667915c02d%3A0x1896a12e39d4524c!2sGibson&#39;s%20Donuts!5e0!3m2!1sen!2sus!4v1638069504001!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" style={{"border":"none"}} loading="lazy"></iframe>
        </div>
        <h2 onClick={()=>{props.linkClick();}} style={{"text-align":"center", "cursor":"pointer"}}>{props.link} <FontAwesomeIcon icon="angle-double-right" /></h2>
      </div>
    </>
  );
};
