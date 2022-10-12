import React from 'react';
import './Option.css';

import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, rightAnswerHandler }) => {

    return (
        <div>
            <div className='option-style' >
                <input onClick={() => rightAnswerHandler(`${option}`)} type="radio" id={option} name="fav_language" value={option} />
                <label for={option}>{option}</label>
            </div>
        </div>
    );
};

export default Option;