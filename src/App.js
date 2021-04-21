import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hero from "./hero.js"
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Accordian from "./ControlledAccordian.js"
import Tracks from "./tracks.js";
import Results from "./results.js"
import Link from "@material-ui/core/Link";
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
              <p>HackSmith is a virtual 24 hour Smith College hackathon run by Smithies in CS, Smithies in SDS, and the SDS Coalition of Color. HackSmith is an opportunity to try out new challenges, attend workshops, and meet new people. We aim to foster a space for interdisciplinary creativity.
              We've had an unprecedented amount of interest this year and are no longer able to accept new participants.
              <h1>Our Sponsors</h1>
              HackSmith wouldn't be possible without the generosity of Audible, the Conway Center for Innovation, The Design Thinking Initiative, and MassMutual.
              <h2>Design Thinking Initiative Support</h2>
              If you're interested in checking out physical materials (including Arduino Kits) from the Design Thinking Initiative, please sign up to do so <Link href="https://www.librarycat.org/lib/designthinking" style={{color:"#e6cb49"}}>here!</Link> There will be a physical drop-off point for those who are interested.

              <h1>Results</h1>
                <Results />
              <h1>Tracks</h1>
                <Tracks />
              <h1>Schedule</h1>
                <img src="https://i.redd.it/zkgrqhutvdp61.png" alt="HackSmith 2021 Schedule" width="600"/>
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
