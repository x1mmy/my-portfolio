import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";


class About extends React.Component {
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
        const one = (
          <p>
            I am currently a <b>AI Developer</b> at{" "}
                <a href="https://allinit.com.au/solutions/"> All In IT Solutions</a>, building solutions for business operations allowing them to automate and streamline their operations. At the same time, I am undertaking
            my <b> Bachelor's of Computer Science</b> at{" "}
            <a href="https://www.westernsydney.edu.au/">Western Sydney University</a>. 
          </p>
        );
        const two = (
          <p>
            Outside of work, I'm interested in staying fit and healthy with MMA and gym.
            I also play a lot of video games.
          </p>
        );

        const tech_stack = [
            "Typescript",
            "Node.js",
            "React.js",
            "Next.js",
            "C++"
          ];
    
    
        return (
          <div id="about">
            <FadeInSection>
              <div className="section-header ">
                <span className="section-title">/ About Me </span>
              </div>
              <div className="about-content">
                <div className="about-description">
                  {[one]}
                  {"Here are some technologies I have been working with:"}
                  <ul className="tech-stack">
                    {tech_stack.map(function (tech_item, i) {
                      return (
                        <FadeInSection delay={`${i + 1}00ms`}>
                          <li>{tech_item}</li>
                        </FadeInSection>
                      );
                    })}
                  </ul>
                  {[two]}
                </div>
              </div>
            </FadeInSection>
          </div>
        );
      }
    }

export default About;