import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../style/testimonials.css";

function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
  return (
    <>
        <h1 className='text-center text-3xl font-semibold mt-5 text-primaryblue'>Testimonials</h1>
        <div className='w-3/4 m-auto'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {data.map((d) => (
                    <div className='bg-white h-[450px] text-black rounded-xl'>
                        <div className='h-56 rounded-t-xl bg-primaryBlue flex justify-center items-center'>
                            <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4 p-4'>
                            <p className='text-xl font-semibold'>{d.name}</p>
                            <p>{d.review}</p>
                            <button className='bg-primaryBlue text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                        </div>
                    </div> 
                    ))}
                </Slider>
            </div>
        </div>
    </>
  );
}

const data = [
    {
        name: `Keziah Ching`,
        img: `/src/images/Keziah.jpg`,
        review: "Thrifty is a very user friendly app that has really helped in keeping track of my expenditures and im grateful for that",
    },
    {
        name: `Keziah Ching`,
        img: `/src/images/Tawakalitu.jpg`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    },
    {
        name: `Keziah Ching`,
        img: `/src/images/Keziah.jpg`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    },
    {
        name: `Keziah Ching`,
        img: `/src/images/Keziah.jpg`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    },
    {
        name: `Keziah Ching`,
        img: `/src/images/Keziah.jpg`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    },
    {
        name: `Keziah Ching`,
        img: `/src/images/Keziah.jpg`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    }
]

export default Testimonials