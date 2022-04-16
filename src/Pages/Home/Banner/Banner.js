import React from 'react';
import banner2 from '../../../images/banner-pic .jpg'
import bannerPic from '../../../images/service-2.jpg'
import bannerPic2 from '../../../images/banner-pic (2).jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner ' style={{ backgroundImage: `url(${bannerPic2})` }} >
            <div>
                <p className='doctor-tittle'>Hi! My name is <span className='text-danger'>Mary Doe</span><br />
                    I am a <span className='blue'>Doctor</span>
                </p>
                <button  className='btn btn-success ms-5'>About Me.</button>
            </div>
        </div>
    );
};

export default Banner;