
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  python,
  nlp,
  opencv,
  cLogo,
  tableau,
  powerbi,
  tensorflow,
  
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "NLP",
    icon: nlp,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "C",
    icon: cLogo,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Data Analyst and ML Engineer",
    company_name: "Self",
    icon: mobile,
    iconBg: "#383E56",
    date: "2022 - PRESENT",
    points: [
      "Leveraging statistical analysis and data visualization techniques to uncover actionable business insights from complex datasets.",
      "Designing and maintaining interactive dashboards and reports using Power BI and Tableau to support strategic decision-making.",
      "Building and fine-tuning ML models using Scikit-learn, TensorFlow, and PyTorch, with a focus on performance, scalability, and explainability.",
    "Integrating trained models into production-grade applications using RESTful APIs (Flask/FastAPI) and containerization tools like Docker.",
    "Collaborating with opensource GIT Projects and continuously improving the skill sets."
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Self",
    icon: mobile, // You can replace this with another appropriate icon
    iconBg: "#232631",
    date: "2022 - PRESENT",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Building responsive and interactive user interfaces using React and modern JavaScript.",
      "Working with UI/UX designers to implement visually appealing and user-friendly web applications.",
      "Optimizing applications for maximum speed and scalability across various devices and browsers.",
      "Participating in agile development processes including sprint planning and retrospectives.",
    ],
  },
];



const projects = [
  {
    name: "Secure Ephemeral Workspace for Public PC's",
    description:
      "A secure, non-persistent desktop environment for public/shared PC's that automatically wipes all user data and logs from any application upon logout. -  Just like a Incognito for the PC",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "hashlib",
        color: "green-text-gradient",
      },
      {
        name: "OS",
        color: "pink-text-gradient",
      },
      {
        name: "Electron",
        color: "blue-text-gradient",
      },

    ],
    image: project1,
    source_code_link: "https://github.com/Dheeru1801/Secure_Workspace-new",
  },
  {
    name: "Mern Chant App",
    description:
      "A real-time messaging application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to register, log in, and chat instantly with others through a user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Dheeru1801/MernChat01",
  },
  {
    name: "AllRound Mart",
    description:
      "A web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
  {
    name: " Review Sentimant Analysis",
    description:
      "A system to classify and identify e-commerce product as positive or negative and find out the resultant keywords using NLP and machine learning techniques.  ",
    tags: [
      {
        name: "Pyhton",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "white-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Dheeru1801/SentimentAnalysis2.0",
  },
  {
    name: "Mini-Image Search Engine",
    description:
      " Built a mini image search engine using SBERT embeddings and clustering to semantically match user queries with relevant image groups. ",
    tags: [
      {
        name: "pyhton",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "SBERT",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Dheeru1801/ImageClusters-mini-Search-Engine",
  },
  {
    name: "Multiple Face Recognition System",
    description:
      "An advanced computer vision application that detects and recognizes multiple human faces simultaneously in real time. It supports face matching against a pre-registered database, enabling features such as automated attendance, security monitoring, or access control.",
    tags: [
      {
        name: "pyhton",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "FaceNet/Deepface",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/Dheeru1801/FaceRecognition2.0",
  },
];

export { services, technologies, experiences, projects };
