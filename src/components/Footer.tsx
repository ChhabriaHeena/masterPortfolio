import React from 'react'
import useStyles from './styles/Footer.styles';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { IconButton, Typography } from '@mui/material';

const Footer = () => {

  const classes = useStyles();

  return (
    <section className={classes.footer}>

      <div className={classes.footerMain}>
        <IconButton size='small'>
          <Typography variant='h5' className={classes.footerContent}>
            Made with <FavoriteOutlinedIcon /> by Heena Chhabria
          </Typography>
        </IconButton>

      </div>
    </section>
  )
}

export default Footer
