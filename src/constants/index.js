import { incentro} from "../assets/images";
import {
    
    
    css,
 
   python,
    git,
    github,
    html,
    javascript,
    linkedin,
    java,
    spring,
    laravel,
    atlassian,
    bitbucket
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: spring,
        name: "Java Spring Boot",
        type: "Backend",
    },
    
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: atlassian,
        name: "Atlassian",
        type: "Project Management",
    },
    {
        imageUrl: bitbucket,
        name: "BitBucket",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Internship",
        company_name: "Incentro",
        icon: incentro,
        iconBg: "#E9ADF7",
        date: "April 2024 - June 2024",
        points: [
            "Developing an internal project from scratch using Laravel following best practices, having two senior mentors with over 20 years of experience each.",
            "Development of APIs, middlewares, migrations, models, tests, etc.",
            "API testing with Postman.",
            "Communication, support  and mutual assistance among members.",
            "Bitbucket version control and Jira proyect manager.",
        ],
    },

    {
        title: "IT consultant at incentro",
        company_name: "Incentro",
        icon: incentro,
        iconBg: "#005544",
        date: "July 2024 - Present",
        points: [
            "Maintaining legacy code.",
            "Developing internal projects",
        ],
    },
 
  

];

export const socialLinks = [
   
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Abused857',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/german-martinez-cagigas/',
    }
];

export const projects = [
  
   
    
    {
        iconUrl: spring,
        theme: 'btn-back-pink',
        name: 'Backend simple Crud Spring Boot',
        description: 'Doing Crud operations with Spring Boot simulating a simple database with 4 tables, just for practice',
        link: 'https://github.com/Abused857/Alsa',
    },
   
];