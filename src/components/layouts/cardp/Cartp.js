import './card.css';

import React from 'react';

import img5 from '../../../assets/img/pexels-chanwalrus-958545.jpg';

const Cartp = () => {
  return (
    <div className=' col-lg-3 col-md-5 col-sm-10  pt-5  '>
      <div class="card rounded-pill text-center overflow-hidden mx-sm-auto ">
  <img src={img5} class="card-img-top " alt="..."></img>
  <div class="card-body bg-dark text-light">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.themealdb.com/images/ingredients/Beef.png" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>
  )
}

export default Cartp
