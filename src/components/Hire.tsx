import React from 'react'
import useStyles from './styles/Hire.styles';
import { Button } from '@mui/material';


const Hire = () => {

  const classes = useStyles();

  return (
    <section className={classes.hire}>

      <div className={classes.hireMain}>
        <h2>Hire Me</h2>
        <div>
          <Button variant="contained">Contact Me</Button>
        </div>
      </div>
    </section>
  )
}

export default Hire
