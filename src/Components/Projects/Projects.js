import React from 'react';
import { Row, Col } from 'react-bootstrap'; 
import './Projects.css'
import ResturantApp from '../../Images/ResturantApp.jpg';
import Ecommerce from '../../Images/E-commerce.jpg';
import ExpenseTracker from '../../Images/ExpenseTracker.jpg';
import MailBox from '../../Images/MailBox.jpg';
import ToDo from '../../Images/ToDoList.jpg';

const projectsData = [
  {
    name: 'Restaurant App',
    gitURL: 'ResturantApp',
    image: ResturantApp,
    description:
      'A functional single-page application with a restaurant menu, cart, and a beautiful landing page. Developed using ReactJS, various React hooks, and Context API were used to add the desired functionalities.',
  },
  {
    name: 'E-commerce',
    gitURL: 'E-Commerce',
    image: Ecommerce,
    description:
      'Users can sign up, login, visit product pages, and perform all actions on their shopping cart that are available on the e-commerce website. React Router for page navigation, GitHub for version control, Firebase for authentication and deployment.',
  },
  {
    name: 'Expense Tracker',
    gitURL: 'ExpenseTracker',
    image: ExpenseTracker,
    description:
      'Developed an expense tracker app in which users can add, delete, and update expenses. Utilized React.js library for creating this website, Redux for state management, GitHub for version control, Firebase for storing data and authentication.',
  },
  {
    name: 'MailBox',
    gitURL: 'MailBox',
    image: MailBox,
    description:
      'Built an entire project using HTML5, CSS3, and JavaScript. Implemented client-side rendering for the website. Applied Redux concepts to the entire project. Applied concepts like Firebase to improve the working efficiency of the website. Implemented various Hooks to effectively function output and inbox features for the website.',
  },
  {
    name: 'To-Do List',
    gitURL: 'To-Do-List',
    image: ToDo,
    description:
      'Users can sign up, login, add tasks that need to be completed. Once added, the task will be shown on the screen, and the user can delete that task or mark it as completed, which then moves the task to a new completed tab. Firebase is used to store and get data from a backend server and to make it user-specific.',
  },
];

const OpenProjectHandler=(url)=>{
console.log(url)
    window.open(`https://github.com/Jyotiraditya-lal/${url}`, '_blank');
}

const Projects = () => {
  return (
    <div className='container'>
      <h1>My Projects</h1>
      <div>Following are the projects made by me:</div>
      {projectsData.map((project, index) => (
        <Row key={index}>
          <Col xs={12} md={6}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} className='project-image' />
          </Col>
          <Col xs={12} md={6}>
            <div className='project-description'>{project.description}</div>
            <button onClick={()=>{OpenProjectHandler(project.gitURL)}} className='btn'>Click to open</button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Projects;
