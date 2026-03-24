"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";



export default function Navbar(){

    const router = useRouter();
    const [smallScreen, setSmallScreen] = useState(false);
    const [ menu, setMenu ] = useState(false);


    useEffect(()=>{

        setSmallScreen(window.innerWidth < 768);

    },[])
    return(
        <>
      {!smallScreen ? (
        <div  className="w-full px-16 py-8  flex flex-row  flex-wrap items-center justify-between text-black bg-[#E9ECFF]">
            <div onClick={()=>router.push("/")}  className='flex items-center gap-2 cursor-default'>
                <img className="h-8 w-8" src="../icon.png" alt="logo"/>
                <div className="font-extrabold text-xl [font-family:var(--font-instrument)]">PrimalTraining</div>
            </div>

   <div className="flex items-center gap-12">
                <a href="/" className="text-[15px] [font-family:var(--font-geist-mono)] cursor-pointer">HOME</a>
                <a href="/about" className="text-[15px] [font-family:var(--font-geist-mono)] cursor-pointer">ABOUT</a>
                <a href="/reserve"  className="bg-[#808CFD] border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >RESERVE YOUR SPOT</a>

            </div>


        
        </div>
    ):(
    <div  className="w-full flex flex-row  flex-wrap items-center justify-between text-black bg-[#E9ECFF]">

        <div className="p-5 border-b border-black flex items-center justify-between w-full">
                <div onClick={()=>router.push("/")}  className='flex items-center gap-2 cursor-default'>
                <img className="h-8 w-8" src="../icon.png" alt="logo"/>
                <div className="font-extrabold text-xl [font-family:var(--font-instrument)]">PrimalTraining</div>
            </div>

              {!menu ? <AiOutlinePlus size={32} onClick={()=>setMenu(true)}/> : <AiOutlineMinus size={32} onClick={()=>setMenu(false)}/>}



        </div>
        


            {menu && <div className="flex flex-col w-full">
                <a href="/" className="p-5 border-b border-black [font-family:var(--font-geist-mono)] text-3xl ">HOME</a>
                <a href="/about" className="p-5 border-b border-black [font-family:var(--font-geist-mono)] text-3xl ">ABOUT</a>
                <a href="/reserve" className="p-5 bg-[#808CFD] text-white border-b border-black   [font-family:var(--font-geist-mono)] text-3xl ">RESERVE YOUR SPOT</a>
                      

                </div>}


        
        </div>
    )}  
        </>
    
            )

        }
