"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';

export default function Potential(){

    const [ smallScreen, setSmallScreen ] = useState(false);

    useEffect(()=>{
        setSmallScreen(window.innerWidth<768)
    },[])



    const router = useRouter();
    return(
        <div className="flex flex-row flex-wrap items-center  h-auto  w-full border-t border-black">

{smallScreen &&      <img className="h-[570.500px] md:h-full  w-full md:w-[60%] object-cover" src="/image3.jpeg" alt="potential_image"/>}

            <div className="flex flex-col justify-between  bg-[#E9ECFF] h-full  w-full md:w-[40%]">

                                    <div className="text-black text-[28px] md:text-4xl font-bold [font-family:var(--font-tamil)]  p-5 md:p-8">GUIDED BY EXPERTS</div>


                                    <div className="flex flex-col p-5 md:p-8 border-t-1 border-black">

                                        <div className="text-2xl text-black font-bold [font-family:var(--font-tamil)] ">EXPERT COACHING</div>
                                        <div className="text-base [font-family:var(--font-geist-sans)]">Trainers who are passionate about your progress.

</div>

                                    </div>

                                         <div className="flex flex-col p-5 md:p-8 border-t-1 border-black">

                                        <div className="text-2xl text-black font-bold [font-family:var(--font-tamil)] ">RESULTS-DRIVEN PROGRAMS
</div>
                                        <div className="text-base [font-family:var(--font-geist-sans)]">Workouts that deliver tangible, measurable results.



</div>

                                    </div>

                                         <div className="flex flex-col p-5 md:p-8 border-t-1 border-black">

                                        <div className="text-2xl text-black font-bold [font-family:var(--font-tamil)] ">A SUPPORTIVE TRIBE</div>
                                        <div className="text-base [font-family:var(--font-geist-sans)]">A community that pushes you to be your best.



</div>

                                    </div>

                                             <div className="flex items-center justify-center md:justify-start px-5 py-[30px] md:p-8 border-t-1 border-black">

                                                                <button onClick={()=>router.push("/reserve")} className=" border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >VIEW CLASSES</button>


      

                                    </div>

                                    

            </div>

            {!smallScreen &&      <img className="h-[570.500px] md:h-[714.500px] lg:h-[570.500px] w-full md:w-[60%] object-cover" src="/image3.jpeg" alt="potential_image"/>}

   

        </div>
    )
}