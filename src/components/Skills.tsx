import React from 'react'
import { Grid, IconButton, Tooltip, Typography } from '@mui/material'
import aboutMeImage from './images/about-me.jpg'
import useStyles from './styles/Skills.styles'
import { Link } from 'react-router-dom'
import HTML5 from './images/HTML5.png'
import CSS3 from './images/CSS3.png'
import SASS from './images/SASS.png'
import JavaScript from './images/JS.png'
import TypeScript from './images/TS.png'
import GitHub from './images/GITHUB.png'
import MONGODB from './images/MONGODB.png'
import NODEJS from './images/NODEJS.png'
import REACT from './images/REACT.png'
import FIREBASE from './images/FIREBASE.png'
import BOOTSTRAP from './images/BOOTSTRAP.png'
import AZURE from './images/AZURE.png'
import AWS from './images/AWS.png'
import NPM from './images/NPM.png'
import FullStack from './images/FullStack.webp'
import Cloud from './images/CloudDeveloper.png'

const Skills = () => {

  const classes = useStyles()

  const skillsContent = [
    {
      designation: "Full Stack Development",
      responsibilites: [
        'Building responsive website front end using React-TypeScript',
        'UI/UX Responsiveness',
        ' Creating application backend in Node & Express'
      ],
      img: FullStack,
      iconButtons: [
        {
          title: "HTML5",
          icon: HTML5
        },
        {
          title: "CSS3",
          icon: CSS3
        },
        {
          title: "SASS",
          icon: SASS
        },
        {
          title: "JavaScript",
          icon: JavaScript
        },
        {
          title: "TypeScript",
          icon: TypeScript
        },
        {
          title: "REACTJS",
          icon: REACT
        },
        {
          title: "BOOTSTRAP",
          icon: BOOTSTRAP
        },
        {
          title: "NODEJS",
          icon: NODEJS
        },
        {
          title: "NPM",
          icon: NPM
        },
      ]
    },
    {
      designation: "Cloud Infra-Architecture",
      responsibilites: [
        'Experience working on multiple cloud platforms',
        'Deploying backend server code on cloud to fetch APIs',
        'Hosting and maintaining websites on cloud platforms instances along with integration of databases'
      ],
      img: Cloud,
      iconButtons: [
        {
          title: "AZURE",
          icon: AZURE
        },
        {
          title: "FIREBASE",
          icon: FIREBASE
        },
        {
          title: "AWS",
          icon: AWS
        },
        {
          title: "GitHub",
          icon: GitHub
        },
        {
          title: "MONGODB",
          icon: MONGODB
        },
        {
          title: "RENDER",
          icon: "RENDER"
        },
        {
          title: "VERCEL",
          icon: "VERCEL"
        }
      ]
    }
  ]
  return (
    <div>
      <h1 className={classes.skillsTitle}>Skills</h1>
      {/* <h3>ReactJS TypeScript JavaScript HTML5 CSS3 SCSS BootStrap FrontEnd Development Render Vercel GitHub Azure Firebase MongoDB ExpressJS NodeJS NPM AWS</h3> */}
      {
        skillsContent.map((skills: any, index: number) => (
          <Grid container className={classes.skillsContainer}>
            <Grid item xs={12} md={6} sm
              className={classes.skillsImage}>
              <img
                className={classes.skillsContentImage}
                src={skills?.img} alt="image" />
            </Grid>
            <Grid item xs={12} md={6} sm={6} className={classes.skillsContentStyling}>
              <div>
                <h3>{skills?.designation}</h3>
                <div>
                  {
                    skills?.iconButtons.map((button: any, iconIndex: number) => (
                      <Tooltip title={button?.title}>
                        <img src={button?.icon} alt="" />
                      </Tooltip>
                    ))
                  }
                </div>
                {
                  skills?.responsibilites.map((responsibility: any, respoIndex: number) => (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      <div>
                        <ul>
                          <h3>
                            <li>{responsibility} </li>
                          </h3>
                        </ul>
                      </div>
                    </Typography>
                  ))
                }
              </div>
            </Grid>
          </Grid>
        ))
      }
    </div>
  )
}

export default Skills
