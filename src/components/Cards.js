// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards() {

    return (
        <div id="projects" className="projects">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/gardenifyScreenshot.png'} alt="Gardenify" />
                <div className="card-body">
                    <h5 className="card-title">Gardenify</h5>
                    <p className="card-text">A web application to allow users to search for a plant and get more info on said plant.</p>
                    <a href="https://sankeatan.github.io/Gardenify/" className="btn btn-primary">Gardenify Website</a>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/dndcollective.png'} alt="Imgage of DnD collective" />
                <div className="card-body">
                    <h5 className="card-title">DnD Collective</h5>
                    <p className="card-text">Project we created was to have a collective place for users to log in and create any characters for their DnD Campaign.
                    </p>
                    <a href="https://collective-dnd.herokuapp.com/" className="btn btn-primary">DnD Collective</a>
                </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/gardenifyScreenshot.png'} alt="Gardenify" />
                <div className="card-body">
                    <h5 className="card-title">Placeholder</h5>
                    <p className="card-text">A web application to allow users to search for a plant and get more info on said plant.</p>
                    <a href="https://sankeatan.github.io/Gardenify/" className="btn btn-primary">Gardenify Website</a>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/gardenifyScreenshot.png'} alt="Gardenify" />
                <div className="card-body">
                    <h5 className="card-title">Placeholder</h5>
                    <p className="card-text">A web application to allow users to search for a plant and get more info on said plant.</p>
                    <a href="https://sankeatan.github.io/Gardenify/" className="btn btn-primary">Gardenify Website</a>
                </div>

            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/gardenifyScreenshot.png'} alt="Gardenify" />
                <div className="card-body">
                    <h5 className="card-title">Placeholder</h5>
                    <p className="card-text">A web application to allow users to search for a plant and get more info on said plant.</p>
                    <a href="https://sankeatan.github.io/Gardenify/" className="btn btn-primary">Gardenify Website</a>
                </div>

            </div>
        </div>
    )
}


export default Cards;
