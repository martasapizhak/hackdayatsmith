import React, {Component} from 'react';
import './header.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TypeWriterEffect from 'react-typewriter-effect';
import Countdown from 'react-countdown';
import unicornMascot from "../../images/unicorn.png";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"main"}>
                <Grid
                    container spacing={0}
                    alignItems={"center"}>

                    <Grid item xs={12} sm={12} md={6} lg={8}>
                        <div className={"title"}>
                            <div className={"name"}>
                                <TypeWriterEffect
                                    startDelay={200}
                                    cursorColor="yellow"
                                    text="HackSmith"
                                    typeSpeed={100}
                                    hideCursorAfterText={true}
                                >
                                    <div className={"name"}></div>
                                </TypeWriterEffect>
                            </div>

                            <p align={"left"} className={"year"}>2023</p>
                        </div>

                        <p align={"left"}
                           className={"date"}>
                            November 18-19
                        </p>
                    </Grid>

                    <Grid item xs={12} sm={12} md={8} lg={4}>
                        <div className={"mascot"}>
                            <img alt={"Neon unicorn mascot"} src={unicornMascot}/>
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button href="#">
                            <div className={"button"}> Register</div>
                        </Button>

                        <p className={"date countdown"}>
                            Begins in <Countdown date={Date.parse('18 Nov 2023 11:00 EST')}/>
                        </p>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default Header;
