import React from 'react';
import UncontrolledExample from '../Carousal/Carosuel';
import Courses from '../Courses/Courses';
import './Home.css';


const Home = () => {
    return (
        <div className='w-75 mx-auto'>
            <div className='first-banner'>
            <div className="right-part">
                     “Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.”
                     Abigail Adams
                    <h3>Judge Yourself!!!</h3>
                </div>
               <div className='left-site'>
                     <UncontrolledExample></UncontrolledExample>
               </div>
               
            </div>
            <div>
                    <Courses></Courses>
               </div>
        </div>
    );
};

export default Home;