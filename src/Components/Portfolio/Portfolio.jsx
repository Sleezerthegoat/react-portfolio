import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="subtitle">My Work</h1>
                <div className="w1rk-list">
                    <div className="w1rk">
                        <img src="images/work4.jpg" alt="Work 1" />
                        <div className="layer">
                            <h3>Bank Project</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti possimus, facere sed eaque consequatur facilis dicta suscipit, reiciendis omnis numquam adipisci modi error cum consectetur ad. Beatae id sapiente sed?</p>
                            <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="w1rk">
                        <img src="images/work4.jpg" alt="Work 2" />
                        <div className="layer">
                            <h3>Payroll Project</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti possimus, facere sed eaque consequatur facilis dicta suscipit, reiciendis omnis numquam adipisci modi error cum consectetur ad. Beatae id sapiente sed?</p>
                            <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="w1rk">
                        <img src="images/work4.jpg" alt="Work 3" />
                        <div className="layer">
                            <h3>ABCD Project</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti possimus, facere sed eaque consequatur facilis dicta suscipit, reiciendis omnis numquam adipisci modi error cum consectetur ad. Beatae id sapiente sed?</p>
                            <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">See more</a>
            </div>
        </div>
    );
}

export default Portfolio;
