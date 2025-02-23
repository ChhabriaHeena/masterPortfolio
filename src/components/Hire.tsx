import React from 'react'
import useStyles from './styles/Hire.styles';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Hire = () => {

  const classes = useStyles();

  return (
    <section className={classes.hire}>

      <div className={classes.hireMain}>
        <h2>Hire Me</h2>
        <div>
          <Button variant="contained">
            <Link style={{ color: '#fff', textDecoration: "none" }} to='/contact' target="_blank">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hire
