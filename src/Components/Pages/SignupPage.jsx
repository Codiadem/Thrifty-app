import React from 'react'
import logo from '../assets/Thrifty-logo.png'

const SignupPage = () => {
  return (
      <div>
            {/*container for Signup page */}

            <div className='Container flex mx-auto min-h-screen text-center'> 

                {/*container for background starts here */}

                <div className='background w-1/2 bg-[#371694] flex items-center justify-center'>

                   <div>
									  	<img src={logo} alt="" className=" w-11.2" />
									</div>

                </div>
                {/*container for Form starts here */}
                <div className='form-container w-1/2 p-9'>
                    <form className='inner-container items-center'>
                      <h2 className='form-title pb-[3rem] text-3xl text-[#371694] font-bold'> Sign Up</h2>

                      <div className='form-group flex items-center justify-center gap-2 py-3'>
                       
                        <input 
                        className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8] border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text" 
                        name='name'
                        placeholder='Name'
                        />
                      </div>

                      <div className='form-group flex items-center justify-center gap-2 py-3'>
                       
                        <input 
                       className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8] border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email" 
                        name='email'
                        placeholder='Email'
                        />
                      </div>

                      <div className='form-group flex items-center justify-center gap-2 py-3'>
                       
                        <input 
                        className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8] border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="password" 
                        name='password'
                        placeholder='Password'
                        />
                      </div>

                      <div className='form-group flex items-center justify-center gap-2 py-3'>
                  
                        <input 
                       className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8] border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="password" 
                        name='confirmpassword'
                        placeholder='Confirm Password'
                        />
                      </div>

                      <div className='form-group'>
                        <input className="mt-5 tracking-wide font-bold bg-[#A7A8FD] text-[#371694] w-full self-auto py-4 rounded-lg hover:bg-[#9294f7] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" type="submit" value='Signup' />
                      </div>
                      
                    </form>
              

                   </div>

            </div>
    </div>
  )
}

export default SignupPage
