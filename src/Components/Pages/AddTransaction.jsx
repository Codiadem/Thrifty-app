import React, { useState } from 'react';
import TransactionPoup from '../Layout/TransactionPoup';

const AddTransaction = ({ setTransactions }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();

    // Create a new transaction object
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), // Random ID generation
      text,
      amount: +amount, // Convert string to number
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      category
    };

    // Add the new transaction to the list
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);

    // Close the modal and reset form
    setOpen(false);
    setText('');
    setAmount(0);
    setCategory('');
  };

  return (
    <>
      {/* Add new Transaction Button */}
      <div className='flex items-center justify-center'>
        <button
          className="mt-5 tracking-wide font-bold bg-primaryBlue text-[#FFFFFF] w-[12rem] sm:w-[20rem] 
          md:w-[25rem] lg:w-[30rem] self-auto py-4 rounded-lg hover:bg-[#9294f7] 
          transition-all duration-300 ease-in-out flex items-center justify-center 
          focus:shadow-outline focus:outline-none"
          onClick={() => setOpen(true)}
        >
          Add transaction
        </button>
      </div>

      {/* TransactionPoup Modal */}
      <TransactionPoup open={open} onClose={() => setOpen(false)}>
        <div className='text-center w-60%'>
          <div className='mx-auto my-4 p-10'>
            <h2 className='form-title pb-[3rem] text-3xl text-[#371694] font-bold font-DMSans'> Add Transaction</h2>

            <form onSubmit={handleAddTransaction}>
              <div className='form-control'>
                <input 
                  className="form-control w-full px-5 py-5 mb-8 rounded-lg font-medium bg-[#F5F4F8]  
                  placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder='Enter text...'
                  required
                />
              </div>

              <div className='form-control'>
                <select
                  className="form-control w-full px-5 py-5 mb-8 rounded-lg font-medium bg-[#F5F4F8]  
                  placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>Select Category</option>
                  <option value="groceries">Groceries</option>
                  <option value="bills">Bills</option>
                  <option value="clothings">Clothings</option>
                  <option value="sanitaries">Sanitaries</option>
                  <option value="transportation">Transportation</option>
                  <option value="subscriptions">Subscriptions</option>
                  <option value="gadgets">Gadgets</option>
                  <option value="income">Income</option>
                </select>
              </div>

              <div className='form-control'>
                <input
                  className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8]  
                  placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" 
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder='Enter amount...'
                  required
                />
              </div>

              <div className='flex gap-6 justify-center items-center mt-8'>
                <button
                  type="submit"
                  className='mt-5 tracking-wide font-bold bg-[#23a64e] text-[#FFFFFF] w-[12rem] sm:w-[20rem] 
                  md:w-[25rem] lg:w-[16rem] self-auto py-4 rounded-lg hover:bg-[#1b7a3a] 
                  transition-all duration-300 ease-in-out flex items-center justify-center 
                  focus:shadow-outline focus:outline-none'
                >
                  Add Transaction
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className='mt-5 tracking-wide font-bold bg-[#FFFFFF] text-[#a82525] border w-[12rem] sm:w-[20rem] 
                  md:w-[25rem] lg:w-[16rem] self-auto py-4 rounded-lg hover:bg-[#bf5757] hover:text-[#FFFFFF]
                  transition-all duration-300 ease-in-out flex items-center justify-center 
                  focus:shadow-outline focus:outline-none'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </TransactionPoup>
    </>
  );
};

export default AddTransaction;
