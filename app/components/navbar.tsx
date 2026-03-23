"use client"

import { useRouter } from "next/navigation"

export default function Navbar(){
    const router = useRouter();
    return(
        <div  className="w-full px-16 py-8 flex items-center justify-between text-black bg-[#E9ECFF]">
            <div onClick={()=>router.push("/")}  className='flex items-center gap-2 cursor-default'>
                <img className="h-8 w-8" src="../icon.png" alt="logo"/>
                <div className="font-extrabold text-xl [font-family:var(--font-instrument)]">PrimalTraining</div>
            </div>

            <div className="flex items-center gap-12">
                <a href="/" className="text-[15px] font-[var(--font-geist-mono)] cursor-pointer">HOME</a>
                <a href="/about" className="text-[15px] font-[var(--font-geist-mono)] cursor-pointer">ABOUT</a>
                <a href="/reserve"  className="bg-[#808CFD] border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >RESERVE YOUR SPOT</a>

            </div>
        </div>
    )
}