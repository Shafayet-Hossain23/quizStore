import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from '../Option/Option';
import './QuizSection2.css';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizSection2 = ({ quizQuestion }) => {
    // console.log(question)
    const { correctAnswer, id, options, question } = quizQuestion;

    const notify = (id) => {
        toast(`Correct Answer is : ${correctAnswer}`)
    };
    const rightAnswerHandler = (id) => {
        const getId = document.getElementById(id);
        const innerValue = getId.value;
        if (innerValue === correctAnswer) {
            toast(`Correct Answer`);
        }
        else {
            toast('Wrong Answer')
        }
    }

    return (

        <div className='single-question-container'>


            <div>

                <button onClick={() => notify(id)} className='btn-eye'>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </button>
                <ToastContainer closeButton={false}></ToastContainer>
                <h3 className='question-title'>{question} </h3>

            </div>

            <div className='option-container'>
                {
                    options.map(option => <Option
                        option={option}
                        rightAnswerHandler={rightAnswerHandler}
                    ></Option>)
                }
            </div>

        </div>
    );
};

export default QuizSection2;