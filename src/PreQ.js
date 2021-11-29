import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PreQ = (props) => {
  return(
    <>
      <div className={`preq ${props.isVisible ? "show" : "hidden-no-fade"}`}>
        <h2>{props.title}</h2>
        <div className="equal-row">
          <div className="equal-col">
            <h3>{props.col1}</h3>
          </div>
          <div className="equal-col">
            {props.col2}
          </div>
        </div>
        <h2 onClick={()=>{props.linkClick();}} style={{"textAlign":"center", "cursor":"pointer"}}>{props.link} <FontAwesomeIcon icon="angle-double-right" /></h2>
      </div>
    </>
  );
};

export const PreQ1 = (props) => {

  const answers = (
    <>
      <form>
      <input type="radio" id="q1-1" name="quest1answers" value="Option text 1 will go here" />
      <label htmlFor="q1-1">Option text 1 will go here</label><br></br><br></br>
      <input type="radio" id="q1-2" name="quest1answers" value="Option text 2 will go here" />
      <label htmlFor="q1-2">Option text 2 will go here</label><br></br><br></br>
      <input type="radio" id="q1-3" name="quest1answers" value="Option text 3 will go here" />
      <label htmlFor="q1-3">Option text 3 will go here</label><br></br><br></br>
      <input type="radio" id="q1-4" name="quest1answers" value="Option text 4 will go here" />
      <label htmlFor="q1-4">Option text 4 will go here</label>
      </form>
    </>
  );

  return(
    <>
      <PreQ
        isVisible={props.isVisible}
        title="What's Your Vibe?"
        col1="Question 1 text will go here?"
        col2={answers}
        link="Next"
        linkClick={()=>{
          props.linkClick();
        }}
      />
    </>
  );
};

export const PreQ2 = (props) => {

  const answers = (
    <>
      <form>
      <input type="radio" id="q2-1" name="quest2answers" value="Option text 1 will go here" />
      <label htmlFor="q2-1">Option text 1 will go here</label><br></br><br></br>
      <input type="radio" id="q2-2" name="quest2answers" value="Option text 2 will go here" />
      <label htmlFor="q2-2">Option text 2 will go here</label><br></br><br></br>
      <input type="radio" id="q2-3" name="quest2answers" value="Option text 3 will go here" />
      <label htmlFor="q2-3">Option text 3 will go here</label><br></br><br></br>
      <input type="radio" id="q2-4" name="quest2answers" value="Option text 4 will go here" />
      <label htmlFor="q2-4">Option text 4 will go here</label>
      </form>
    </>
  );

  return(
    <>
      <PreQ
        isVisible={props.isVisible}
        title="What's Your Vibe?"
        col1="Question 2 text will go here?"
        col2={answers}
        link="Next"
        linkClick={()=>{
          props.linkClick();
        }}
      />
    </>
  );
};

export const PreQ3 = (props) => {

  const answers = (
    <>
      <form>
      <input type="radio" id="q3-1" name="quest3answers" value="Option text 1 will go here" />
      <label htmlFor="q3-1">Option text 1 will go here</label><br></br><br></br>
      <input type="radio" id="q3-2" name="quest3answers" value="Option text 2 will go here" />
      <label htmlFor="q3-3">Option text 2 will go here</label><br></br><br></br>
      <input type="radio" id="q3-3" name="quest3answers" value="Option text 3 will go here" />
      <label htmlFor="q3-3">Option text 3 will go here</label><br></br><br></br>
      <input type="radio" id="q3-4" name="quest3answers" value="Option text 4 will go here" />
      <label htmlFor="q3-4">Option text 4 will go here</label>
      </form>
    </>
  );

  return(
    <>
      <PreQ
        isVisible={props.isVisible}
        title="What's Your Vibe?"
        col1="Question 3 text will go here?"
        col2={answers}
        link="Next"
        linkClick={()=>{
          props.linkClick();
        }}
      />
    </>
  );
};
