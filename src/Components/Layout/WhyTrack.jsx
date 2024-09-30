import React from 'react'
import Image from "./../../../Public/empty-wallet.avif";

import { NavLink, Link } from 'react-router-dom';
function WhyTrack() {
  return (
    <>
        <div className='mt-5 items-center h-full py-24 bg-white flex justify-around'>
            <div className='justify-around,'>
                <div className=''>
                    {/* scroll bar */}
                </div>
                <img src={Image} alt="" className='h-96 items center justify-center rounded-tl-lg rounded-br-lg ' />
                
            </div>

            <div className='h-96 w-2/5 mt-3'>
                <div className=''>
                    <h1 className='font-bold text-5xl text-primaryBlue'>Gain Control Over Your Expenditure</h1>
                    <p className='mt-8 text-black'>Never pay for an unwanted item or service again. 
                        Thrifty instantly finds and tracks your expences, letting 
                        you know what are your needs and luxuries as well as preventing 
                        you from over spending on luxuries.</p>
                    <button type='button' className='mt-4 border-solid border-2 text-lg px-6 py-1 rounded-xl text-black'>
                        <a href="" className="get-started-link">
                            <NavLink to="/about-us">Learn More</NavLink>
                        </a>
                    </button>
                </div>
            </div>

            
          
        </div>
    </>
  )
}

export default WhyTrack