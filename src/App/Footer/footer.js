import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React from 'react';
import Grid from "@material-ui/core/Grid";
import './footer.css'
export default function Footer() {
    return (
        <div>
            <Grid
                style={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <a aria-label="@hacksmith"
                       href={"https://www.instagram.com/smithiesincs/"} target="_blank">
                        <InstagramIcon  fontSize={"8vmin"}/>
                    </a>
                    <a aria-label="hacksmith2023@gmail.com"
                       href={"mailto:hacksmith2023@gmail.com"} target="_blank">
                        <MailOutlineIcon fontSize={"8vmin"}/>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}