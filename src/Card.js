import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gibsons from './img/gibsons.jpg';

export const Card = (props) => {

  const directions = (
    <>
    <h3>Instructions</h3>
    <ol>
      <li>Take the Quiz -InstructionsResults –Instructions</li>
      <li>Learning Content -Instructions</li>
      <li>Trivia -Instructions"</li>
    </ol>
    </>
  );
  const objectives = (
    <>
      <h3>Learning Objectives</h3>
      <ol>
        <li>Learning Objective 1</li>
        <li>Learning Objective 2</li>
        <li>Learning Objective 3</li>
        <li>Learning Objective 4</li>
      </ol>
    </>
  );

  const content = [{"menu":"Instructions", "display": directions}, {"menu":"Learning Objectives", "display":objectives}];
  const [active, setActive] = useState(content[0].menu);
  const [rightContent, setRightContent] = useState(content[0].display);

  return(
    <>
      <div className={`card-wrapper ${props.isVisible ? "show" : "hidden"}`}>
        <h2 style={{"textAlign":"center"}}>{props.title}</h2>
        <div className="card-row">
          <div className="card-col-left">
            {
              content.map((c)=>
                <h3
                  style={{"cursor":"pointer"}}
                  className={c.menu === active ? "active" : ""}
                  onClick={()=>{
                    setActive(c.menu);
                    setRightContent(c.display);
                  }}
                >{c.menu} <FontAwesomeIcon icon="angle-double-right" /></h3>
              )
            }
          </div>
          <div className="card-col-right">
            {rightContent}
          </div>
        </div>
        <h2 onClick={()=>{props.linkClick();}} style={{"textAlign":"center", "cursor":"pointer"}}>{props.link} <FontAwesomeIcon icon="angle-double-right" /></h2>
      </div>
    </>
  );
};

const Location = (props) => {
  return(
    <>
      <div className="card-row location">
        <div className="card-col-left">
          <img src={props.img} alt={props.locationName} />
        </div>
        <div className="card-col-right">
          <h2>{props.locationName}</h2>
          <p>{props.locationAddress1}</p>
          {!!props?.locationAddress2 && (
            <p>{props?.locationAddress2}</p>
          )
          }
          <p>{props.locationAddress3}</p>
        </div>
      </div>
    </>
  );
};

export const Card2 = (props) => {

  const morning = (
    <>
      <Location
        img={gibsons}
        locationName="Gibson's Donuts"
        locationAddress1="760 Mt Moriah Rd"
        locationAddress3="Memphis, TN 38117"
      />

    </>
  );

  const afternoon = (
    <>
    <Location
      img={gibsons}
      locationName="TBD"
      locationAddress1="Afternoon Address"
      locationAddress3="Memphis, TN 38117"
    />
    </>
  );

  const evening = (
    <>
    <Location
      img={gibsons}
      locationName="TBD"
      locationAddress1="Afternoon Address"
      locationAddress3="Memphis, TN 38117"
    />
    </>
  );

  const content = [{"menu":"Morning", "display": morning }, {"menu":"Afternoon", "display" : afternoon }, {"menu":"Evening", "display": evening}];
  const [active, setActive] = useState(content[0].menu);
  const [rightContent, setRightContent] = useState(content[0].display);

  return(
    <>
      <div className={`card-wrapper ${props.isVisible ? "show" : "hidden"}`}>
        <h2 style={{"textAlign":"center"}}>{props.title}</h2>
        <div className="card-row">
          <div className="card-col-left">
            {
              content.map((c)=>
                <h3
                  style={{"cursor":"pointer"}}
                  className={c.menu === active ? "active" : ""}
                  onClick={()=>{
                    setActive(c.menu);
                    setRightContent(c.display);
                  }}
                >{c.menu} <FontAwesomeIcon icon="angle-double-right" /></h3>
              )
            }
          </div>
          <div className="card-col-right">
            {rightContent}
          </div>
        </div>
        <h2 onClick={()=>{props.linkClick();}} style={{"textAlign":"center", "cursor":"pointer"}}>{props.link} <FontAwesomeIcon icon="angle-double-right" /></h2>
      </div>
    </>
  );
};
