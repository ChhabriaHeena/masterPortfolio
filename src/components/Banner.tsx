import React from 'react'
import useStyles from './styles/Banner.styles';
import { Button, Grid } from '@mui/material';
import bannerImage from './images/Heena_Chhabria.webp'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import StarIcon from '@mui/icons-material/Star';

const Banner = () => {

  const classes = useStyles();

  return (
    <section className={classes.banner}>

      <div className={classes.bannerMain}>
        <Grid container className={classes.bannerGridContainer}>
          <Grid item xs={12} md={6} sm={6} className={classes.bannerGridItemContent}>
            <div className={classes.bannerContent}>

              <h1>Heena Chhabria</h1>
              <h2>Software Engineer</h2>
              <h3>A self-motivated individual with 2+ years of experience in Frontend Development and a great understanding of
                programming languages who is looking for a new opportunity.
                A position in a growth-oriented company where I can put my abilities to effective use. While having the benefit of the
                company this would be the opportunity to expand my knowledge and abilities
              </h3>
              <div>
                <GitHubIcon/>
                <LinkedInIcon/>
                <GoogleIcon/>
                <InstagramIcon/>
                <FacebookIcon/>
                HackerRank
                CodeChef
              </div>
              <div>
                <Button variant="contained" startIcon={<StarIcon />}>Star me on Github</Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm>
            <img className={classes.bannerImage} src={bannerImage} alt="image" />
          </Grid>
        </Grid>

      </div>
    </section>
  )
}

export default Banner
