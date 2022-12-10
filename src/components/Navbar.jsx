import FNL from '../images/FNL.png'

export const Navbar = () => {

  return (
    <nav className="navbar navbar-dark navbar-expand-lg position-fixed">
  <div className="container-fluid d-flex justify-content-between">
    <img src={FNL} alt="FÑL"/>
    {/* <a className="navbar-brand" href='#'>Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href='#about'>Sobre mí</a>
        </li>
        <li className="nav-item">
          <a href='#Projects' className="nav-link active">Proyectos</a>
        </li>
        <li className="nav-item">
          <a href='#Contact' className="nav-link active">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
