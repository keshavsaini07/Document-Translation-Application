import { useState } from "react";
import { Navigate } from "react-router-dom";

const HeroSection = () => {
  const [goTranslate, setGoTranslate] = useState(false);

  if(goTranslate){
    return ( <Navigate to="/Translate" />)
  }

  return (
    <div className="my-0 mt-0 h-[85vh] w-[100%] items-center justify-center bg-[#5228f5]">
      <section className=" h-[50%]">
        <h1 className=" h-[100%] text-white flex flex-col gap-16 sm:gap-10 items-center justify-center text-[2.4rem] sm:text-[3.35rem] md:text-[4.5rem] font-bold leading-6 tracking-[0.05rem] text-center p-10">
          <span className=" text-center leading-[3.3rem] flex items-center justify-center">
            Translate English to
          </span>
          <span className=" text-center mt-[-3rem] flex items-center justify-center sm:block sm:mt-[1.5rem] ">
            {" "}
            Hindi
          </span>
        </h1>
      </section>
      <h2 className=" w-[100%] mt-[-0.5rem] py-5 text-center">
        <span className=" p-5 flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-xl font-light text-white">
          Experience Seamless Text Translation
        </span>
      </h2>
      <div className=" flex mt-[-1rem] self-end items-center p-5 justify-center gap-5 h-[25%] w-[100%] ">
        <button onClick={()=>{setGoTranslate(true)}} className="cursor-pointer hover:font-bold text-white bg-blue-950 hover:scale-[1.07] hover:ease-in hover:transition-all text-xs sm:text-sm rounded-full h-[10vh] w-[10rem]">
          Get Started
        </button>
        <button className=" text-white hover:transition-all hover:ease-in font-light hover:border-2 sm:text-base w-[10rem] rounded-md h-[9vh]">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
