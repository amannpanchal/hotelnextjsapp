'use client'
import { Button, Carousel } from 'antd';
import React from 'react';


const Cara = () => {
    const carouselData = [
        {
            image: "https://images7.alphacoders.com/362/362619.jpg",
            title: "Unmatched Personalized Service",
            description: "Experience personalized service tailored to your needs."
        },
        {
            image: "https://images5.alphacoders.com/349/349822.jpg",
            title: "Exceptional Hospitality Standards",
            description: "Impeccable hospitality that exceeds expectations."
        },
        {
            image: "https://images8.alphacoders.com/373/373571.jpg",
            title: "Prime Locations",
            description: "Discover our hotels in prime locations, offering convenience and accessibility."
        },
        {
            image: "https://images6.alphacoders.com/349/349835.jpg",
            title: "Luxurious Accommodations",
            description: "Indulge in luxury and comfort in our meticulously designed accommodations."
        },
    ]


    const customNextArrow = (
        <Button type="primary" shape="circle" icon={< >Left</>} />
    );

    const customPrevArrow = (
        <Button type="primary" shape="circle" icon={< >Right</>} />
    );

    return (
        <div className="carousel-container my-[50px]  relative w-[100%] ">
            <Carousel dots autoplay nextArrow={customNextArrow} prevArrow={customPrevArrow}>
                {carouselData.map((slide, index) => (
                    <div
                        className='m-auto w-[90vw] flex justify-center items-center  px-[10px]'
                   
                        key={index}>
                        <div className='w-[90vw]
                        bg-black
                        rounded-[20px]
                        
                        m-auto relative'>
                           
                        <div className="carousel-text  left-[4px]  bottom-[32px]  left-[10px] text-[white]  absolute z-40 md:bottom-[100px] md:left-[100px]   ">
                                <h3 className='text-[34px] leading-[42px] md:text-[60px]' >{slide.title}</h3>
                                <p className='text-[18px]  leading-[25px] mt-[20px]' >{slide.description}</p>
                            </div>
                            
                            <img
                                
                            className='
                            object-cover
                          
                            opacity-25

                            bg-[black]

                            rounded-[20px]
                            z-0 top-0 w-[90vw] h-[80vh]'
                            
                            src={slide.image}  alt={`Image ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </Carousel>
            <div>
 
            </div>
        </div>
    );
};

export default Cara;
