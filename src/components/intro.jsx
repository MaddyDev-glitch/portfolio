import React from "react";
import "./stars.scss";
import { ReactTyped } from 'react-typed';
import nokiaLogo from "../img/nokia.png";
import datagenieLogo from "../img/datagenie.png";
import attLogo from "../img/att.png";
import frontierLogo from "../img/frontier.png";
import rgnetLogo from "../img/rgnet.png";
const handleClick = (e) => {
  e.preventDefault();
  window.open(
    "https://docs.google.com/document/d/1-4NCg_mZPggtPREcw5oxdF6-Xq-9kPMm1x8f2UqQRnI/preview",
    "_blank"
  );
};
// "https://docs.google.com/document/d/1RVxHCq9d4VNqjO9MzGxVUYRVjknoxTDQThVQII71EBI/export?format=pdf"
class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am <br />Srimadhaven Thirumurthy</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <ReactTyped
                    strings={[
                      "Network Engineer",
                      "Software Developer",
                      "Automation Specialist",
                      "NLP and LLMs Enthusiast"
                    ]}
                    typeSpeed={40}
                    backDelay={2100}
                    backSpeed={20}
                    loop
                  />
                </strong>
              </p>
              <div className="company-section mt-5">
                <div className="column text-center companiesbox">
                  <div className="col-md-6 mb-4 companieslogowrapper">
                    <h5 className="text-uppercase font-weight-bold mb-3 text-white">
                      Companies I’ve Worked In
                    </h5>
                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 logobox">
                      <img src={nokiaLogo} alt="Nokia" className="company-logo" />
                      <img src={datagenieLogo} alt="DataGenie" className="company-logo" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 companieslogowrapper">
                    <h5 className="text-uppercase font-weight-bold mb-3 text-white">
                      Companies I’ve Worked With
                    </h5>
                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 logobox">
                      <img src={attLogo} alt="AT&T" className="company-logo" />
                      <img src={frontierLogo} alt="Frontier" className="company-logo" />
                      <img src={rgnetLogo} alt="RGNET" className="company-logo" />
                    </div>
                  </div>
                </div>
              </div>

              {/* <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                  style={{ color: "#ffffff" }}
                >
                  View My Work
                </a>
              </p> */}
              <p className="pt-3">
                {/* <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://docs.google.com/document/d/1RVxHCq9d4VNqjO9MzGxVUYRVjknoxTDQThVQII71EBI/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  style={{ color: "#ffffff" }}
                >
                  View My Resume
                </a> */}
                <a className="btn btn-primary btn js-scroll px-4" href="#work" onClick={handleClick}>View My Resume</a>

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
