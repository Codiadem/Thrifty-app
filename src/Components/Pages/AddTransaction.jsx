import React from 'react'

const AddTransaction = () => {
  return (
    <>
      <h3>Add new Transaction</h3>
      <form>
        <div className='form-control'>
            <label htmlFor="text">Text</label>
            <input type="text" placeholder='Enter text...'/>
        </div>
        <div className='form-control'>
            <label htmlFor="category">Category <br />
            </label>
            <select>
                <option value="groceries">Groceries</option>
                <option value="bills">Bills</option>
                <option value="clothings">Clothings</option>
                <option value="sanitries">Sanitries</option>
                <option value="transportation">Transportation</option>
                <option value="subscriptions">Subscriptions</option>
            </select>
        </div>
        <div className='form-control'>
            <label htmlFor="amount">Amount <br />
                (negative-expense, postive-income)
            </label>
            <input type="number" placeholder='Enter amount...'/>
        </div>

        <button className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
