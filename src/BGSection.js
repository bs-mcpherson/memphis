import React from 'react';

export const BGSectionHome = (props) => {

  return(
    <>
      <div className={`home-hero ${props.isVisible ? "show-no-fade" : "hidden-no-fade"}`}>
      <div className={`inner-hero ${props.isVisible ? "show-no-fade" : "hidden-no-fade"}`}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.description}</p>
        <div className="center-btn">
          <button className="lg-button" onClick={() => {
            props.btnClick();
          }}>
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
   </>
 );
};

export const BGSection = (props) => {

  return(
    <>
      <div className={`home-hero ${props.isVisible ? "show-no-fade" : "hidden-no-fade"}`}>
      <div className={`inner-hero ${props.isVisible ? "show-no-fade" : "hidden-no-fade"}`}>
        {props.content}
      </div>
    </div>
   </>
 );
};
