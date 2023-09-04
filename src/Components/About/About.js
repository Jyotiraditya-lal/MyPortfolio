import React from "react";
import ProfilePic from '../../Images/Profile.jpg'
import './About.css'
import {useNavigate} from 'react-router-dom'

const About=()=>{

    const navigate=useNavigate()

    const ShowProjectsHandler=()=>{
        navigate('/Projects')
    }

    const ShowExperienceHandler=()=>{
        navigate('/Experience')
    }


    return(
        <React.Fragment>
          <section className="about-section">
            <h1>About</h1>
            <img src={ProfilePic} alt="Profile pic" className="img" />
            <div className="about-content">
            <p>Hello, my name is Jyotiraditya lal and I am from Dhanbad,Jharkhand.I completed my B.Tech in the field of Mechanical Engineering from Manipal Institute of Technology, Manipal,Karnataka.</p>
            <p>Throughout my academic career, I have honed my skills in HTML, CSS, and JavaScript, and I'm eager to apply these skills to real-world projects. I have a keen eye for design and a strong commitment to crafting visually appealing and user-friendly websites. My insatiable curiosity and dedication to staying up-to-date with the latest frontend technologies drive me to continually improve and expand my skill set.</p>
            <p>What sets me apart is my ability to collaborate effectively within cross-functional teams. I thrive in a dynamic and creative environment where I can work alongside designers, backend developers, and other stakeholders to turn ideas into functional and beautiful web applications.</p>
            <p>In addition to my technical skills, I bring a strong work ethic, attention to detail, and a passion for problem-solving to every project. I understand the importance of responsive design, accessibility, and performance optimization, and I'm committed to delivering top-notch solutions that meet and exceed user expectations.</p>
            <p>I'm excited about the prospect of contributing to innovative projects and making a positive impact in the world of frontend development. I look forward to the opportunities and challenges that lie ahead and am eager to continue learning and growing as a frontend developer.</p>
            <p>Skills: Html , Css , Javascript , ReactJs , React-Router, Redux, Redux-Toolkit<br />
            Tools/Fromeworks: Firebase, Bootstrap, Virtual Studio Code, Github</p>
            <button className="btn btn-right" onClick={ShowProjectsHandler}>My Projects</button>
            <button className="btn btn-right" onClick={ShowExperienceHandler}>Work Experience</button>
            </div>
            <div className="contact-info"> 
              <h3>Contact info:</h3>
              <p>Email: vaibhavlal0211@gmail.com</p>
              <p>Phone Number: (+91) 6200713519</p>
            </div>
          </section>
        </React.Fragment>
    )
}

export default About
