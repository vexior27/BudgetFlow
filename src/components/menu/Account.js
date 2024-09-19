
import React from 'react';
import ReactDOM from 'react-dom/client';




export default function Account() {
   return (
      <div className='bg-gray-50 w-3/4 h-1/4 mb-5 flex items-center justify-center flex-col gap-4 rounded-lg'>
         <div className='w-3/5 h-3/5 bg-gray-100 rounded-full'>
            <img/>
         </div>
         <p className='text-gray-700 font-poppinsSemiBold text-xl'>UserName</p>
      </div>
   );
}