import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
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
                      src={process.env.PUBLIC_URL + "/images/picture of me.jpg"}
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
    </div>
  );
}

export default About;
