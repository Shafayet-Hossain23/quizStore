import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from '../Option/Option';
import './QuizSection2.css';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'

const QuizSection2 = ({ quizQuestion }) => {
    // console.log(question)
    const { correctAnswer, id, options, question } = quizQuestion

    return (

        <div className='single-question-container'>
            <div >
                <button className='btn-eye'>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </button>
                <h3 className='question-title'>{question} </h3>

            </div>
            <div className='option-container'>
                {
                    options.map(option => <Option
                        option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default QuizSection2;