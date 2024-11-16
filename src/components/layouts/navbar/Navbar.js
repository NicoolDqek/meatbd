import './navar.css';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary p-0">
  <div className="container-fluid  p-3 navbar2  ">
    <a className="navbar-brand" href="#">MRSEAL</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-light active" aria-current="page" href="#">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">COMIDAS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">GALERY</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
    
  );
};

export default Navbar;

