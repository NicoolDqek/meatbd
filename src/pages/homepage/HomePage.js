import React from 'react';

import Banner from '../../components/banner/Banner';
import BannerV from '../../components/bannerv/BannerV';
import Carrusel from '../../components/Carrusel/Carrusel';
import Cartp from '../../components/layouts/cardp/Cartp';
import Navbar from '../../components/layouts/navbar/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Carrusel/>
 <h3 className='pt-5 text-uppercase fw-bold'>Relacionados</h3>
      <hr className='mx-auto linea bg-dark'></hr>
      <div className='d-flex  pt-2 row justify-content-center mx-auto'>
     <Cartp/>
     <Cartp/>
     <Cartp/>
      </div>
      <Banner/>
      <BannerV/>
    </div>
  )
}

export default HomePage
