
import React from 'react';
import ReactDOM from 'react-dom/client';

import RecentExpensesHeader from './recent-expenses/RecentExpensesHeaders';

import "./style.scss"

export default function Home() {
   return (
      <div className='w-4/5 h-90vh bg-white ml-auto mr-auto overflow-hidden rounded-xl '>
         <div className='w-full h-1/4 bg-green-400 flex items-start justify-end flex-col gap-2 p-10 pl-15 text-white'>
            <h3 className='text-3xl font-poppinsMedium'>My budget</h3>
            <h1 className='text-5xl font-poppinsBold'>535,68 $</h1>
         </div>
         <div className='container h-3/4'>
            <div className='recent gap-5 p-5 flex items-start justify-start flex-col'>
               <h1 className='text-gray-600 font-poppinsSemiBold text-xl'>Recent expenses</h1>
               <div className='bg-gray-50 rounded-lg w-full  overflow-y-scroll flex items-start justify-start flex-col '>
               < RecentExpensesHeader day="today" />
               < RecentExpensesHeader day="yesterday" />
               </div>
            </div>
            <div className='quick gap-5 p-5 flex items-start justify-start flex-col text-gray-600'>
               <h1 className='text-gray-600 font-poppinsSemiBold text-xl'>Quick access</h1>
               <div className='w-full bg-gray-50 rounded-lg p-5 h-full flex items-center justify-around flex-row '>
                  <div className="bg-gray-100 h-2/4 w-auto flex items-center justify-center gap-3 rounded-xl pl-5 pr-5 hover:cursor-pointer hover:scale-110  duration-150 ease-in">
                     <button className='bg-gray-200 w-15 h-15 rounded-full border-2 border-gray-300 border-dotted font-poppinsMedium text-2xl'>+</button>
                     <h3 className='font-poppinsSemiBold'>Add expense</h3>
                  </div>
                  <div className="bg-gray-100 h-2/4 w-auto flex items-center justify-center gap-3 rounded-xl pl-5 pr-5 hover:cursor-pointer hover:scale-110  duration-150 ease-in">
                     <button className='bg-gray-200 w-15 h-15 rounded-full border-2 border-gray-300 border-dotted font-poppinsMedium text-2xl'>+</button>
                     <h3 className='font-poppinsSemiBold'>Add expense</h3>
                  </div>
                  <div className="bg-gray-100 h-2/4 w-auto flex items-center justify-center gap-3 rounded-xl pl-5 pr-5 hover:cursor-pointer hover:scale-110  duration-150 ease-in">
                     <button className='bg-gray-200 w-15 h-15 rounded-full border-2 border-gray-300 border-dotted font-poppinsMedium text-2xl'>+</button>
                     <h3 className='font-poppinsSemiBold'>Add expense</h3>
                  </div>
               </div>
            </div>
            <div className='summary gap-5 p-5 flex items-start justify-start flex-col'>
               <h1 className='text-gray-600 font-poppinsSemiBold text-xl'>Monthly summary</h1>
               <div className='w-full bg-gray-50 rounded-lg p-5 h-full'>
                  s
               </div>
            </div>
         </div>
      </div>
   );
}