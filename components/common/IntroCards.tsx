import Image from "next/image";

export const IntroCards = ({ icon, title, desc }:any) => {
  return (
    <div className="shadow p-5" data-aos="flip-right" data-aos-delay="300">
      <div className=" flex justify-center p-2">
        <Image alt="icons" src={`${icon}`} width={40} height={50}/>
    </div>
      <p className="text-center p-2 font-semibold text-2xl">{title}</p>
      <div className=" flex justify-center">
         <p className="w-4/5 text-xs md:text-sm text-black/80"> {desc}</p> 
      </div>
    </div>
  );
};
