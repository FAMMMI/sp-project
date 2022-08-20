import React from 'react';

const Banner = () => {
    return (
        <div className='m-10'>
            <div class="carousel w-full h-100">
                <div id="slide2" class="carousel-item relative w-full">
                    <img className='w-full h-50 ' src="https://d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2020/06/26195634/Swayam-brings-to-you-free-online-courses-to-catapult-your-career.png" ></img>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img className='w-full h-50' src="https://elearningindustry.com/wp-content/uploads/2020/08/8-proven-steps-to-create-a-profitbale-online-course.jpg" class="w-full "></img> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img className='w-full h-50' src="https://www.thetilt.com/wp-content/uploads/2021/12/Online-Course-2-1280x640.jpeg" class="w-full"></img> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;