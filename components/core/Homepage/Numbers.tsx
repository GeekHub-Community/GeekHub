import React from "react";
import "@/styles/Numbers.css";
import CountUp from 'react-countup';
import { CountNumbers } from "@/data/Numbers";

const Numbers = () => {
  return (
    <>
      <p className="text-center font-bold text-2xl pt-[50px] uppercase" data-aos='fade-up'>
        So far we have witnessed
        <hr className="intro-head-hr" />
      </p>

      <div className="aeccc-count-container">
        {
          CountNumbers.map((num)=>(
            <div key={num.title} className="count-box">
              <p id="downloads__count">
              <CountUp end={num.count}/>+
              </p>
              <p id="downloads__description">{num.title}</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Numbers;
