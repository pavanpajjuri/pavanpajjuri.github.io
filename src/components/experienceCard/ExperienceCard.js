// import React, { Component } from "react";
// import "./ExperienceCard.css";
// import { Fade, Flip } from "react-reveal";

// class ExperienceCard extends Component {
//   render() {
//     const experience = this.props.experience;
//     const theme = this.props.theme;

//     return (
//       <div className="experience-card">
//         {experience.logo_path && (
//           <Flip left duration={2000}>
//             <div className="experience-logo">
//               <img
//                 style={{
//                   maxWidth: "100%",
//                   maxHeight: "100%",
//                   transform: "scale(0.9)",
//                 }}
//                 src={require(`../../assets/images/${experience.logo_path}`)}
//                 alt={experience.company}
//               />
//             </div>
//           </Flip>
//         )}
//         <Fade right duration={2000} distance="40px">
//           <div
//             className="experience-body"
//             style={{ width: experience.logo_path ? "90%" : "100%" }}
//           >
//             <div
//               className="experience-header"
//               style={{ backgroundColor: theme.headerColor }}
//             >
//               <div className="experience-header-title">
//                 <h2 className="experience-title" style={{ color: theme.text }}>
//                   {experience.title}
//                 </h2>
//                 <h3 className="experience-company" style={{ color: theme.text }}>
//                   {experience.company}
//                 </h3>
//                 <h4 className="experience-duration" style={{ color: theme.text }}>
//                   {experience.duration} | {experience.location}
//                 </h4>
//               </div>
//             </div>
//             <div className="experience-content">
//               <p className="experience-description" style={{ color: theme.text }}>
//                 {experience.description}
//               </p>
//             </div>
//           </div>
//         </Fade>
//       </div>
//     );
//   }
// }

// export default ExperienceCard;

import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade, Flip } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div className="experience-card">
        {/* Logo Outside the Tile */}
        {experience.logo_path && (
          <Flip left duration={2000}>
            <div className="experience-logo-container">
              <img
                className="experience-logo"
                src={require(`../../assets/images/${experience.logo_path}`)}
                alt={experience.company}
              />
            </div>
          </Flip>
        )}

        <Fade right duration={2000} distance="40px">
          <div className="experience-body">
            <div className="experience-header">
              <div className="experience-header-title">
                <h2 className="experience-title">{experience.title}</h2>
                <h3 className="experience-subtitle">{experience.company}</h3>
              </div>
              <div className="experience-duration-container">
                <h3 className="experience-duration">
                  {experience.duration} | {experience.location}
                </h3>
              </div>
            </div>

            <div className="experience-content">
              <ul className="experience-description-list">
                {experience.description.map((point, index) => (
                  <li key={index} className="experience-description-item">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
