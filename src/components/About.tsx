import { Grid } from '@mui/material'
import useStyles from './styles/About.styles';
import aboutMeImage from './images/about-me.jpg'

import React from 'react'

const About = () => {

  const classes = useStyles();


  return (
    <div className={classes.aboutPage}>
      <h1 className={classes.aboutHeader}>What I Do?</h1>
      <Grid container>
        <Grid item xs={12} md={5} sm
          className={classes.aboutMeImage}>
          <img className={classes.aboutImage} src={aboutMeImage} alt="image" />
        </Grid>
        <Grid item xs={12} md={6} sm={6} className={classes.aboutContent}>
          <h3>
            I've worked as a Software Engineer for more than 2+ years. I've demonstrated my abilities several times while working for a product-based start-up.

            In addition to many other things, I have worked on React JS, MUI, interface design, code debugging, front-end development, CSS, SCSS, JavaScript, TypeScript, JSON, HTML, and many more. I have also created React libraries and integrated APIs.
          </h3>

        </Grid>
      </Grid>
    </div>
  )
}

export default About
