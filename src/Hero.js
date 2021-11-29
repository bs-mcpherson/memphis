import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation } from './Navigation.js';
import { BGSectionHome, BGSection } from './BGSection.js';
import { Card, Card2 } from './Card.js';
import { PreQ1, PreQ2, PreQ3 } from './PreQ.js';
import { Location } from './Location.js';
import { Trivia } from './Trivia.js';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      bgSection1: true,
      card1: false,
      pq1: false,
      pq2:false,
      pq3:false,
      card2: false,
      location1: false,
      trivia1: false,
      location2: false,
      trivia2: false,
      location3: false,
      trivia3: false,
      conclusion: false,
    };
  };

  scrollToTop() {
     window.scrollTo(0,0);
   }

   flow(active) {
   this.scrollToTop();
   this.setState({
     active: active,
     bgSection1:active === 1 ? true : false,
     card1:active === 2 ? true : false,
     pq1: active === 3 ? true : false,
     pq2: active === 4 ? true : false,
     pq3: active === 5 ? true : false,
     card2: active === 6 ? true : false,
     location1: active === 7 ? true : false,
     trivia1: active === 8 ? true : false,
     location2: active === 9 ? true : false,
     trivia2: active === 10 ? true : false,
     location3: active === 11 ? true : false,
     trivia3: active === 12 ? true : false,
     conclusion: active === 13 ? true : false,
   });
 }

  render() {

    return(
      <>
        <header className="App-header">
          <div
            onClick={() => {
              this.flow(1);
            }}
            className="site-title"
            >
              <p>Walking in Memphis</p>
            </div>
          <Navigation
            nav1={ this.state.active < 7 ? "Directions" : "Morning"}
            nav2={ this.state.active < 7 ? "What's Your Vibe?" : "Afternoon" }
            nav3={ this.state.active < 7 ? "All Attractions" : "Evening" }
            isVisible={this.state.bgSection1}
            click1={ this.state.active < 7 ? (()=>{ this.flow(2);}) : (()=>{ this.flow(7) }) }
            click2={ this.state.active < 7 ? (()=>{ this.flow(3);}) : (()=>{ this.flow(9) }) }
            click3={ this.state.active < 7 ? (()=>{ this.flow(13);} ) : (()=>{ this.flow(11) }) }
            />
        </header>

        <main>
        <BGSectionHome
          isVisible={this.state.bgSection1}
          title="A Day in the Life"
          subtitle="Subtitle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          btnClick={() => {
            this.flow(2);
          }}
          btnText="Get Started"
          />
          <BGSection
           isVisible={this.state.card1}
           content={
             <Card
               isVisible={this.state.card1}
               title="Overview"
               link="Take Quiz"
               linkClick={() => {
                 this.flow(3);
               }}
           />
          }
           />
          <PreQ1
            isVisible={this.state.pq1}
            linkClick={() => {
              this.flow(4);
            }}
            />
          <PreQ2 isVisible={this.state.pq2} linkClick={() => {
            this.flow(5);
          }} />
          <PreQ3 isVisible={this.state.pq3} linkClick={() => {
            this.flow(6);
          }}
          />
          <BGSection
            isVisible={this.state.card2}
            content={
              <Card2
                isVisible={this.state.card2}
                title="Results"
                link="Start Tour"
                linkClick={() => {
                  this.flow(7);
                }}
              />
            }
            />
            <Location
               isVisible={this.state.location1}
               title="Good Morning, Memphis"
               locationName="Gibson's Doughnuts"
               description="Short description of location goes here. Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlabore et dolore magna aliqua. Ut enimad minim veniam, quisnostrudexercitation ullamcolaborisnisi utaliquipex eacommodoconsequat."
               website="https://m.facebook.com/gibsonsdonuts"
               addressLink="https://goo.gl/maps/nhB3c8RCD2fECd5XA"
               phone="(901) 682-8200"
               address1="760 Mt Moriah Rd"
               address3="Memphis, TN 38117"
               link="Trivia Time"
               linkClick={() => {
                 this.flow(8);
               }}
            />
            <Trivia
              isVisible={this.state.trivia1}
              venue="Gibson's Doughnuts"
              question="Trivia question will be asked here?"
              answer1="Possible Answer 1"
              answer2="Possible Answer 2"
              answer3="Possible Answer 3"
              correct="2"
              nextTime="Afternoon"
              next={() => {
                this.flow(9)
              }}
            />
            <Location
               isVisible={this.state.location2}
               title="Afternoon"
               locationName="Location TBD"
               description="Short description of location goes here. Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlabore et dolore magna aliqua. Ut enimad minim veniam, quisnostrudexercitation ullamcolaborisnisi utaliquipex eacommodoconsequat."
               website=""
               addressLink=""
               phone="(123) 456-7890"
               address1="Address 1"
               address3="Memphis, TN 38117"
               link="Trivia Time"
               linkClick={() => {
                 this.flow(10);
               }}
            />
            <Trivia
              isVisible={this.state.trivia2}
              venue="Afternoon Location TBD"
              question="Trivia question will be asked here?"
              answer1="Possible Answer 1"
              answer2="Possible Answer 2"
              answer3="Possible Answer 3"
              correct="1"
              nextTime="Evening"
              next={() => {
                this.flow(11);
              }}
            />
            <Location
               isVisible={this.state.location3}
               title="Evening"
               locationName="Location TBD"
               description="Short description of location goes here. Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlabore et dolore magna aliqua. Ut enimad minim veniam, quisnostrudexercitation ullamcolaborisnisi utaliquipex eacommodoconsequat."
               website=""
               addressLink=""
               phone="(123) 456-7890"
               address1="Address 1"
               address3="Memphis, TN 38117"
               link="Trivia Time"
               linkClick={() => {
                 this.flow(12);
               }}
            />
            <Trivia
              isVisible={this.state.trivia3}
              venue="Evening Location TBD"
              question="Trivia question will be asked here?"
              answer1="Possible Answer 1"
              answer2="Possible Answer 2"
              answer3="Possible Answer 3"
              correct="3"
              nextTime="Conclude Tour"
              next={() => {
                this.flow(13);
              }}
            />
            <BGSection
             isVisible={this.state.conclusion}
             content={
               <>
               <h2>Have a great trip!</h2>
               <div style={{"margin" : "10% 10% 25% 10%"}} className="center-btn">
                 <button className="lg-button" onClick={() => {
                   console.log("Download");
                 }}><FontAwesomeIcon icon="file-download" /> Download Itinerary</button>
               </div>
               <h2 onClick={()=>{
                 this.flow(1);
               }} style={{"textAlign":"center", "cursor":"pointer"}}>Return Home <FontAwesomeIcon icon="angle-double-right" /></h2>
               </>
            }
             />
        </main>
      </>
    );
  }
}

export { Hero };
