import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "ShopMMA": {
        title: "ShopMMA",
        desc:
          "A comprehensive B2C e-commerce platform for MMA gear featuring dual interfaces for customers and administrator",
        techStack: "Next.JS, Node.JS, React.JS, Tailwind CSS",
        link: "https://github.com/x1mmy/B2C-Store-Application",
        open: "https://b2-c-store-application-web.vercel.app/",
        image: "/assets/shopmma.png"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ Projects </span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>{spotlightProjects[key]["desc"]}</p>
                  <p className="techStack">
                    {spotlightProjects[key]["techStack"]}
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Projects;