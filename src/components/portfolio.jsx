import React from "react";

// import proj1
// import proj1 from "../img/image1.jpg";
// import proj11 from "../img/image2.jpg";
// import proj12 from "../img/image3.jpg";
// import proj13 from "../img/image4.jpg";
// import proj14 from "../img/image5.jpg";
// import proj15 from "../img/image6.jpg";
import proj1 from "../img/proj1.png";

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
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/MaddyDev-glitch/SpaCy-FineTuner?tab=readme-ov-file" data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={proj1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">SpaCy-FineTuner</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          A PyQt5-based GUI tool for manually tagging entities and generating SpaCy-compatible JSON files for fine-tuning NER models. Supports bulk tagging, undo/redo, and streamlined annotation workflow.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={proj1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={proj1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack SmoothScrolling
                            VanillaJS
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={proj1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={proj1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack ReactJS
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>











            {/* <div className="col-md-4">
              <div className="work-box">
                <a href={proj1} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={proj1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap ReactJS GoogleAPI
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={proj1} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={proj1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap ReactJS GoogleAPI
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
            
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
