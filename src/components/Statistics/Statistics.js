import React from 'react';
import './Statistics.css';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const courses = useLoaderData()
    return (
        <div className='chart-grap'>
            <LineChart width={500} height={400} data={courses.data}>
                <Line type="monotone" dataKey='total' stroke="#8884d8" activeDot={{ r: 8 }} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
                <CartesianGrid strokeDasharray="3 3" />
            </LineChart>
        </div>
    );
};

export default Statistics;