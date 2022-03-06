/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand">William Gartman</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-backdrop="false" data-toggle="modal" data-target="#my-modal">About Me</a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
    
  )
};
export default HomePage;