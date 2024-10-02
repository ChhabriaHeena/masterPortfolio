import { Button, Grid } from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import StarIcon from '@mui/icons-material/Star';

const Contact = () => {

    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6} sm={6}>
                    Contact Me
                </Grid>
                <Grid item xs={12} md={6} sm>
                    <div
                    // className={classes.bannerContent}
                    >
                        <h3>
                            I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.
                        </h3>
                        <div>
                            <GitHubIcon />
                            <LinkedInIcon />
                            <GoogleIcon />
                            <InstagramIcon />
                            <FacebookIcon />
                        </div>
                        <div>
                            <Button variant="contained">See my Resume</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )

}

export default Contact;