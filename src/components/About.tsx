import { Grid } from '@mui/material'
import useStyles from './styles/About.styles';
import aboutMeImage from './images/about-me.jpg'

import React from 'react'

const About = () => {

  const classes = useStyles();


  return (
    <div>
      <h1>What I Do?</h1>
      <Grid container>
        <Grid item xs={6} md={5} sm 
        className={classes.aboutMeImage}>
          <img src={aboutMeImage} alt="image" />
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <h3>
           A self-motivated individual with 2+ years of experience in Frontend Development and a great understanding of programming languages who is looking for a new opportunity. A position in a growth-oriented company where I can put my abilities to effective use. While having the benefit of the company this would be the opportunity to expand my knowledge and abilities
          </h3>

        </Grid>
      </Grid>
    </div>
  )
}

export default About
