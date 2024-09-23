import React from "react";
import ReactDOM from 'react-dom/client';

import { IoIosArrowForward } from "react-icons/io";

export default function RecentExpenses() {
   return (
      <div className="container bg-gray-100 rounded-md w-full h-20 hover:cursor-pointer hover:bg-gray-200 flex items-start justify-center overflow-hidden duration-150 ease-in text-gray-600">
         <div className="imageContainer w-1/5  h-full flex items-center justify-center">
            <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/cityscape-at-dusk.png" alt="img"
            className="w-2/3"/>
         </div>
         <div className="titleContainer w-3/5 h-full flex items-center justify-start ml-4">
            <h3 className="text-xl font-poppinsSemiBold">Trip</h3>
         </div>
         <div className="arrowContainer w-1/5 h-full flex items-center justify-end pr-4 text-2xl">
            < IoIosArrowForward />
         </div>
      </div>
   )
}