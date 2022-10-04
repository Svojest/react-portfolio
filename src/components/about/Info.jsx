import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__titlt">Experience</h3>
                <span className="about__subtitle">1 Year</span>
            </div>
            <div className="about__box">
                <i className="bx bx-briefcase about__icon"></i>
                <h3 className="about__titlt">Completed</h3>
                <span className="about__subtitle">3 Projects</span>
            </div>
            <div className="about__box">
                <i className="bx bxl-telegram about__icon"></i>
                <h3 className="about__titlt">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    );
};

export default Info;
