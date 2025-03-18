import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import ExperienceImg from "./ExperienceImg";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import { experience } from "../../portfolio";
import "./Experience.css";
import { Fade } from "react-reveal";

// class Experience extends Component {
//   render() {
//     const theme = this.props.theme;
//     return (
//       <div className="experience-main">
//         <Header theme={theme} />
//         <div className="basic-experience">
//           <Fade bottom duration={2000} distance="40px">
//             <div className="heading-div">
//               <div className="heading-img-div">
//                 {/* <ExperienceImg theme={theme} /> */}
//               </div>
//               <div className="heading-text-div">
//                 <h1 className="heading-text">{experience.title}</h1>
//                 {/* <h2 className="heading-sub-text">{experience.subtitle}</h2> */}
//                 <p className="experience-description">{experience.description}</p> {/* This ensures the description is rendered */}
//               </div>
//               {/* <div className="heading-text-div">
//                 <h1 className="heading-text" style={{ color: theme.text }}>
//                   Experience
//                 </h1>
//                 <h3 className="heading-sub-text" style={{ color: theme.text }}>
//                   Work and Internship
//                 </h3>
//               </div> */}
//             </div>
//           </Fade>

//           <div className="experience-body-div">
//             {experience.sections.map((section, index) => (
//               <div key={index} className="experience-section">
//                 <h2 className="experience-section-title">{section.title}</h2>
//                 {section.experiences.map((exp, expIndex) => (
//                   <div key={expIndex} className="experience-card">
//                     <div className="experience-card-left">
//                       <img
//                         className="experience-logo"
//                         src={require(`../../assets/images/${exp.logo_path}`)}
//                         alt={exp.company}
//                       />
//                     </div>
//                     <div className="experience-card-right">
//                       <h3>{exp.title}</h3>
//                       <h4>
//                         {exp.company} | {exp.duration}
//                       </h4>
//                       <p>{exp.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//         <Footer theme={this.props.theme} />
//         <TopButton theme={this.props.theme} />
//       </div>
//     );
//   }
// }

// export default Experience;

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text">{experience.title}</h1>
                <h2 className="experience-heading-sub-text">
                  {experience.subtitle}
                </h2>
                <p className="experience-description">
                  {experience.description}
                </p>
              </div>
            </div>
          </Fade>

          {/* Using ExperienceAccordion to render experiences properly */}
          <ExperienceAccordion sections={experience.sections} theme={theme} />
        </div>

        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
