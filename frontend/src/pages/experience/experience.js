import React from "react";
import './experience.css';
import {experiences} from '../../utils/experiencesUtils'

const Experience = () => {
    return (
        <div className="experienceContainer">
            <br/><br/>
            <h1 className="title">Experience</h1>
            {experiences.map((exp, index) => (
                <div key={index} className="experience">
                    <div className="company">
                        <h2>{exp.company}</h2>
                    </div>
                    <div className="separator">
                        <div className="circle"></div>
                        <div className="line"></div>
                    </div>
                    <div className="details">
                        <h3>{exp.title}</h3>
                        <p>{exp.period}</p>
                        <p>{exp.location}</p><br/>
                        <ul>
                            {exp.tasks.map((task, i) => (
                                <li key={i}>{task}</li>
                            ))}
                        </ul><br></br>
                        <div className="buttonsContainer">
                            <ul>
                                <li className="btn">{exp.skills.join(', ')}</li>
                            </ul>
                        </div>        
                        <p><strong>Compétences:</strong> {exp.skills.join(', ')}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;
