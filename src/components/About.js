import React, { Component } from "react";
import "../css/main.css";
import Footer from './Footer';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container about-page">
          <div className="about">
            <h1>About Write on Me</h1>
            <div className="mission">
              <h2>Mission</h2>
              <p>
                Write on Me: Online Counselling for People Experiencing
                Depression is for anyone who seek to give a safe haven wherein
                they can be free from the judgemental and stone hearted people.
                It is a place for love, comfort and understanding wherein they
                can find people with the same battle they are fighting. A world
                where they can write their sorrows away.
              </p>
              <p>
                Here we believe that each person is valuable and their voices
                needed to be heard no matter what they are and who they are. We
                offere here a medium for them to give care and support with each
                other.
              </p>
              <p>
                We all have battles that we are facing. Some of us just needed a
                little push to go on and be motivated to not give up and that
                there is still light at the end of the tunnel. And we at Write
                on Me, will serve as the light at the dark.
              </p>
              <p>
                Here we don't tolerate people being rude, mean and harmful to
                the other. We do not tolerate such attitudes because here, we
                share love and understanding to each and every one who feels
                like they are alone.
              </p>
            </div>
            <div className="vision">
              <h2>Vision</h2>
              <p>
                We aim to create a world where people who are experiencing
                depression can feel comfortable to open up and make them feel
                that they are not alone in their battle they are facing. A world
                where they can find support on other people who are on the same
                boat as theirs.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
