import React from 'react';
import './About.css'
import picture from '../../images/imam-hossen.png'

const About = () => {
    return (
        <div className='about'>
            <div> 
                <p className='about-details'>My  name is <span className='orange'>Imam Hossen</span>. I am a student of Computer Science Technology.Now, I am learning Web development
                    from Web development With Jhankar Mahbub course.I am just focus at a time how to improve me as like back end web
                    developer.So, Now i am learn and do practice how much i do.I set goal after 3 months i wanna entry job sector as a web developer.
                </p>
            </div>
            <div >
                <img src={picture} alt=''></img>
            </div>
            
        </div>
    );
};

export default About;