import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';
import './Topics.css'

const Topics = () => {
    const getData = useLoaderData();
    const subjects = getData.data;
    // console.log(subjects)

    return (
        <div>
            <div className='bg-image'>
                <img src="https://t3.ftcdn.net/jpg/02/31/07/66/360_F_231076694_rxAik9swiCT8WEwHfYXu0noL7K8a382k.jpg" alt="" />
            </div>
            <div className='subjects'>
                {
                    subjects.map(subject => <Subject
                        key={subject.id}
                        subject={subject}
                    ></Subject>)
                }
            </div>
        </div>
    );
};

export default Topics;