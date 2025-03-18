import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css"; // Make sure this CSS has the correct styles

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-main">
        {this.props.sections.map((section) => {
          return (
            <div className="experience-section" key={section["title"]}>
              {/* Section Title (Work, Internships, etc.) */}
              <h2
                className="experience-section-title"
                style={{ color: theme.text }}
              >
                {section["title"]}
              </h2>

              {/* Experience Cards */}
              {section["experiences"].map((experience, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={section["experiences"].length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
