import React from 'react'
import './Experience.css'

const Experience=()=>{

    return(
    <React.Fragment>
        <h1 className='title'>Work Experience</h1>
        <div className='container'>
            <section>
            <h2>Project Manager</h2>
            <h3>Vineet consulting</h3>
            <h4>sep 2022-Present</h4>
            <ul>
                <li>Developed and initiated projects, managed costs and monitored performance</li>
                <li>Met project deadlines without sacrificing build quality or workplace safety</li>
                <li>Identified plans and resources required to meet project goals and objectives</li>
                <li>Managed an Excel sheet with project related details</li>
            </ul>
            </section>
            <section>
            <h2>Design Intern</h2>
            <h3>Ranchi Design and consultancy</h3>
            <h4>March 2022- Jul 2022</h4>
            <ul>
                <li>Reviewed design requirements and identified appropriate materials to use in development of solutions</li>
                <li>Used AutoCAD for design purposes</li>
            </ul>
            </section>
            <section>
            <h2>Business development intern</h2>
            <h3>Upskillz by Skolar</h3>
            <h4>Jan 2022- feb 2022</h4>
            <ul>
                <li>Engaged with customers to build business relationships.</li>
                <li>Penetrated targeted accounts to generate sales from within client base</li>
            </ul>
            </section>
        </div>
    </React.Fragment>
    )
}

export default Experience
