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
    },
    // {
    //   designation: "Full Stack Developer",
    //   responsibilites: [
    //     'Website Designing',
    //     'UI/UX Responsiveness',
    //     'Proficiency in ReactJS, Javascript, HTML, CSS, JSX, Node JS'
    //   ]
    // },
    // {
    //   designation: "Software Engineer",
    //   responsibilites: [
    //     'The core expertise centers on SAAS product development with a specialization in constructing and improving logistics management systems. This includes the creation and customization of React libraries to meet specific requirements',
    //     'A focus is placed on elevating UI functionalities and advancing UI development. Proficiency extends to TypeScript, MongoDB, ReactJS, Redux, and adept code debugging, ensuring a comprehensive skill set to deliver robust solutions'
    //   ]
    // },
    // {
    //   designation: "ReactJS Developer",
    //   responsibilites: [
    //     'Projects based on ReactJS',
    //     'Worked on APIs',
    //     'Created 20+ projects on my own while training',
    //     'In-depth knowledge of React JS, SCSS as well',
    //     'Basic Knowledge of Node JS, Express JS'
    //   ]
    // },
    // {
    //   designation: "WordPress Developer",
    //   responsibilites: [
    //     'LMS (Learning Management System)',
    //     'CRM Handling',
    //     'front-end development on Prizalo website',
    //     'Improved and Maintained the existing websites'
    //   ]
    // }
  ]
  return (
    <div>
      <h1 className={classes.skillsTitle}>Skills (work experience) </h1>
      <h3>ReactJS TypeScript JavaScript HTML5 CSS3 SCSS BootStrap FrontEnd Development Render Vercel GitHub Azure Firebase MongoDB ExpressJS NodeJS NPM AWS</h3>
      {
        skillsContent.map((skills: any, index: number) => (
          <Grid container>
            <Grid item xs={12} md={5} sm
              className={classes.skillsImage}>
              <img
                className={classes.skillsContentImage}
                src={skills?.img} alt="image" />
            </Grid>
            <Grid item xs={12} md={6} sm={6} className={classes.skillsContentStyling}>
              <div>
                <h3>{skills?.designation}</h3>
                {/* <h4>Responsibilites</h4> */}
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
                      <div
                      // style={{ height: "23vh" }}
                      >
                        <ul 
                        // className={classes.ulStyle}
                        >
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
