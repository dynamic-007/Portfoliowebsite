import finance from '../assets/finance.png'
import todo from '../assets/todo.png'
import food from '../assets/food.png'
import college from '../assets/college.png'
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  threejs,
  tripguide
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
  },
  {
    title: "Machine Learning Enthusiast",
  },
  {
    title: "Backend Development",
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "FullStack Web Developer",
    company_name: "Felix Solutions.Ai",
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Developed a Financial Software Analysis tool which has the capability to manage all the types of expenses of Company",
      ,"Implemented A Realtime Dashboard that shows a company's status:Profit or Loss,statistical data about projects,employees etc."
      ,"It also depicts a Dynamic Graph on the expenses spent each month in the company",
      "Frameworks used: ReactJS,NodeJs,ExpressJs, Database: Postgre Sql."
    ],
  },
  {
    title: "Research Intern",
    company_name: "IIT Hyderabad",
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Dec 2022",
    points: [
      "Model: Prediction of Heart Patients joining a Rehabilitation Program. Built a model which predicts whether a",
"patient who has undergone a heart surgery, shall join the rehabilitation program",
"designed by the Hospital Authority. Used concepts of EDA and Random Forest Classifier to successfully",
"predict the output with an Accuracy of 76%.",
"Learnt Concepts of Linear Regression , Cost sensitive Linear Regression,Logistic",
"Regression and Decision Trees,Random Forests."

    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Financial Analysis Tool",
    description:
      "Web-based platform that allows a company to manage its expenses easily and reduces the need of excel sheets. Its Expenses can be properly visualised and proper insights can be gathered and they can be managed efficiently",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "Postgre Sql",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
    ],
    image:finance,
    source_code_link: "https://github.com/VARUNvk1729/Financial-Software-Management",
  },
  {
    name: "Jobby Application",
    description:
      "A simple Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://mdrjobs.ccbp.tech/login/",
  },
  ,
  {
    name: "Eamcet College Predictor Tool",
    description:
      "Built College Predictor Tool based on Eamcet rank using Python ,Web Server, My Sql database. This tool predicts the list of colleges that a student is eligible to get an admission into, based on several aspects such as Branch, Caste, Gender and various permutations among these aspects",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "WebServer",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Tkinter",
        color: "blue-text-gradient",
      },
    ],
    image: college,
    source_code_link: "https://github.com/dynamic-007/EamcetCollegePredictor",
  },
  {
    name: "FoodMunch",
    description:
      "Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers by using bootstrap embed and model components. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS,HTML",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://mdrfoodhouse.ccbp.tech/",
  },
  ,
  {
    name: "Todos Application",
    description:
      "Effortless task management through JavaScript-based CRUD operations with dynamic UI updates.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://mdrtodos.ccbp.tech/",
  },
];

export { services, technologies, experiences, testimonials, projects };
