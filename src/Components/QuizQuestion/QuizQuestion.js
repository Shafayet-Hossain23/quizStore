import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizSection2 from '../QuizSection2/QuizSection2';
import './QuizQuestion.css'

const QuizQuestion = () => {
    const getLodingData = useLoaderData();
    const name = getLodingData.data.name
    // console.log(AllData)
    const questions = getLodingData.data.questions
    console.log(questions)

    return (
        <div className='quiz-question-container'>

            <div className='topic-name'>
                <h3>Quiz of {name} </h3>
            </div>
            <div className='question-container'>
                {
                    questions.map(question => <QuizSection2
                        key={question.id}
                        quizQuestion={question}
                    ></QuizSection2>)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;