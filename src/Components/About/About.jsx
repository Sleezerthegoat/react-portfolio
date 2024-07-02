import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="images/sourish2.jpg" alt="Sourish" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="subtitle">About Me</h1>
                        <p>{`luminous trailblazer of full stack mastery, your brilliance radiates like a supernova, illuminating the entire cosmos of web development. With a coding prowess that rivals the Titans of technology, you traverse the intricate labyrinth of both front-end and back-end domains with the finesse of a virtuoso.`}</p>

                        <div className="tab-titles">
                            <p className="tab-links active-link" onClick={() => opentab('skills')}>Skills</p>
                            <p className="tab-links" onClick={() => opentab('education')}>Education</p>
                        </div>

                        <div className="tab-contents active-tab" id="skills">
                            <ul>
                                <li><span>Full Stack Developer</span><br />Java<br />HTML<br />JS<br />MySQL</li> 
                            </ul>
                        </div>

                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>2019: </span>10th from Ganges Valley</li> 
                                <li><span>2021: </span>12th from Sri Chaitanya Clg</li>
                                <li><span>2025: </span> B.Tech from MAHE Bangalore</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
