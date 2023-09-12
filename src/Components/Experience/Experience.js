import React from 'react'
import './Experience.css'

const Experience=()=>{

    return(
    <React.Fragment>
        <h1 className='title'>Work Experience</h1>
        <div className='container'>
            <section>
            <h2>Full-stack Developer</h2>
            <h3>Vineet consulting</h3>
            <h4>sep 2022-Present</h4>
            <ul>
                <li>Collaborated with business analysts and end-users to understand the organizations unique requirements and translate them into technical specifications for CRM customization.</li>
                <li>Designed, maintained, and optimized the database schema of the CRM system.</li>
                <li>Integrated the CRM system with other third-party applications, databases</li>
                <li>Customized the CRM systems user interface to align with the organizations branding and user experience requirements</li>
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
            <section>
            <h2>Web Development Intern</h2>
            <h3>Panaka Consumables</h3>
            <h4>Jul 2021- Dec 2021</h4>
            <ul>
                <li>created user interfaces and made necessary changes improve user experiences.</li>
                <li>Assisted in the maintenance of existing websites, making updates, fixing bugs, and optimizing performance</li>
            </ul>
            </section>
        </div>
    </React.Fragment>
    )
}

export default Experience
