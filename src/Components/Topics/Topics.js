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