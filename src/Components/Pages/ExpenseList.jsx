import React from 'react'

const ExpenseList = () => {
  return (

    <div className='flex items-center justify-center'>
         {/*container for Expense List */}

     <div className='w-[80%] bg-profileBox mt-[2rem] rounded-lg'>

        <span><h3 className='font-bold text-secondaryBlue pt-[1rem] pl-[4rem]'>History</h3></span>

        {/*container for List Section*/}


        <div className='w-[90%] flex bg-[#E6DEFB] mx-auto my-[2.5rem] shadow-lg rounded-lg'>
            {/*container for vertical divider*/}
            <div className='w-[0.5rem] h-[7rem] bg-[#B60000] rounded-lg ml-[0.6rem]'> </div>
                {/*container for other figures in the list dection*/}
            <div>
                <div>
                    <div>
                    <span>07/09/2023</span>
                    <span>12:00:18</span>
                    </div>

                    <div>
                        <span>2,000</span>
                    </div>

                    <hr className="w-full border-b" />

                    <div>
                        <span>Purchase of Phone Pouch</span>
                    </div>
                </div>
            </div>
        </div>
     </div>

    </div>
  )
}

export default ExpenseList
