import React from 'react'
import Image from "./../../images/empty-wallet.avif";
import "./../../style/whytrack.css";

function WhyTrack() {
  return (
    <>
        <div className='contain bg-white flex justify-around'>
            <div className='justify-around,'>
                <div className=''>
                    {/* scroll bar */}
                </div>
                <img src="./../../src/images/empty-wallet.avif" alt="" className='wallet rounded-tl-lg rounded-br-lg ' />
                
            </div>

            <div className='whytrack'>
                <div className=''>
                    <h1 className='font-bold text-5xl text-primaryBlue'>Gain Control Over Your Expenditure</h1>
                    <p className='mt-8 text-black'>Never pay for an unwanted item or service again. 
                        Thrifty instantly finds and tracks your expences, letting 
                        you know what are your needs and luxuries as well as preventing 
                        you are over spending on luxuries.</p>
                    <button className='mt-4 border-solid border-2 text-lg px-6 py-1 rounded-xl text-black'>Learn More</button>
                </div>
            </div>

            
          
        </div>
    </>
  )
}

export default WhyTrack