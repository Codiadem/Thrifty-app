import React from 'react';
import { X } from 'react-feather';


const TransactionPoup = ({ open, onClose, children}) => {
  return (
    <div onClick={onClose} className={`
    fixed inset-0 flex justify-center items-center transition-colors
     ${open ? "visible bg-[#0000]/20 " : "invisible"} 
     ` }> 
      
      {/* Modal */}

      <div 
        onClick={e => e.stopPropagation()}
        className={`
       bg-white rounded-xl shadow p-6  w-[60%] transition-all
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}>

            <button 
            onClick={onClose}
            className='absolute top-2 right-2 p-1 rounded-lg
            text-[#9CA3AF] bg-white hover:bg-[#F9FAFB] hover:text-[#4B5563]'>

            <X />
            </button>
      {children}

      </div>
    </div>
  )
}

export default TransactionPoup
