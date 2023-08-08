import React from "react";
import arrow from "./images/arrow.svg";
import mon from "./images/mon.jpeg";

const ThirdPage = () => {
  return (
    <div className="rounded-lg shadow-lg bg-cyan-100 p-5 flex items-end justify-between gap-10">
      <div className="p-5">
        <h1 className="text-2xl font-bold">Personalize your credit card</h1>
        <p className="mt-5">
          Create your design or choose from number of amazing and unique
          existing designs. With our personalized credit cards, you can choose
          from a variety of designs and add your own photos or artworks to make
          your card truly on-of-a-kind. You can also select the rewards program
          that best suits your spending habits and earn points or cashback on
          every purchase.
        </p>
        <button className="flex mt-10 bg-red w-60 bg-cyan-600 h-10 p-3 rounded-lg shadow-lg">
          <p className="text-sm">Learn more</p>
          <img src={arrow} className="h-6" />
        </button>
      </div>
      <div>
        <img src={mon} className="h-80 w-80" />
      </div>
    </div>
  );
};

export default ThirdPage;
