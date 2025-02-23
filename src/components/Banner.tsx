import React from 'react'
import useStyles from './styles/Banner.styles';
import { Button, Grid, IconButton } from '@mui/material';
import bannerImage from './images/Heena_Chhabria.webp'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import StarIcon from '@mui/icons-material/Star';
import GitHub from './images/GITHUB.png'
import LinkedIn from './images/Linkedin.png'
import Instagram from './images/Instagram.png'
import Facebook from './images/Facebook.png'
import { Link } from 'react-router-dom';

const Banner = () => {

  const classes = useStyles();

  return (
    <section className={classes.banner}>

      <div>
        <Grid container>
          <Grid item xs={12} md={6} sm={6}>
            <div className={classes.bannerContent}>

              {/* <h1>Heena Chhabria</h1> */}
              <h2>Software Engineer</h2>
              <h3>A self-motivated individual with 2+ years of experience in Frontend Development and a great understanding of
                programming languages who is looking for a new opportunity.
                A position in a growth-oriented company where I can put my abilities to effective use. While having the benefit of the
                company this would be the opportunity to expand my knowledge and abilities
              </h3>
              <div>

                <Link to='https://github.com/ChhabriaHeena' target="_blank">
                  <img src={GitHub} alt="" />
                </Link>
                <Link to='https://www.linkedin.com/in/heena-chhabria/' target="_blank">
                  <img src={LinkedIn} alt="" />
                </Link>
                <Link to='https://www.instagram.com/towardshine/' target="_blank">
                  <img src={Instagram} alt="" />
                </Link>
                {/* <Link style={{
                    color: "grey"
                  }} to='https://github.com/ChhabriaHeena' target="_blank">
                    <img src={Facebook} alt="" />
                  </Link> */}
                {/* HackerRank
                CodeChef */}
              </div>
              <div>
                <Button variant="contained" startIcon={<StarIcon />}>
                  <Link style={{ color: '#fff', textDecoration: "none" }} to='https://github.com/ChhabriaHeena/masterPortfolio' target="_blank">
                    Star me on Github
                  </Link>
                </Button>
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
