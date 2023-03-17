import './App.css';
import Grid from '@material-ui/core/Grid';
import Header from "./Header/header.js"
import Accordion from "./FAQ/faqAccordeon.js"
import Link from "@material-ui/core/Link";
import {Helmet} from "react-helmet";
import * as React from 'react';
import NavBar from "./NavBar/navbar";
export default App;

function App() {

    return (

        <div style={{display: "block"}} className={"gradient"}>

            <Helmet>
                <meta charSet="utf-8"/>
                <title>HackSmith</title>
            </Helmet>

            {/*<img>{unic}</img>*/}
            {/*old registration link*/}
            <NavBar></NavBar>
            <Header class="heroImg"/>

            <div >
                    {/*trash to figure out how to do this*/}
                {/*<FormGroup>*/}
                {/*    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />*/}
                {/*    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />*/}
                {/*</FormGroup>*/}

                <Grid container spacing={1}>
                    {/*centers the content -- total 12, one in front, one behind*/}
                    <Grid item xs={1}></Grid>

                    <Grid item xs={10}>
                        <h1 className={"sectionHeader"}>What is SmithHacks?</h1>
                        <p>SmithHacks is a virtual 24 hour Smith College hackathon run by Smithies in CS, Smithies in
                            SDS, and the SDS Coalition of Color. SmithHacks is an opportunity to try out new challenges,
                            attend workshops, and meet new people. We aim to foster a space for interdisciplinary
                            creativity.
                            We've had an unprecedented amount of interest this year and are no longer able to accept new
                            participants.
                            <h1>Our Sponsors</h1>
                            SmithHacks wouldn't be possible without the generosity of Audible, the Conway Center for
                            Innovation, The Design Thinking Initiative, and MassMutual.
                            <h1>Design Thinking Initiative Support</h1>
                            If you're interested in checking out physical materials (including Arduino Kits) from the
                            Design Thinking Initiative, please sign up to do so <Link
                                href="https://www.librarycat.org/lib/designthinking"
                                style={{color: "#e6cb49"}}>here!</Link> There will be a physical drop-off point for
                            those who are interested.

                            {/*<h1>Results</h1>*/}
                            {/*  <Results />*/}
                            {/*<h1>Tracks</h1>*/}
                            {/*  <Tracks />*/}
                            {/*<h1>Schedule</h1>*/}
                            {/*  <img src="https://i.redd.it/zkgrqhutvdp61.png" alt="SmithHacks 2023 Schedule" width="600"/>*/}
                            {/*<h1>FAQ</h1>*/}
                            <br/>
                            <br/>
                            <br/>

                            {/*FAQ*/}
                            <Accordion/>
                        </p>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        </div>
    );
}

