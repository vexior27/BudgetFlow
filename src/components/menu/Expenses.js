
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaWallet } from "react-icons/fa";

export default function ExpensesMenu() {
   return (
      <div className='bg-none  p-3 px-5 m-30 w-3/4 font-semibold text-gray-600 text-lg duration-150 ease-in hover:bg-green-400 hover:cursor-pointer hover:text-white  rounded-md font-poppinsRegular'>  
         <p className='flex items-center justify-start gap-3'><FaWallet />Expenses</p>
      </div>
   );
}