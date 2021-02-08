import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hero from "./hero.js"
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Accordian from "./ControlledAccordian.js"


class App extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div>
        <Hero link="https://www.google.com/" class="heroImg" />
        <div class="mainArea">
          <Grid container spacing={1}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <h1>Who Are We?</h1>
              <p>HackSmith is a Smith College hackathon run by Smithies in CS and the Statistical and Data Sciences Coalition of Color. Our corporate sponsors include Google, MassMutual, and Audible and our on-campus supporters
              include the Computer and Data science departments and the Conway Center for Innovation.
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
}

export default App;
