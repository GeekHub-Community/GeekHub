"use client"
// import { TImeLine } from "@/data/Event";
import React, { useEffect, useState } from "react"
import { Chrono } from "react-chrono";

const Timeline = () => {

  const [TImeLine, setTImeLine] = useState<[]>([]);


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.npoint.io/6daaa2d887e0762eaddf');
        const data = await response.json();
        setTImeLine(data.TimeLine);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    if (typeof window !== "undefined") {
      fetchData();
    }

  },[])


  return (
    <div className=" md:w-4/5">
      <div className='flex justify-center my-5'>
        <h1 className='text-4xl font-bold'>Timeline</h1>
      </div>
      {TImeLine.length>0 &&<Chrono items={TImeLine} 
        mode="VERTICAL_ALTERNATING"
        timelinePointDimension={20}
        theme={{
          primary: "blue",
          secondary: "#f5f5f5",
          cardBgColor: "rgb(254 249 195 / 0.2);",
          cardForeColor: "violet",
          titleColor: "black",
          titleColorActive: "blue",
        }}
        fontSizes={{
          cardSubtitle: '0.85rem',
          cardText: '0.8rem',
          cardTitle: '1.2rem',
          title: '0.9rem'
        }}
        
        
      />}
    </div>
  )
}
export default Timeline

