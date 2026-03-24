"use client"
import { useRouter } from "next/navigation"

export default function CTA2(){
    const router = useRouter()
    return(
        <div className="flex items-center justify-center border-t border-black  h-[430px] md:h-[480px]">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-base [font-family:var(--font-geist-sans)]">WHAT WE BELIEVE IN</div>
                <div className="font-bold text-[44px] leading-none text-center  md:text-5xl [font-family:var(--font-anek-tamil)]">JOIN THE PRIMAL TRIBE TODAY!</div>

                              <button onClick={()=>router.push("/reserve")} className="bg-[#808CFD] border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >RESERVE YOUR SPOT</button>

            </div>
        </div>
    )
}