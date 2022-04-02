import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects">
        <div className="card rounded-top" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + "/images/gardenifyscreenshot.png"}
            alt="Gardenify"
          />
          <div className="card-body">
            <h5 className="card-title">Gardenify</h5>
            <p className="card-text">
              A web application to allow users to search for a plant and get
              more info on said plant.
            </p>
            <a
              href="https://sankeatan.github.io/Gardenify/"
              className="btn btn-primary live-demo"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/sankeatan/Gardenify"
              className="btn btn-primary"
            >
              Repository
            </a>
          </div>
        </div>

        <div className="card rounded-top" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + "/images/noteTaker.png"}
            alt="Gardenify"
          />
          <div className="card-body">
            <h5 className="card-title">Note Taker</h5>
            <p className="card-text">
              A web application to allow users write notes and save them!
            </p>
            <a
              href="https://spiffyheroku.herokuapp.com/notes"
              className="btn btn-primary live-demo"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Wngartman/spiffy_note_taker"
              className="btn btn-primary"
            >
              Repository
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + "/images/dndcollective.png"}
            alt="DnD collective demo"
          />
          <div className="card-body ">
            <h5 className="card-title">DnD Collective</h5>
            <p className="card-text">
              Project we created was to have a collective place for users to log
              in and create any characters for their DnD Campaign.
            </p>
            <a
              href="https://collective-dnd.herokuapp.com/"
              className="btn btn-primary live-demo"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/sankeatan/DnD_Character_Generator"
              className="btn btn-primary"
            >
              Repository
            </a>
          </div>
        </div>

        <div className="card rounded-top" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + "/images/passwordGen.png"}
            alt="Gardenify"
          />
          <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <p className="card-text">
              A web application to allow users to click the generate button and
              submit their settings and giving them a generated password!.
            </p>
            <a
              href="https://wngartman.github.io/spiffy_password_generator/"
              className="btn btn-primary live-demo"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Wngartman/spiffy_password_generator"
              className="btn btn-primary"
            >
              Repository
            </a>
          </div>
        </div>
        <div className="card " style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + "/images/weatherDashboard.png"}
            alt="Gardenify"
          />
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard</h5>
            <p className="card-text">
              A Javascript web application to allow users to search for the
              weather for any location.
            </p>
            <a
              href="https://wngartman.github.io/wng_spiffy_weather_dashboard/"
              className="btn btn-primary live-demo"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Wngartman/wng_spiffy_weather_dashboard"
              className="btn btn-primary"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
