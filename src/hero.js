import './App.css';
import Grid from '@material-ui/core/Grid';
import HeroIMG from "./images/bg.jpg"
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Countdown from 'react-countdown';
import TypeWriterEffect from 'react-typewriter-effect';




class Hero extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{minHeight: '100vh',
                  textAlign: "center",
                  background:"#C33764",
                  background: `linear-gradient(rgba(37, 73, 122, 0.8), rgba(230, 203, 73, 0.8)), url(${HeroIMG})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  fontFamily:"'Source Code Pro', monospace",
                  color:"white",
                  padding:"0px",
                  margin:"0px"}}
        >
          <Grid  item xs={12}>
            <TypeWriterEffect
              textStyle={{ fontFamily:"'Source Code Pro', monospace", fontSize:"100px", padding:"0px", margin:"0px"}}
              startDelay={100}
              cursorColor="black"
              text="HackSmith"
              typeSpeed={100}
              hideCursorAfterText={true}
            >

            </TypeWriterEffect>
            <p style={{fontSize:"75px", padding:"0px", margin:"0px"}}>2023</p>
            <p style={{fontSize:"25px", padding:"10px", margin:"0px",
                      fontFamily:"Arial",
                      paddingRight:"50px",
                      paddingLeft:"50px"}}>
            <p style={{fontSize:"30px"}}>November 17-18th</p>
            <p style={{fontSize:"18px"}}>
            <Countdown date={Date.parse('17 Nov 2023 11:00:00 EST')} style={{fontSize:"30px"}}/> until hacking begins.
            </p>
            </p>
            <Button href="#" color="primary" style={{backgroundColor:"#2b2b2b",
                                                                    fontSize:"18px",
                                                                    fontFamily:"Arial",
                                                                    margin:"0px",
                                                                    padding:"10px",
                                                                    textTransform: "none",
                                                                    color:"white",
                                                                    borderRadius:"50px",
                                                                    paddingLeft:"50px",
                                                                    paddingRight:"50px",
                                                                  }}>Registration is Open</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default Hero;
