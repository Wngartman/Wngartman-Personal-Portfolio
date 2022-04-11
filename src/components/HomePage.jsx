/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <header className="pageHead">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand will-brand">William Gartman</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1dOhrO_lgLvoOsmA6xSDqcffuEPpQLC16/view?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container aboutSec my-5">
        <div className=" row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
              Hello! I'm William Gartman
            </h1>
            <p className="lead">
              I am a Full-Stack Developer who loves to see projects built from
              the ground up. I enjoy to build full-stack web applications that
              are user-friendly and intuitive. I am excited to use knowledge and
              expertise to add value to a diverse team to maximize user-centered
              experiences on the web.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="contact-btn btn btn-outline-secondary btn-lg px-4"
              >
                <a id="email" href="mailto:boobooaroo@gmail.com">
                  Contact Me
                </a>
              </button>
            </div>
          </div>
          <div className="pic col-lg-4 offset-lg-0 p-5 overflow-hidden">
            <img
              className="rounded-lg-4 picOfMe"
              src={process.env.PUBLIC_URL + "/images/pictureofme.jpg"}
              alt="william gartman"
              // width="100%"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default HomePage;
