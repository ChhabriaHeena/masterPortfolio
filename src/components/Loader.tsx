import React from 'react'
import useStyles from './styles/Loader.styles';
import loadingSpinner from './images/Spinner@1x-1.0s-200px-200px.svg'

const Loader = (loading: any) => {

  const classes = useStyles();

  if (!loading) return null;
  return (
    <div className={classes.loaderOverlay}>
      <img src={loadingSpinner} alt="Loading..." className={classes.loaderImage} />
    </div>
  )
}

export default Loader
