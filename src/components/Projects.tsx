import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Projects = () => {
  return (
    <div>
      Projects
      <OwlCarousel className='owl-theme' loop margin={10}>
        <div className='item'>
          <h4>1</h4>
        </div>
        <div className='item'>
          <h4>1</h4>
        </div>
        <div className='item'>
          <h4>1</h4>
        </div>
        <div className='item'>
          <h4>1</h4>
        </div>
        <div className='item'>
          <h4>1</h4>
        </div>
        <div className='item'>
          <h4>1</h4>
        </div>

      </OwlCarousel>
    </div>
  )
}

export default Projects
