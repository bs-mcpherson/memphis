import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TriviaCard = (props) => {
  return(
    <>
     <div onClick={() => {props.click();}} className="trivia-card">
       <p><strong>{props.answer}</strong></p>
     </div>
    </>
  );
};

export const Trivia = (props) => {

  const quiz = {
    questions: true,
    wrong: false,
    right: false,
  }

  const [showQuiz, setShowQuiz] = useState(quiz);

  const submitAnswer = (position) => {
    setShowQuiz({
      ...showQuiz,
      questions: false,
      wrong: position === props.correct ? false : true,
      right: position === props.correct ? true : false,
    })
  }

  return(
    <>
      <div className={`trivia ${props.isVisible ? "show" : "hidden-no-fade"}`}>
        <h2>Trivia: {props.venue}</h2>
        <h3>Trivia question will be asked here</h3>
        <div className={`answer-row ${showQuiz.questions ? "show" : "hidden-no-fade"}`}>
          <div className="trivia-col">
            <TriviaCard
              answer={props.answer1}
              click={() => {
                submitAnswer("1");
              }}
            />
          </div>
          <div className="trivia-col">
            <TriviaCard
              answer={props.answer2}
              click={() => {
                submitAnswer("2");
              }}
            />
          </div>
          <div className="trivia-col">
            <TriviaCard
              answer={props.answer3}
              click={() => {
                submitAnswer("3");
              }}
            />
          </div>
        </div>
        <div className="quiz-result">
          <div className={`correct ${showQuiz.right ? "show" : "hidden-no-fade"}`}>
             <h2><FontAwesomeIcon icon="check-circle" /></h2>
             <h3
               style={{"cursor":"pointer"}}
               onClick={()=>{
                 setShowQuiz({
                   ...showQuiz,
                   questions: true,
                   wrong: false,
                   right: false,
                 });
             }}>
             You got it!</h3>
          </div>
          <div className={`incorrect ${showQuiz.wrong ? "show" : "hidden-no-fade"}`}>
             <h2><FontAwesomeIcon icon="times-circle" /></h2>
             <h3
               style={{"cursor":"pointer"}}
               onClick={()=>{
                 setShowQuiz({
                   ...showQuiz,
                   questions: true,
                   wrong: false,
                   right: false,
                 });
             }}>
             Incorrect. Click here to try again.</h3>
          </div>
        </div>
        <h2 onClick={()=>{props.next();}} style={{"textAlign":"center", "cursor":"pointer"}}>{props.nextTime} <FontAwesomeIcon icon="angle-double-right" /></h2>
      </div>
    </>
  );
};
