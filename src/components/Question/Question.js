import React from 'react';
import './Question.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const Question = ({ques}) => {
    console.log(ques);
    const {correctAnswer, options, question} = ques;
    const handleOptionBtn = (id)=>{
        if(id.option === correctAnswer){
            
            toast('Correct Answer!!')
        }else{
            
            toast ('Opps!! Answer is wrong..')
        }
    }
    const ans = (ques) =>{
        // console.log(ques);
        toast(`${ques}`)
    }
    return (
        <div>
            <div className='ques-option'>
                <div className='d-flex justify-content-between'>
                    <h4
                    dangerouslySetInnerHTML={{__html:question}}
                    ></h4>
                    <p> 
                        <button className='corr-ans-btn' onClick={()=>{ans(correctAnswer)}}>
                            <p>
                                <EyeIcon className='h-6 w-6 text-blue-500'></EyeIcon>
                            </p>
                        </button> 
                        
                    </p>
                </div>
                <div>
                    {
                        options.map(option=><div>
                            <button className='option-btn' onClick={()=>handleOptionBtn({option})} > {option}</button>
                            </div>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Question;