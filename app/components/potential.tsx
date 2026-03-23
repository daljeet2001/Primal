"use client"

import { useRouter } from "next/navigation"

export default function Potential(){

    const router = useRouter();
    return(
        <div className="flex items-center h-[600px] w-full border-t border-black">

            <div className="flex flex-col justify-between bg-[#E9ECFF] h-full w-[40%]">

                                    <div className="text-black text-4xl font-bold [font-family:var(--font-tamil)] p-8">GUIDED BY EXPERTS</div>


                                    <div className="flex flex-col p-8 border-t-1 border-black">

                                        <div className="text-2xl text-black font-bold [font-family:var(--font-tamil)] ">EXPERT COACHING</div>
                                        <div className="text-base [font-family:var(--font-geist-sans)]">Trainers who are passionate about your progress.

</div>

                                    </div>

                                         <div className="flex flex-col p-8 border-t-1 border-black">

                                        <div className="text-2xl text-black font-bold [font-family:var(--font-tamil)] ">RESULTS-DRIVEN PROGRAMS
</div>
                                        <div className="text-base [font-family:var(--font-geist-sans)]">Workouts that deliver tangible, measurable results.



</div>

                                    </div>

                                         <div className="flex flex-col p-8 border-t-1 border-black">

                                        <div className="text-2xl text-black font-bold [font-family:var(--font-tamil)] ">A SUPPORTIVE TRIBE</div>
                                        <div className="text-base [font-family:var(--font-geist-sans)]">A community that pushes you to be your best.



</div>

                                    </div>

                                             <div className="flex items-center justify-start p-8 border-t-1 border-black">

                                                                <button onClick={()=>router.push("/reserve")} className=" border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >VIEW CLASSES</button>


      

                                    </div>

                                    

            </div>

            <img className="h-full w-[60%] object-cover" src="/image3.jpeg" alt="potential_image"/>

        </div>
    )
}