import './bannerv.css';

const BannerV = () => {
  return (
     <div className='banner-grid '>
      <div className='grid-container container '>
        {/* Video ocupando columnas 1 y 2 de las filas 1 y 2 */}
        <div className='video-container  '>
          <iframe
            width="100%"
            height="315"
            className='rounded-4'
            src="https://www.youtube.com/embed/ps8hOBx8daA?autoplay=1&loop=1&showinfo=0&mute=1&controls=0&playlist=ps8hOBx8daA" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            
            
          ></iframe>
        </div>
      
        {/* Otras columnas */}
        <div className='grid-item'>"La cocina es multisensorial, está dirigida al ojo, la boca, la nariz, el oído y la mente. Ningún arte tiene esa complejidad."</div>
        <div className='grid-item '></div>
        <div className='grid-item'></div>
        <div className='grid-item '>4</div>
        <div className='grid-item '>4</div>
        <div className='grid-item '>4</div>
        <div className='grid-item '>4</div>
      </div>
    </div>
  );
}

export default BannerV
