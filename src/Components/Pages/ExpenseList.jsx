import React from 'react'

const ExpenseList = () => {
  return (

    <div className='flex items-center justify-center'>
         {/*container for Expense List */}

     <div className='w-[80%] bg-profileBox mt-[2rem] rounded-lg'>

        <span><h3 className='font-bold text-secondaryBlue pt-[1rem] pl-[4rem]'>History</h3></span>

        {/*container for List Section starts here*/}


        <div className='w-[90%] flex bg-[#E6DEFB] mx-auto my-[2.5rem] shadow-lg rounded-lg justify-around'>
            {/*container for vertical divider*/}
            <div className='w-[0.5rem] h-[7rem] bg-[#a82525] rounded-lg'> </div>
                {/*container for other figures in the list dection*/}
            <div className='w-[95%]  mx-0 my-auto '>
                <div>
                    <div className='flex justify-between pb-[0.6rem]'>
                         <div className=' text-primaryBlue font-semibold'>
                            <span className='mr-3'>07/09/2023</span>
                            <span >12:00:18</span>
                        </div>

                        <div>
                            <span className='text-[#a82525] font-bold text-xl'>2,000</span>
                        </div>
                    </div>
                    <hr className="w-full border-0 h-[0.1rem] bg-[#C2C2C2] rounded-lg" />

                    <div>
                        <span className=' text-primaryBlue font-bold text-xl'>Purchase of Phone Pouch</span>
                    </div>
                </div>
            </div>
        </div>

         {/*container for List Section ends here*/}
         

          {/*container for List Section starts here*/}


        <div className='w-[90%] flex bg-[#E6DEFB] mx-auto my-[2.5rem] shadow-lg rounded-lg justify-around'>
            {/*container for vertical divider*/}
            <div className='w-[0.5rem] h-[7rem] bg-[#23a64e] rounded-lg'> </div>
                {/*container for other figures in the list dection*/}
            <div className='w-[95%]  mx-0 my-auto'>
                <div>
                    <div className='flex justify-between pb-[0.6rem]'>
                         <div className=' text-primaryBlue font-semibold'>
                            <span className='mr-3'>07/09/2023</span>
                            <span>12:00:18</span>
                        </div>

                        <div>
                            <span className='text-[#23a64e] font-bold text-xl'>20,000</span>
                        </div>
                    </div>
                    <hr className="w-full border-0 h-[0.1rem] bg-[#C2C2C2] rounded-lg" />

                    <div>
                        <span className=' text-primaryBlue font-bold text-xl'>Profit from cake</span>
                    </div>
                </div>
            </div>
        </div>

         {/*container for List Section ends here*/}

     </div>

    </div>
  )
}

export default ExpenseList
