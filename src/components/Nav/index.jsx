import React from 'react';
import "./style.css";

function Mycard() {
    return (
        <div className="card">

            <div className="top">
                <img src="../images/ujjwal.jpg" alt="ujjwal" className="image" />
                <h3 className="name">Ujjwal Kumar Jha</h3>
                <p className="para">FrontEnd Developer</p>
                <p className="website">ujjwaljha.com</p>
            </div>

            <div className="btn--container">
                <button className="btn--1">Email</button>
                <button className="btn--2">LinkedIn</button>
            </div>

            <div className="card--2">
                <h5 className="about">About :</h5>
                <p className="about--para">Hi, I am a Full Stack Developer based in Goa, India.</p>
            </div>

            <div className="card--3">
                <h5 className="interest">Interests :</h5>
                <p className="interest--para">I love to code and make new thing | I love trying new foods | I love music.</p>
            </div>

            <div className="icons">
                <img src="../images/social.png" alt="social-icons" className="icon" />
            </div>
        </div>

    )
};

export default Mycard;