import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hero from "./hero.js"
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Accordian from "./ControlledAccordian.js"
import Tracks from "./tracks.js";
import {Helmet} from "react-helmet";


function App(){
    return (
      <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>HackSmith</title>
      </Helmet>

        <Hero link="https://forms.gle/4c4Ywqn6oGmhfHm46" class="heroImg" />
        <div class="mainArea">
          <Grid container spacing={1}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <h1>What is HackSmith?</h1>
              <p>HackSmith is a virtual 24 hour Smith College hackathon run by Smithies in CS and the Statistical and Data Sciences Coalition of Color. Our corporate sponsors include Google, MassMutual, and Audible and our on-campus supporters
              include the Computer and Data science departments and the Conway Center for Innovation. HackSmith is an opportunity to try out new challenges, attend workshops, and meet new people. We aim to foster a space for interdisciplinary creativity.
              <h1>Our Sponsors</h1>
              HackSmith wouldn't be possible without the generosity of Audible, the Conway Center for Innovation, The Design Thinking Initiative, Google, and MassMutual.
              <h2>Design Thinking Initiative support</h2>

              <h1>Tracks</h1>
                <Tracks />
              <h1>Schedule</h1>
                TBD
              <h1>FAQ</h1>
              <br />
              <Accordian />

              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default App;
