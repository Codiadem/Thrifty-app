import React from 'react';
import { Trash } from 'react-feather'; // Import an icon for delete

const ExpenseList = ({ transactions, onDelete }) => {
  return (
    <div className='flex items-center justify-center'>
      {/* Container for Expense List */}
      <div className='w-[80%] bg-profileBox mt-[2rem] rounded-lg'>
        <h3 className='font-bold text-secondaryBlue pt-[1rem] pl-[4rem]'>History</h3>

        {/* Loop through transactions */}
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`w-[90%] flex bg-[#E6DEFB] mx-auto my-[2.5rem] shadow-lg rounded-lg justify-around`}
            >
              {/* Color the vertical divider based on amount type */}
              <div className={`w-[0.5rem] h-[7rem] ${transaction.amount < 0 ? 'bg-[#a82525]' : 'bg-[#23a64e]'} rounded-lg`}></div>
              <div className='w-[95%] mx-0 my-auto'>
                <div className='flex justify-between pb-[0.6rem]'>
                  <div className='text-primaryBlue font-semibold'>
                    <span className='mr-3'>{transaction.date}</span>
                    <span>{transaction.time}</span>
                  </div>

                  {/* Apply red color for negative amounts, green for positive */}
                  <div className='flex items-center gap-4'>
                    <span className={`${transaction.amount < 0 ? 'text-[#a82525]' : 'text-[#23a64e]'} font-bold text-xl`}>
                      {transaction.amount < 0 ? `-₦${Math.abs(transaction.amount)}` : `₦${transaction.amount}`}
                    </span>

                    {/* Delete Button */}
                    <button
                      onClick={() => onDelete(transaction.id)}
                      className='text-[#a82525] hover:text-[#ff4d4d] transition-all'
                      aria-label="Delete Transaction"
                    >
                      <Trash />
                    </button>
                  </div>
                </div>
                <hr className="w-full border-0 h-[0.1rem] bg-[#C2C2C2] rounded-lg" />
                <div>
                  <span className='text-primaryBlue font-bold text-xl'>{transaction.text}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-primaryBlue'>No transactions added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
