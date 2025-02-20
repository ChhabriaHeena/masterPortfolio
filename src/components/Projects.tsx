import React from 'react'
import useStyles from './styles/Projects.styles'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Aafiya from './images/Aafiya-Mediretreats.png'
import Netflix from './images/Netflix-Clone.png'
import ColorChanger from './images/ColorChanger.png'
import KeeperApp from './images/Keeper-App.png'
import CrudApp from './images/Crud-App.png'
import ListofGithubUsers from './images/List-of-Github-Users.png'
import AnimateWebPage from './images/Animate-Web-Page.png'
import Calculator from './images/calculator.png'
import DrumKit from './images/Drum-Kit.png'
import CSSJS from './images/CSS-JS.png'
import { Link } from 'react-router-dom'
// import projectContent from './projectContent.json'

const Projects = () => {

  const classes = useStyles();

  const responsiveOptions = {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }

  const projectContent = [
    {
      image: Netflix,
      alt: "Netflix",
      cardTitle: "Netflix Clone",
      cardParagraph: "This is the React web app which is the clone of original Netflix application.",
      cardTech: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://chhabriaheena.github.io/netflix-clone/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/netflix-clone"
        }
      ]
    },
    {
      image: Calculator,
      alt: "Calculator",
      cardTitle: "Calculator",
      cardParagraph: "A React Web Application. Calculator. A web application used for calculations.",
      cardTech: ['HTML', 'CSS', 'JavaScript', 'React'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://chhabriaheena.github.io/calculator/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/calculator"
        }
      ]
    },
    {
      image: Aafiya,
      alt: "Aafiya",
      cardTitle: "Aafiya Mediretreats",
      cardParagraph: "Aafiya Mediretreats is a website related to treatements like Orthopaedics , Knee Replacement, Hospitals, Health care.",
      cardTech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Owl Carousel'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://chhabriaheena.github.io/Aafiya-Mediretreats/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/Aafiya-Mediretreats"
        }
      ]
    },
    {
      image: KeeperApp,
      alt: "Keeper App",
      cardTitle: "Keeper App",
      cardParagraph: "Keeper App is a React web application. More like To-Do List app where we can Add & Delete Notes as per our choices.",
      cardTech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://chhabriaheena.github.io/Keeper-App/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/Keeper-App"
        }
      ]
    },
    {
      image: CrudApp,
      alt: "CRUD APP",
      cardTitle: "CRUD APP",
      cardParagraph: "CRUD App is a React web application. App where we can Add, Update & Remove User to our Team as per our choices.",
      cardTech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://crud-bbdd8.web.app/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/CRUD_APPLICATION"
        }
      ]
    },
    {
      image: ListofGithubUsers,
      alt: "List of GitHub Users",
      cardTitle: "List of GitHub Users",
      cardParagraph: "List of GitHub Users App is a React web application. App name itself defines the List of Random People on GitHub.",
      cardTech: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://chhabriaheena.github.io/Random_Github_Users/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/Random_Github_Users"
        }
      ]
    },
    {
      image: AnimateWebPage,
      alt: "Animate Web Page",
      cardTitle: "Animate Web Page",
      cardParagraph: "A Project completely built on HTML & CSS. I have tried doing some Animation work here. Below is the link to view.",
      cardTech: ['HTML', 'CSS'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://chhabriaheena.github.io/Animate_Web_Page/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/Animate_Web_Page"
        }
      ]
    },
    {
      image: DrumKit,
      alt: "JS Drum Kit",
      cardTitle: "JS Drum Kit",
      cardParagraph: "A Web Application. Which has different sounds. By pressing the buttons from Keyboard we can hear the sound.",
      cardTech: ['HTML', 'CSS', 'JavaScript'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://chhabriaheena.github.io/Javascript_Drum_Kit/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/Javascript_Drum_Kit"
        }
      ]
    },
    {
      image: CSSJS,
      alt: "CSS Variable with JS",
      cardTitle: "CSS Variable with JS",
      cardParagraph: "A Website which has different variables. By changing the fields from UI the CSS properties will be changed.",
      cardTech: ['HTML', 'CSS', 'JavaScript'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://chhabriaheena.github.io/CSS_Variable_with_JavaScript/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/CSS_Variable_with_JavaScript"
        }
      ]
    },
    {
      image: ColorChanger,
      alt: "Color Changer",
      cardTitle: "Color Changer",
      cardParagraph: "Color Changer is a React Web app which changes the color as per your request. Also it has Light and Dark mode.",
      cardTech: ['HTML', 'CSS', 'JavaScript', 'React'],
      cardEnding: "I have tried my excellence to make the website as responsive as possible",
      iconButtons: [
        {
          view: "Website",
          icon: <VisibilityOutlinedIcon />,
          to: "https://chhabriaheena.github.io/Color-Changer/"
        },
        {
          view: "GitHub",
          icon: <GitHubIcon />,
          to: "https://github.com/ChhabriaHeena/Color-Changer"
        }
      ]
    }
  ]

  return (
    <div>
      <h1 className={classes.projectContent}>Projects</h1>
      <div className={classes.owlTheme}>
        <OwlCarousel className='owl-theme' items={3}
          lazyLoad={true} loop={true} autoplay={true} responsive={responsiveOptions}
          margin={10}>

          {
            projectContent.map((project: any, index: number) => (
              <div className='item'>
                <div>
                  <Card>
                    <CardMedia component='img'
                      height='250'
                      image={project?.image} alt={project?.alt} className={classes.mediaStyle}/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">{project?.cardTitle}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{project?.cardParagraph}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{height:"23vh"}}>
                        <ol>Technologies Used Are:
                          {
                            project && project?.cardTech && project?.cardTech.map((tech: any, techIndex: number) => (
                              <li>{tech}</li>

                            ))}
                        </ol>
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{project?.cardEnding}</Typography>
                    </CardContent>
                    <CardActions>
                      {
                        project?.iconButtons.map((button: any, iconIndex: number) => (
                          <IconButton>
                            <Link style={{
                              color: "grey"
                            }} to={button?.to} target="_blank">
                              {button?.icon}
                            </Link>
                          </IconButton>
                        ))
                      }
                    </CardActions>
                  </Card>

                </div>
              </div>
            ))
          }
        </OwlCarousel>
      </div>
    </div>
  )
}

export default Projects
