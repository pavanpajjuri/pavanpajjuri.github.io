/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pavan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pavan Pajjuri Portfolio",
    type: "website",
    // url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Pavan Pajjuri",
  logo_name: "Pavan Pajjuri",
  // nickname: "layman_brother",
  subTitle:
    "Data Scientist | ML Engineer | AI Enthusiast. Specializing in deep learning, computer vision, NLP and generative AI. Experienced in fine-tuning CNNs, GANs, LLMs and deploying AI solutions.",
  // resumeLink:
  //   "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/pavanpajjuri",
  githubProfile: "https://github.com/pavanpajjuri",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/pavanpajjuri",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pavanpaj/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:pavan.pajjuri99@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/pavanpaj",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Specializing in AI/ML, with expertise in deep learning, computer vision, NLP, and generative models.",
        "⚡ Developing and deploying scalable ML models, including CNNs, GANs, LLMs, and reinforcement learning systems.",
        "⚡ Architecting end-to-end AI pipelines, integrating MLOps for automation and cloud-based deployment.",
        "⚡ Advancing model interpretability and decision-making with explainable AI techniques and data-driven insights.",
        "⚡ Working at the intersection of AI and big data, leveraging scalable ML frameworks and real-time inference.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/layman_brother/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology Madras (IIT Madras)",
      subtitle: "B.Tech. & M.Tech. in Electrical Engineering",
      logo_path: "iitm_logo.png",
      alt_name: "IITM Madras",
      duration: "2016 - 2021",
      descriptions: [
        "⚡ Studied core subjects including Data Structures, Algorithms, Machine Learning, and Statistics",
        "⚡ Focused on Deep Learning, Generative AI, and AI-driven automation through advanced coursework and research projects.",
        "⚡ M.Tech Thesis: 3D Vision-based Navigation using Deep Reinforcement Learning (DRL) for autonomous robotic navigation under Dr. V Srinivasa Chakravarthy.",
        "⚡ Graduate Teaching Assistant for 'Applied Programming Lab (Python)', guiding students in Python development and data science applications.",
      ],
      website_link: "https://www.iitm.ac.in/",
    },
    {
      title: "University at Buffalo SUNY",
      subtitle: "M.S. in Data Science",
      logo_path: "ub_logo.png",
      alt_name: "University at Buffalo",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ Specializing in Deep Learning, Computer Vision, and NLP with coursework in Advanced Machine Learning and Cloud Computing.",
        "⚡ Researching scalable AI models and real-world deployment strategies for large-scale AI applications.",
        "⚡ Graduate Teaching Assistant for 'Data Management and Query Language' course, mentoring students in SQL and database management.",
      ],
      website_link: "https://www.buffalo.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    {
      title: "Data Science",
      // subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "3+ Years of Experience",
  description:
    "I have worked as a Data Scientist and ML Engineer, specializing in Machine Learning and Deep Learning. I have experience developing and deploying large-scale AI models at PayPal and Samsung R&D.  Additionally, I have been a Graduate Teaching Assistant, mentoring students in data science and programming.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "PayPal India",
          company_url: "https://www.paypal.com",
          logo_path: "paypal_logo.png",
          duration: "Jan 2021 - Jan 2024",
          location: "Hyderabad, India",
          description: [
            "Designed and deployed ML-based fraud detection models, analyzing transaction data for 50+ global merchants by minimizing losses and building $2M in revenue using decision trees and anomaly detection techniques.",
            "Generated and automated reports on Tableau Dashboards to perform trend analysis and research on real-time payment volumes by capturing fraud beforehand, increasing merchant retention by 70%.",
            "Enhanced model explainability and feature importance by implementing TabNet with LIME & SHAP on a 250K+ transaction dataset, increasing fraud rejection precision from 55% to 67%.",
            "Developed an end-to-end pipeline for data extraction, analysis, and feature engineering from Cassandra DB, reducing query time by 40% and accelerating fraud risk assessments.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internship",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Samsung R&D Institute",
          company_url: "https://www.samsung.com",
          logo_path: "samsung_logo.png",
          duration: "May 2020 - Jul 2020",
          location: "Noida, India",
          description: [
            "Enhanced recommendation systems by integrating CNN-based visual embeddings with Knowledge Graphs, boosting accuracy by 30% and user engagement by 20%.",
            "Developed a path-based KPRN algorithm, achieving a Precision@10 score of 0.086 on the MovieLens 1M dataset.",
            "Integrated the model into Samsung’s chatbot, improving response relevance by 20% for 100K+ users.",
          ],
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Manager and Strategist",
          company: "Entrepreneurship Cell, IIT Madras",
          company_url: "https://www.ecell.iitm.ac.in/",
          logo_path: "ecell_logo.png",
          duration: "July 2017 - May 2019",
          location: "Chennai, India",
          description: [
            "Led strategic initiatives at IIT Madras' Entrepreneurship Cell, driving startup incubation and innovation.",
            "Organized workshops, networking events, and mentorship programs, connecting aspiring entrepreneurs with industry leaders.",
            "Strengthened startup engagement by collaborating with 30+ startups and investors to expand funding and support opportunities.",
          ],
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage cutting-edge AI and ML technologies, with a strong focus on developing and deploying data-driven solutions. I specialize in building deep learning models from scratch, optimizing ML workflows, and deploying scalable AI applications on cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "optimization-algorithms-deep-learning",
      name: "Optimization Algorithms in Deep Learning from Scratch",
      createdAt: "2025-18-02T00:00:00Z",
      description: "Blog published on Medium",
      url:
        "https://medium.com/@pavan.pajjuri99/optimization-algorithms-in-deep-learning-from-scratch-e1395898a4b6",
    },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pavan.png",
    description:
      "Feel free to reach out anytime—I’d love to connect and have a conversation with you!",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
  //   locality: "San Jose",
  //   country: "USA",
  //   region: "California",
  //   postalCode: "95129",
  //   streetAddress: "Saratoga Avenue",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  // },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
