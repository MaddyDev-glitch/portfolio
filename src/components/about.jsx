import React, { Fragment } from "react";
// import myImage from "../img/myImage.png";
import  ExperienceTimeline  from "./ExperienceTimeline";
// import { Timeline, Event } from "react-timeline-scribble";

class About extends React.Component {

  constructor() {
    super();

    this.state = {
      progress: 50,
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80",
        },
      ],
      about_me: [
        // {
        //   id: "first-p-about",
        //   content:
        //     "",
        // },
        {
          id: "second-p-about",
          content:
            "Hi, I’m Sri, a Network Engineer, Software Developer, and Automation Specialist at Nokia. Over the past 2 years, I’ve worked in the Fixed Networks Customer Engineering team, designing and validating network solutions for Home Networking (ONTs, RGs, extenders) and Central Office Equipment (Nokia Lightspan OLTs). A highlight of my work includes leading the development of an MDU WiFi service solution for AT&T, optimizing costs while ensuring telco-grade reliability.",
        },
        {
          id: "third-p-about",
          content:
            "Previously, at DataGenie, a Big Data SAAS startup, I contributed in two key roles: Software Developer and QA Tester. As a Software Developer, I was instrumental in piloting the integration of ChatGPT and LLMs to enhance our platform’s functionality. We developed Genie+, an industry-first LLM feature that enables users to interact with the system in natural language, pulling insights and even creating dashboards simply through a prompt. This cutting-edge technology dramatically improved the product’s usability and intelligence.As a QA Tester, I ensured the platform met user needs through Functional Testing and UAT, delivering high-quality, bug-free experiences. I worked with ReactJS, JavaScript, and Python for feature development, and managed tasks using GitLab, Jira, and Slack.",
        },
        {
          id: "fourth-p-about",
          content:
            "",
        },
        {
          id: "fifth-p-about",
          content:
            "Outside of work, I’m an avid cyclist, a hobbyist photographer, and a traveler, always seeking new adventures and experiences.",
        },
      ],
    };

    
  }
  
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    {/* <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="skill-mf">
                      <Fragment>
                       <ExperienceTimeline />
                        {/* <Timeline>
                          <Event
                            interval={"2022 – 2023"}
                            title={"DataGenie"}
                            subtitle={"Software Developer"}
                          >
                            dolor sit amet, consectetur adipisicing elit, sed do
                          </Event>
                          <Event
                            interval={"2016 – 2018"}
                            title={"Lorem"}
                            subtitle={"Ipsum"}
                          >
                            dolor sit amet, consectetur adipisicing elit, sed do
                          </Event>
                          <Event
                            interval={"2016 – 2018"}
                            title={"Lorem"}
                            subtitle={"Ipsum"}
                          >
                            dolor sit amet, consectetur adipisicing elit, sed do
                          </Event>
                          
                        </Timeline> */}
                      </Fragment>
                      {/* <p className="title-s">Skill</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })} */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
