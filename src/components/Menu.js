
import React from 'react';
import ReactDOM from 'react-dom/client';
import TripsMenu from "./menu/Trips";
import GraphsMenu from "./menu/Graphs";
import ExpensesMenu from "./menu/Expenses";
import HomeMenu from "./menu/Home";
import Account from './menu/Account';

export default function Menu() {
   return (
      <div className='h-screen w-1/6 bg-white flex justify-start items-center flex-col gap-5 p-2 pt-10'>
         < Account />
         < HomeMenu />
         < ExpensesMenu />
         < GraphsMenu />
         < TripsMenu />
      </div>
   );
}