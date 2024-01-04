import React, { useContext } from 'react';
// import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'
import FadeInSection from '../../utils/FadeInSection';

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="skills" id={"skills"} style={{ backgroundColor: theme.secondary }}>
            <FadeInSection>
                <div className="skillsHeader">
                    <h2 style={{ color: theme.primary }}>Skills &amp; Tools</h2>
                </div>
                <div className="skillsContainer">
                    <div className="skill--scroll">

                        {skillsData.map((skill, id) => (
                            <FadeInSection key={id}>
                                <div className="skill--box" key={id} style={skillBoxStyle}>
                                    <img className={skill === "React" ? "spin" : ""} src={skillsImage(skill)} alt={skill} />
                                    <h3 style={{ color: theme.tertiary }}>
                                        {skill}
                                    </h3>
                                    <h5 style={{ color: theme.tertiary }}>
                                        {skill.version}
                                    </h5>
                                </div>
                            </FadeInSection>
                        ))}

                        {/*  */}
                        {/* {skillsData.map((skill, id) => (
                            <FadeInSection key={id}>
                                <div className="skill--box" key={id} style={skillBoxStyle}>
                                    <img className={skill == "React" ? "spin" : ""} src={skill.image} alt={skill} />
                                    <h3 style={{ color: theme.tertiary }}>
                                        {skill.name}
                                    </h3>
                                    <h5 style={{ color: theme.tertiary }}>
                                        version: {skill.version}
                                    </h5>
                                </div>
                            </FadeInSection>
                        ))} */}

                        {/*  */}
                    </div>
                </div>

            </FadeInSection>
        </div>
    )
}

export default Skills
