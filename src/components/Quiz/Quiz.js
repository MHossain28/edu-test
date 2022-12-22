import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const [allQuizesData, setAllQuizesData]= useState([]);
    useEffect(() => {
        const allQuizData = async() =>{
            const data = await fetch('https://openapi.programming-hero.com/api/quiz')
            const finalData =await data.json();
            setAllQuizesData(finalData.data);
        }
        allQuizData();
    }, [])

    const quiz = useLoaderData();
    const getQuizName = allQuizesData.find(item=>item.id === quiz?.data?.id);
    return (
        <div>
            <h2 className='quiz-name'>Quiz Of {getQuizName?.name}</h2>
            <div className="ques-page">
                {
                quiz.data.questions.map(ques=> <Question
                    key={ques.id}
                    ques={ques}
                ></Question>)
            }
            </div>
        </div>
    );
};

export default Quiz;