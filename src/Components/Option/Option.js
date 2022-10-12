import React from 'react';
import './Option.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option }) => {
    return (
        <div>
            <div>
                <input type="radio" id={option} name="fav_language" value={option} />
                <label for={option}>{option}</label>
            </div>
        </div>
    );
};

export default Option;