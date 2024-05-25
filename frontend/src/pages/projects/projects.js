import React, { useState } from "react";
import { projectsUtils } from "../../utils/projectsUtils";
import './projects.css';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All'
        ? projectsUtils
        : projectsUtils.filter(project => project.category === selectedCategory);

    return (
        <div>
            <h1 className="title">My recents Projects</h1>
            <div className="buttonsContainer">
                <ul>
                    <li className={`btn ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => handleCategoryClick('All')}>All</li>
                    <li className={`btn ${selectedCategory === 'mobile' ? 'active' : ''}`} onClick={() => handleCategoryClick('mobile')}>Mobile</li>
                    <li className={`btn ${selectedCategory === 'web' ? 'active' : ''}`} onClick={() => handleCategoryClick('web')}>Web</li>
                </ul>
            </div>
            <div className="projectsList">
                {filteredProjects.map(project => (
                    <div key={project.id} className="projectItem">
                        <img src={project.image} alt="notImg" className="logo" />
                        <div>
                            <h3>{project.name}</h3>
                            <h4>{project.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
