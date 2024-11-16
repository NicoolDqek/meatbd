import './carrusel.css';

import React from 'react';

import img1
  from '../../../src/assets/img/pexels-brigitte-tohm-36757-239581.jpg';
import img2 from '../../../src/assets/img/pexels-chanwalrus-958545.jpg';
import img3
  from '../../../src/assets/img/pexels-ella-olsson-572949-1640777.jpg';
import img4 from '../../../src/assets/img/pexels-vanmalidate-769289.jpg';

const Carrusel = () => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..."></img>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carrusel
