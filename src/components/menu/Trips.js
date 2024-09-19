
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaPlaneDeparture } from "react-icons/fa6";

export default function TripsMenu() {
   return (
      <div className='bg-none  p-3 px-5 m-30 w-3/4  font-semibold text-gray-600 text-lg duration-150 ease-in hover:bg-green-400 hover:cursor-pointer hover:text-white  rounded-md font-poppinsRegular'>  
         <p className='flex items-center justify-start gap-3'><FaPlaneDeparture />Trips</p>
      </div>
   );
}

