import React, { useState } from "react";
import { skillsUtils } from "../../utils/skillsUtils";
import './skills.css';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredSkills = selectedCategory === 'All'
        ? skillsUtils
        : skillsUtils.filter(skill => skill.category === selectedCategory);

    return (
        <div>
            <br/><br/><br/>
            <h1 className="title">Skills</h1>
            <div className="buttonsContainer">
                <ul>
                    <li className={`btn ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => handleCategoryClick('All')}>All</li>
                    <li className={`btn ${selectedCategory === 'Language' ? 'active' : ''}`} onClick={() => handleCategoryClick('Language')}>Programming Languages</li>
                    <li className={`btn ${selectedCategory === 'Frameworks' ? 'active' : ''}`} onClick={() => handleCategoryClick('Frameworks')}>Frameworks</li>
                    <li className={`btn ${selectedCategory === 'Other' ? 'active' : ''}`} onClick={() => handleCategoryClick('Other')}>Others</li>
                </ul>
            </div>
            <div className="skillsList">
                {filteredSkills.map(skill => (
                    <div key={skill.id} className="skillItem">
                        <img src={skill.image} alt="notImg" className="logo" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
