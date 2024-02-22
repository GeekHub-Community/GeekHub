import React from "react";
// import "@/styles/Numbers.css";
import CountUp from 'react-countup';
import { CountNumbers } from "@/data/Numbers";

const Numbers = () => {
  return (
    <>
      <div className="text-center font-bold text-2xl pt-[50px] uppercase" data-aos='fade-up'>
        So far we have witnessed
        <hr className="intro-head-hr" />
      </div>

      <div className="aeccc-count-container flex flex-wrap justify-center items-center gap-6 md:gap-36">
        {
          CountNumbers.map((num)=>(
            <div key={num.title} className="count-box h-40 md:h-60 flex flex-col items-center justify-center ">
              <p id="downloads__count" className="font-[500] text-[1.2rem] lg:text-[1.9rem]">
              <CountUp end={num.count}/>+
              </p>
              <p id="downloads__description" className="text-[0.7rem] md:text-[0.8rem]">{num.title}</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Numbers;
