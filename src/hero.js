import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import HeroIMG from "./images/bg.jpg"
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Countdown from 'react-countdown';



class Hero extends Component{
  constructor(props){
    super(props);

  }
  msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
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
                  background: `-webkit-linear-gradient(rgba(37, 73, 122, 0.8), rgba(230, 203, 73, 0.8)), url(${HeroIMG})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  fontFamily:"'Source Code Pro', monospace",
                  color:"white",
                  padding:"0px",
                  margin:"0px"}}
        >
          <Grid  item xs={12}>
            <p style={{fontSize:"100px", padding:"0px", margin:"0px"}}> HackSmith</p>
            <p style={{fontSize:"75px", padding:"0px", margin:"0px"}}>2021</p>
            <p style={{fontSize:"25px", padding:"10px", margin:"0px",
                      fontFamily:"Arial",
                      paddingRight:"50px",
                      paddingLeft:"50px"}}>
            <p style={{fontSize:"30px"}}>March 26th-27th</p>
            <p style={{fontSize:"18px"}}>
            <Countdown date={Date.parse('26 Mar 2021 00:11:00 EST')} style={{fontSize:"30px"}}/> until hacking begins.
            </p>
            </p>
            <Button href={this.props.link} color="primary" style={{backgroundColor:"#2b2b2b",
                                                                    fontSize:"18px",
                                                                    fontFamily:"Arial",
                                                                    margin:"0px",
                                                                    padding:"10px",
                                                                    textTransform: "none",
                                                                    color:"white",
                                                                    }}>Register Now</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default Hero;
