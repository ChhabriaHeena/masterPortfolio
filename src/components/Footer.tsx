import React from 'react'
import useStyles from './styles/Footer.styles';

const Footer = () => {

  const classes = useStyles();

  return (
    <section className={classes.footer}>

      <div className={classes.footerMain}>
        Footer

      </div>
    </section>
  )
}

export default Footer
