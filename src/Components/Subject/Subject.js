import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Subject.css';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Subject = ({ subject }) => {
    const { id, name, logo, total } = subject
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/topic/${id}`)
    }
    return (
        <div className='subject-container'>
            <div className="subject-img">
                <img src={logo} alt="" />
            </div>
            <div className='subject-info' >
                <h3>{name}</h3>
                <p>Total Quiz: {total}</p>
                <button onClick={handleNavigate} className='btn-practice'>
                    Start Practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Subject;