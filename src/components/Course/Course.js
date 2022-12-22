import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Course = ({course}) => {
    
    
    const {id, name, logo, total} = course;
    return (
        <div >
            <Card className='card m-auto my-4' style={{ width: '' }}>
                <Card.Img className='bg-secondary' variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> Total Quiz: {total} </Card.Text>
                    <Link to={`/quiz/${id}`}><Button variant="dark">Start Quiz</Button></Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;