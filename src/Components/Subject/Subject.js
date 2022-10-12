import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Subject.css';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Subject = ({ subject }) => {
    const { id, name, logo, total } = subject
    return (
        <div className='subject-container'>
            <div className="subject-img">
                <img src={logo} alt="" />
            </div>
            <div className='subject-info' >
                <h3>{name}</h3>
                <p>Total Quiz: {total}</p>
                <button className='btn-practice'>
                    Start Practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Subject;