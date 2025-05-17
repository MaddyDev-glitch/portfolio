import React from "react";

// import proj1
// import proj1 from "../img/image1.jpg";
// import proj11 from "../img/image2.jpg";
// import proj12 from "../img/image3.jpg";
// import proj13 from "../img/image4.jpg";
// import proj14 from "../img/image5.jpg";
// import proj15 from "../img/image6.jpg";
import proj1 from "../img/proj1.png";
import iperf_image from "../img/ipg1.PNG";
import GithubProjectCard from "./project_card";
class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">My Works</h3>
                <p className="subtitle-a">
                  A showcase of personal and open-source projects spanning ReactJS frontends, full-stack web applications, and Natural Language Processing tools. Includes custom-built solutions using spaCy, Python, and Node.js, with a focus on automation, API integrations
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <GithubProjectCard
              repo="MaddyDev-glitch/SpaCy-FineTuner"
              imgSrc={proj1}
              title="SpaCy-FineTuner"
              description="A PyQt5-based GUI tool for manually tagging entities and generating SpaCy-compatible JSON files for fine-tuning NER models. Supports bulk tagging, undo/redo, and streamlined annotation workflow."
            />
            <GithubProjectCard
              repo="MaddyDev-glitch/iperf3-webui"
              imgSrc={iperf_image}
              title="iPerf3 Web-UI"
              description="iPerf3-WebUI is a modern, lightweight, web-based frontend for iPerf3, built using Python 3 and Flask. Run network speed tests easily from any device — macOS, Linux, Windows, or even Android phones (via Termux)."
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
