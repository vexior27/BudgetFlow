
import React from 'react';
import ReactDOM from 'react-dom/client';

import RecentExpenses from './RecentExpenses';

export default function Home() {
   return (
      <div className='w-4/5 h-90vh bg-white ml-auto mr-auto rounded-xl top-1/2 overflow-hidden'>
         <div className='w-full h-1/4 bg-green-400 flex items-start justify-end flex-col gap-2 p-10 pl-15 text-white'>
            <h3 className='text-2xl font-poppinsMedium'>My budget</h3>
            <h1 className='text-5xl font-poppinsBold'>535,68 $</h1>
         </div>
         <div className='p-10 flex flex-col gap-3'>
            <h1 className='text-gray-600 font-poppinsSemiBold text-xl'>Recent expenses</h1>
            <div className='bg-gray-50 rounded-lg w-1/3 max-h-2/3 p-5 flex items-center justify-center flex-col gap-2 flex-1'>
               < RecentExpenses />
               < RecentExpenses />
               < RecentExpenses />
               < RecentExpenses />
               < RecentExpenses />
            </div>
         </div>
      </div>
   );
}