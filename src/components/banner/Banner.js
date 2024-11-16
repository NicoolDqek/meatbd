import './banner.css';

import React from 'react';

import img6 from '../../assets/img/pexels-chanwalrus-958545.jpg';

const Banner = () => {
  return (
    <div className='row col-12 mb-3'>
      <div className=' d-flex flex-column-reverse flex-lg-row pt-5 mt-5 banner pb-5 '>
      <div className='col-lg-6 col-md-4 col-sm-12 mx-md-auto pt-md-4 '>
        <h3 className='d-flex flex-column align-content-center justify-content-center '>GASTRONOMIA</h3>
        <p className='text-center ps-3'>"La gastronomía del mundo es un vasto y exquisito mosaico de culturas, tradiciones y sabores, donde cada plato cuenta una historia única y cada ingrediente es un testimonio de la creatividad humana, recordándonos que la comida es más que sustento: es un puente entre pueblos, una celebración de la diversidad y una invitación a explorar la riqueza infinita de nuestro planeta a través del paladar."</p>
      </div>
      <div className='col-lg-6 col-md-4 col-sm-12  mx-md-auto m-0'>
        <img src={img6} className='rounded mx-auto'></img>
      </div>
      </div>
      
    </div>
  )
}

export default Banner
