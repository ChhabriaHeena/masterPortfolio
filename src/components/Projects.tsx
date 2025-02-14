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
import { Link } from 'react-router-dom'

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
                      image={project?.image} alt={project?.alt} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">{project?.cardTitle}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{project?.cardParagraph}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <ol>Technologies Used Are:
                          {
                            project?.cardTech.map((tech: any, techIndex: number) => (
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
                            }} to={button?.to}>
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
          <div className='item'>
            <Card>
              <CardMedia component='img'
                height='250'
                image={Aafiya} alt='Aafiya' />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">Aafiya Mediretreats</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Aafiya Mediretreats is a website related to treatements like Orthopaedics , Knee Replacement, Hospitals, Health care.</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <ol>Technologies Used Are:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Owl Carousel</li>
                  </ol>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>I have tried my excellence to make the website as responsive as possible</Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://chhabriaheena.github.io/Aafiya-Mediretreats/">
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://github.com/ChhabriaHeena/Aafiya-Mediretreats">
                    <GitHubIcon />
                  </Link>
                </IconButton>
              </CardActions>
            </Card>
          </div>
          <div className='item'>
            <Card>
              <CardMedia component='img'
                height='250'
                image={Aafiya} alt='Aafiya' />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">Aafiya Mediretreats</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Aafiya Mediretreats is a website related to treatements like Orthopaedics , Knee Replacement, Hospitals, Health care.</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <ol>Technologies Used Are:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Owl Carousel</li>
                  </ol>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>I have tried my excellence to make the website as responsive as possible</Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://chhabriaheena.github.io/Aafiya-Mediretreats/">
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://github.com/ChhabriaHeena/Aafiya-Mediretreats">
                    <GitHubIcon />
                  </Link>
                </IconButton>
              </CardActions>
            </Card>
          </div>
          <div className='item'>
            <Card>
              <CardMedia component='img'
                height='250'
                image={Aafiya} alt='Aafiya' />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">Aafiya Mediretreats</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Aafiya Mediretreats is a website related to treatements like Orthopaedics , Knee Replacement, Hospitals, Health care.</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <ol>Technologies Used Are:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Owl Carousel</li>
                  </ol>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>I have tried my excellence to make the website as responsive as possible</Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://chhabriaheena.github.io/Aafiya-Mediretreats/">
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://github.com/ChhabriaHeena/Aafiya-Mediretreats">
                    <GitHubIcon />
                  </Link>
                </IconButton>
              </CardActions>
            </Card>
          </div>
          <div className='item'>
            <Card>
              <CardMedia component='img'
                height='250'
                image={Aafiya} alt='Aafiya' />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">Aafiya Mediretreats</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Aafiya Mediretreats is a website related to treatements like Orthopaedics , Knee Replacement, Hospitals, Health care.</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <ol>Technologies Used Are:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Owl Carousel</li>
                  </ol>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>I have tried my excellence to make the website as responsive as possible</Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://chhabriaheena.github.io/Aafiya-Mediretreats/">
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://github.com/ChhabriaHeena/Aafiya-Mediretreats">
                    <GitHubIcon />
                  </Link>
                </IconButton>
              </CardActions>
            </Card>
          </div>
          <div className='item'>
            <Card>
              <CardMedia component='img'
                height='250'
                image={Aafiya} alt='Aafiya' />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">Aafiya Mediretreats</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Aafiya Mediretreats is a website related to treatements like Orthopaedics , Knee Replacement, Hospitals, Health care.</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <ol>Technologies Used Are:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Owl Carousel</li>
                  </ol>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>I have tried my excellence to make the website as responsive as possible</Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://chhabriaheena.github.io/Aafiya-Mediretreats/">
                    <VisibilityOutlinedIcon />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link style={{ color: "grey" }} to="https://github.com/ChhabriaHeena/Aafiya-Mediretreats">
                    <GitHubIcon />
                  </Link>
                </IconButton>
              </CardActions>
            </Card>
          </div>

        </OwlCarousel>
      </div>
    </div>
  )
}

export default Projects
