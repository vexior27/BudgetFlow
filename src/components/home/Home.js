
import React from 'react';
import ReactDOM from 'react-dom/client';

import RecentExpensesHeader from './recent-expenses/RecentExpensesHeaders';

export default function Home() {
   return (
      <div className='w-4/5 h-90vh bg-white ml-auto mr-auto rounded-xl top-1/2 overflow-hidden'>
         <div className='w-full h-1/4 bg-green-400 flex items-start justify-end flex-col gap-2 p-10 pl-15 text-white'>
            <h3 className='text-3xl font-poppinsMedium'>My budget</h3>
            <h1 className='text-5xl font-poppinsBold'>535,68 $</h1>
         </div>
         <div className='flex items-start justify-start p-5 gap-5'>
            <div className='w-2/5 gap-5 p-5 flex items-start justify-start flex-col'>
               <h1 className='text-gray-600 font-poppinsSemiBold text-xl'>Recent expenses</h1>
               <div className='bg-gray-50 rounded-lg w-full h-2/3  overflow-scroll flex items-start justify-start flex-col '>
               < RecentExpensesHeader day="today" />
               < RecentExpensesHeader day="yesterday" />
               </div>
            </div>
            <div className='w-3/5 gap-5 p-5 flex items-start justify-start flex-col'>
               <h1 className='text-gray-600 font-poppinsSemiBold text-xl'>Qucik access</h1>
            </div>
         </div>
      </div>
   );
}