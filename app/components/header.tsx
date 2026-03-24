

"use client"


import { useState, useEffect } from "react";


export default function Header(){

    const [ smallScreen, setSmallScreen ] = useState(false);


    useEffect(()=>{
        setSmallScreen(window.innerWidth < 767);
    },[])

    return(
        <div className="flex flex-col w-full border-t border-black">
            <div className="flex flex-row flex-wrap items-center w-full h-auto md:h-[480px]">
                <img className=" h-[225px] md:h-full w-full md:w-[66.67%] object-cover" src="/image1.jpeg" alt="header_img"/>
                <div className="h-full px-5 pt-5 pb-[30px] md:p-8 bg-[#E9ECFF] flex flex-col justify-between w-full md:w-[33.33%]">
                    <div className="text-black text-[28px] md:text-4xl font-bold [font-family:var(--font-tamil)]">FOR THE COMMITTED</div>

                    <div className="flex flex-col  gap-4 ">
                        <div className="text-base text-black [font-family:var(--font-geist-sans)]">Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.

</div>
<div className="text-sm [font-family:var(--font-geist-mono)]">ABOUT US</div>
                    </div>

                </div>
            </div>


               <div className="flex flex-row flex-wrap items-center w-full h-full md:h-[480px]">
                 {smallScreen &&     <img className="w-full md:w-[33.33%] h-[550px] md:h-full object-cover" src="/image2.jpeg" alt="header_img"/>}
              
                <div className= " w-full md:w-[33.33%] h-full p-8 bg-[#E9ECFF] flex flex-col justify-between ">
                    <div className="text-black text-[28px] md:text-4xl font-bold [font-family:var(--font-tamil)]">GUIDED BY EXPERTS</div>

                    <div className="flex flex-col justify-start  gap-4 ">
                        <div className="text-base text-black [font-family:var(--font-geist-sans)]">We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your potential.



</div>

                    </div>

                </div>

                 <div className="w-full md:w-[33.33%] border-t md:border-l border-black  h-full p-8 bg-[#E9ECFF] flex flex-col justify-between ">
                    <div className="text-black text-28px md:text-4xl font-bold [font-family:var(--font-tamil)]">DYNAMIC OPEN GYM</div>

                    <div className="flex flex-col justify-start  gap-4 ">
                        <div className="text-base text-black [font-family:var(--font-geist-sans)]">Our facility is the optimal environment for strength training and performance, equipped with top-of-the-line tools, training areas, and focus on functional movement.



</div>

                    </div>

                </div>

             {!smallScreen &&     <img className="w-full md:w-[33.33%] md:h-full object-cover" src="/image2.jpeg" alt="header_img"/>}
            </div>

        </div>
    )
}