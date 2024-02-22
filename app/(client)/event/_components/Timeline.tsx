"use client"
import { TImeLine } from "@/data/Event";
import React from "react"
import { Chrono } from "react-chrono";

const Timeline = () => {

  if (typeof window === "undefined") {
    return null; 
  }

  return (
    <div className="w-4/5">
      <div className='flex justify-center mt-5 mb-5'>
        <h1 className='text-4xl font-bold'>Timeline</h1>
      </div>
      <Chrono items={TImeLine} 
      mode="VERTICAL_ALTERNATING"
        timelinePointDimension={20}
        className="timeline"
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
          title: '1.5rem',
        }}
      />
    </div>
  )
}
export default Timeline

