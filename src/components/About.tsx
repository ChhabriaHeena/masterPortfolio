import { Grid } from '@mui/material'
import useStyles from './styles/Banner.styles';
import aboutMeImage from './images/about-me.jpg'

import React from 'react'

const About = () => {

  const classes = useStyles();


  return (
    <div>
      <h1>What I Do?</h1>
      <Grid container>
        <Grid item xs={6} md={6} sm>
          <img  src={aboutMeImage} alt="image" />
        </Grid>
        <Grid item xs={12} md={6} sm={6}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolore eius. Dolorum ad ea eius tempora modi perspiciatis obcaecati corporis?</Grid>
      </Grid>
    </div>
  )
}

export default About
