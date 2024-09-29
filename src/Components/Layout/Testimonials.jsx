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
        slidesToScroll: 2,
    };
  return (
    <>
        <div className='bg-blue cont'>
        <h1 className='text-center text-4xl font-semibold pt-8 text-white'>Testimonials</h1>
        <div className='w-3/4 m-auto bg-grey'>
            <div className='mt-0 bg-grey'>
                <Slider {...settings}>
                    {data.map((d) => (
                    <div className='bg-white h-[450px] text-black rounded-xl'>
                        <div className='h-56 rounded-t-xl bg-primaryBlue flex justify-center items-center'>
                            <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4 p-4'>
                            <p className='text-xl font-semibold text-black'>{d.name}</p>
                            <p>{d.review}</p>
                            <button className='bg-primaryBlue text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                        </div>
                    </div> 
                    ))}
                </Slider>
            </div>
        </div>
        </div>
    </>
  );
}

const data = [
    {
        name: `Keziah Ching`,
        img: `/Public/Keziah.jpg`,
        review: "Thrifty is a very user friendly app that has really helped in keeping track of my expenditures and im grateful for that",
    },
    {
        name: `Tawakalitu`,
        img: `/Public/Tawakalitu.jpg`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    },
    {
        name: `Chioma Ekpemerechi`,
        img: `/Public/profile-img.png`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    },
    {
        name: `Keziah Ching`,
        img: `/Public/Keziah.jpg`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    },
    {
        name: `Tawakalitu`,
        img: `/Public/Tawakalitu.jpg`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    },
    {
        name: `Chioma Ekpemerechi`,
        img: `/Public/profile-img.png`,
        review: `Thrifty is a very user friedndly app that has really helped in keeping track of my expenditures and im grateful for that`,
    }
]

export default Testimonials