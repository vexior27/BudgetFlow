
import React from 'react';
import ReactDOM from 'react-dom/client';

import { AiFillHome } from "react-icons/ai";

export default function HomeMenu() {
   return (
      <div className='bg-gray-100  p-3 px-5 m-30 w-3/4 font-semibold text-gray-600 text-lg duration-150 ease-in hover:bg-green-400 hover:cursor-pointer hover:text-white  rounded-md font-poppinsRegular'>  
         <p className='flex items-center justify-start gap-3'><AiFillHome />Home</p>
      </div>
   );
}