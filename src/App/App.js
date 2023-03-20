import './App.css';
import Grid from '@material-ui/core/Grid';
import Header from "./Header/header.js"
import {Helmet} from "react-helmet";
import * as React from 'react';
import campusCenter from "../images/cc.jpg";
// import {Skeleton} from "@mui/material";
import Footer from "./Footer/footer"
export default App;

// const imgHolders = () => {
//     const imgs = [];
//
//     for (let i = 1; i <= 12; i++) {
//         imgs.push(
//             <div className="img-holders">
//                 <Grid item xs={6} sm={6} md={3} lg={3}>
//                     <Skeleton
//                         sx={{ bgcolor: 'yellow.900' }}
//                         variant="rectangular"
//                         width={210}
//                         height={118}
//                     />
//                 </Grid>
//             </div>
//         );
//     }
//     return (imgs);
// };

function App() {

    return (

        <div style={{display: "block"}} className={"gradient"}>

            <Helmet>
                <meta charSet="utf-8"/>
                <title>HackSmith</title>
            </Helmet>

            {/*<NavBar/>*/}
            <Header/>

            <Grid
                container spacing={0}
                alignItems={"center"}>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <div className={"section"}>
                        <h1>About</h1>
                        <p>
                            <b>Where: Campus Center, Smith College</b><br/><br/>

                            <b>When: 18-19 November 2023</b><br/><br/>

                            HackSmith is a Smith College hackathon run by Smithies in CS.
                            SmithHacks is an opportunity to try out new challenges, attend workshops, and meet new
                            people.
                            We aim to foster a space for interdisciplinary creativity.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <img className={"section-img"} src={campusCenter} alt="Smith College Campus Center photo"/>
                </Grid>
            </Grid>

           <Footer/>

            {/*<div className={"section"}>*/}
            {/*    <h1 align={"center"}>Our Sponsors</h1>*/}
            {/*    <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus dolorem*/}
            {/*        est id in molestiae nobis possimus quaerat qui quis similique totam, ut. Est non ratione*/}
            {/*        repudiandae tempore voluptatem.*/}
            {/*        SmithHacks wouldn't be possible without the generosity of ....*/}
            {/*    </p>*/}
            {/*    <Grid*/}
            {/*        container spacing={0}*/}
            {/*        justifyContent={"center"}>*/}
            {/*        {imgHolders()}*/}
            {/*    </Grid>*/}
            {/*/!*</div>*!/*/}

            {/*<Grid*/}
            {/*    container spacing={0}*/}
            {/*    justifyContent={"center"}>*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <div className={"section"}>*/}

            {/*            <h1>Design Thinking Initiative Support</h1>*/}
            {/*            <p>*/}
            {/*                If you're interested in checking out physical materials (including Arduino Kits) from the*/}
            {/*                Design Thinking Initiative, please sign up to do so <Link*/}
            {/*                href="https://www.librarycat.org/lib/designthinking"*/}
            {/*                style={{color: "#e6cb49"}}>here!</Link> There will be a physical drop-off point for*/}
            {/*                those who are interested.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}

            {/*<Grid*/}
            {/*    container spacing={0}*/}
            {/*    justifyContent={"center"}>*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <div className={"section"}>*/}

            {/*            <h1>Schedule</h1>*/}
            {/*            <BasicTable/>*/}
            {/*        </div>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
            {/*</div>*/}

            {/*<h1>Results</h1>*/}
            {/*  <Results />*/}
            {/*<h1>Tracks</h1>*/}
            {/*  <Tracks />*/}
            {/*<h1>Schedule</h1>*/}
            {/*  <img src="https://i.redd.it/zkgrqhutvdp61.png" alt="SmithHacks 2023 Schedule" width="600"/>*/}
            {/*<h1>FAQ</h1>*/}
            {/*FAQ*/}
            {/*<Accordion/>*/}
            {/*<BasicSpeedDial/>*/}
        </div>
    );
}

