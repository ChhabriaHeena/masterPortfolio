import React, { useEffect, useState } from 'react'
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

  const [projectData, setProjectData] = useState<any>();
  const [projects, setProjects] = useState<any>();
  const [flag, setFlag] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);

  const postData = () => {
    setLoading(true)
    fetch("https://portfolio-backend-tclu.onrender.com/projectdata", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res: any) => res.json())
      .then((data: any) => {
        setProjectData(data)
        setLoading(false)
        setFlag(true)
      })
      .catch((error: any) => console.error(error))
  }

  useEffect(() => {
    postData()
  }, [])


  useEffect(() => {
    if (flag) {
      setProjects(projectData)
    }

  }, [flag])

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

  return (
    <div>
      <h1 className={classes.projectContent}>Projects</h1>
      {
        loading ? <h2>Loading...</h2>
          :
          <div className={classes.owlTheme}>
            <OwlCarousel className='owl-theme' items={3}
              lazyLoad={true} loop={true} autoplay={true} responsive={responsiveOptions}
              margin={10}>
              {

                flag && projectData && projectData?.map((project: any, index: number) => (
                  <div className='item'>
                    <div>
                      <Card>
                        <CardMedia component='img'
                          height='250'
                          image={project?.image} alt={project?.alt} className={classes.mediaStyle} />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">{project?.title}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{project?.paragraph}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <div style={{ height: "23vh" }}>

                              <ol>Technologies Used Are:
                                {
                                  project && project?.tech && project?.tech.map((tech: any, techIndex: number) => (
                                    <li>{tech}</li>

                                  ))}
                              </ol>
                            </div>
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{project?.paragraph2}</Typography>
                        </CardContent>
                        <CardActions>
                          {
                            <>
                              <IconButton>
                                <Link style={{
                                  color: "grey"
                                }} to={project?.link} target="_blank">
                                  <VisibilityOutlinedIcon />
                                </Link>
                              </IconButton>
                              <IconButton>
                                <Link style={{
                                  color: "grey"
                                }} to={project?.github} target="_blank">
                                  <GitHubIcon />
                                </Link>
                              </IconButton>
                            </>

                          }
                        </CardActions>
                      </Card>

                    </div>
                  </div>
                )
                )
              }
            </OwlCarousel>
          </div>
      }
    </div>
  )
}

export default Projects
