import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Cards extends Component {
  render() {
    return (
      <div>
        <div
          id="my-modal"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered " role="document">
            <div class="modal-content border-0 mx-3">
              <div class="modal-body d-flex justify-content-center p-0">
                <div class="card border-0 ">
                  <div class="card-header pb-0 bg-white border-0 text-center px-sm-4">
                    <h6 class="text-left mt-4 font-weight-bold mb-0">
                      <span></span> About Me{" "}
                      <span>
                        <button
                          type="button"
                          class="close text-left my-auto"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </span>
                    </h6>
                    <span class="img-1 text-center">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/picture of me.jpg"
                        }
                        class="img-fluid mt-3 mb-4"
                        alt="sss"
                      />
                    </span>
                  </div>
                  <div class="card-body px-sm-4 mb-3">
                    <h5>William Gartman</h5>
                    <p class="text-muted">
                      {" "}
                      I am resourceful, adaptable and a team player and I love
                      seeing things built from the ground up.{" "}
                    </p>
                    <p class="text-muted">
                      {" "}
                      Send me an email at wngartman@gmail.com if you have any
                      questions!{" "}
                    </p>
                    <div class="row justify-content-end mt-4 ">
                      <div class="col-auto">
                        <button
                          type="button"
                          class="btn btn-success px-5 "
                          data-dismiss="modal"
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="projects">
          <div className="card rounded-top" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/images/gardenifyScreenshot.png"}
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
                className="btn btn-primary"
              >
                Gardenify Website
              </a>
              <a
                href="https://github.com/sankeatan/Gardenify"
                className="btn btn-primary"
              >
                Github Repository
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
                className="btn btn-primary"
              >
                Note Taker
              </a>
              <a
                href="https://github.com/Wngartman/spiffy_note_taker"
                className="btn btn-primary"
              >
                Github Repository
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/images/dndcollective.png"}
              alt="Imgage of DnD collective"
            />
            <div className="card-body ">
              <h5 className="card-title">DnD Collective</h5>
              <p className="card-text">
                Project we created was to have a collective place for users to
                log in and create any characters for their DnD Campaign.
              </p>
              <a
                href="https://collective-dnd.herokuapp.com/"
                className="btn btn-primary"
              >
                DnD Collective
              </a>
              <a
                href="https://github.com/sankeatan/DnD_Character_Generator"
                className="btn btn-primary"
              >
                Github Repository
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
                A web application to allow users to click the generate button
                and submit their settings and giving them a generated password!.
              </p>
              <a
                href="https://wngartman.github.io/spiffy_password_generator/"
                className="btn btn-primary"
              >
                Password Generator
              </a>
              <a
                href="https://github.com/Wngartman/spiffy_password_generator"
                className="btn btn-primary"
              >
                Github Repository
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
                className="btn btn-primary"
              >
                Weather Dashboard
              </a>
              <a
                href="https://github.com/Wngartman/wng_spiffy_weather_dashboard"
                className="btn btn-primary"
              >
                Github Repository
              </a>
            </div>
          </div>

          <div className="card " style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/images/gardenifyScreenshot.png"}
              alt="Gardenify"
            />
            <div className="card-body">
              <h5 className="card-title">Placeholder</h5>
              <p className="card-text">
                A web application to allow users to search for a plant and get
                more info on said plant.
              </p>
              <a
                href="https://sankeatan.github.io/Gardenify/"
                className="btn btn-primary"
              >
                Gardenify Website
              </a>
              <a
                href="https://sankeatan.github.io/Gardenify/ "
                className="btn btn-primary"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;