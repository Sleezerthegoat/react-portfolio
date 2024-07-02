import React from 'react';
import './Work.css';

const Work = () => {
    return (
        <div id="work">
            <div className="container">
                <h1 className="subtitle">My Skills</h1>
                <div className="work-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Full Stack Developer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias veritatis, modi accusamus atque rerum aut et fugit, totam consectetur quo quas provident? Fugit perferendis debitis corrupti enim! Magnam, numquam?</p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Web Designer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias veritatis, modi accusamus atque rerum aut et fugit, totam consectetur quo quas provident? Fugit perferendis debitis corrupti enim! Magnam, numquam?</p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Loading...</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias veritatis, modi accusamus atque rerum aut et fugit, totam consectetur quo quas provident? Fugit perferendis debitis corrupti enim! Magnam, numquam?</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
