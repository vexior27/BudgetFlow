import React from "react";
import ReactDOM from 'react-dom/client';

import RecentExpenses from "./RecentExpenses";

export default function RecentExpensesHeader(props) {
   return (
      <div className="w-full">
         <div className="font-poppinsSemiBold  p-3 pb-0 pl-5 text-xl text-gray-600 capitalize">
            {props.day}
         </div>
         <div className="p-5 flex items-center justify-start flex-col gap-3 ">
            < RecentExpenses name="Groceries" imgSrc="https://em-content.zobj.net/source/apple/81/credit-card_1f4b3.png" price="60,00"/>
            < RecentExpenses name="Home" imgSrc="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/house.png" price="150,00"/>
            < RecentExpenses name="Pizza" imgSrc="https://em-content.zobj.net/source/apple/129/slice-of-pizza_1f355.png" price="15,00"/>
         </div>
      </div>
   )
}