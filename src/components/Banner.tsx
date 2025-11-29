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
              <h3>ReactJS Developer with 3 Years of
                Professional Experience, including 6
                Months of Internship as an MCA Grad
                Student in building scalable SaaS and
                MERN stack applications, improving
                UI/UX, and integrating APIs. Executed 7+
                web applications using ReactJS and
                TypeScript. Built a MERN-based personal
                portfolio with a dashboard panel to add,
                update, delete, and display projects
                dynamically through API calls. Refactored
                50+ components to improve
                responsiveness and created reusable UI
                elements, reducing development time by
                40%.
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
