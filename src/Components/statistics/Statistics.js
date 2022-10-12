import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const datas = useLoaderData()
    const data = datas.data
    // console.log(data)

    return (
        <div >
            <div>
                <h3 className='barChart-title'>This bar-chart represents the total quiz number for every topic :</h3>
            </div>
            <div className='bar-chart'>
                <BarChart width={430} height={250} data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>

            </div>

        </div>
    );
};

export default Statistics;