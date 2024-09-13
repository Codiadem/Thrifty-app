import React from 'react'
import TransactionPoup from '../Layout/TransactionPoup'
import { useState } from 'react'

const AddTransaction = () => {

    const [open, setOpen] = useState(false)
  return (
    <>
      {/*Add new Transaction */}

       <div className='flex items-center justify-center'>
            <button className="mt-5 tracking-wide font-bold bg-primaryBlue text-[#FFFFFF] w-[12rem] sm:w-[20rem] 
            md:w-[25rem] lg:w-[30rem] self-auto py-4 rounded-lg hover:bg-[#9294f7] 
            transition-all duration-300 ease-in-out flex items-center justify-center 
            focus:shadow-outline focus:outline-none" onClick={() => setOpen(true)}> Add transaction</button>
        </div>


        {/* TransactionPoup Children Modal Starts Here */}

        <TransactionPoup open={open} onClose={() => setOpen(false)}>
            <div className='text-center w-60%'>
              <div className='mx-auto my-4 p-10'>

              <h2 className='form-title pb-[3rem] text-3xl text-[#371694] font-bold font-DMSans'> Add Transaction</h2>

              <form>
                  <div className='form-control'>
                      {/*<label htmlFor="text">Text</label>*/}
                      <input 
                      className="form-control w-full px-5 py-5 mb-8 rounded-lg font-medium bg-[#F5F4F8]  
                      placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                       placeholder='Enter text...'/>
                  </div>
                  <div className='form-control'>

                     {/*<label htmlFor="category">Category  </label>*/}
                      <select
                      className="form-control w-full px-5 py-5 mb-8 rounded-lg font-medium bg-[#F5F4F8]  
                      placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                          <option value="groceries">Groceries</option>
                          <option value="bills">Bills</option>
                          <option value="clothings">Clothings</option>
                          <option value="sanitries">Sanitries</option>
                          <option value="transportation">Transportation</option>
                          <option value="subscriptions">Subscriptions</option>
                      </select>
                  </div>
                  <div className='form-control'>
                      {/*<label htmlFor="category"> Amount </label>*/}

                      <input
                      className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8]  
                      placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" 
                      type="number" 
                      placeholder='Enter amount...'/>
                  </div>
               </form>
              </div>
            </div>
        </TransactionPoup>
       
    </>
  )
}

export default AddTransaction
