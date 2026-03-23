"use client"
import { useRouter } from "next/navigation";
import Link  from "next/link"

export default function Footer(){

    const router = useRouter();

    return(
        <div className="bg-[#E9ECFF] border-t border-black h-[480px] px-8 py-8 flex flex-col justify-between">

              <div className='flex items-center justify-between'>
                <img onClick={()=>router.push("/")} className="h-52 w-52" src="../icon.png" alt="logo"/>
                <div onClick={()=>router.push("/")} className="cursor-default font-extrabold text-5xl [font-family:var(--font-instrument)]">PrimalTraining</div>
            </div>


            <div className="flex items-start justify-between">

                <div className="flex flex-col gap-8 items-start">
                    <div className="text-2xl font-bold [font-family:var(--font-anek-tamil)]">CONTACT</div>
                    <div className="flex flex-col">
                        <div className="font-bold text-sm [font-family:var(--font-geist-sans)]">Email: singhdaljit25126@gmail.com</div>
                           <div className="font-bold text-sm [font-family:var(--font-geist-sans)]">Phone: +91 7973065721</div>

                    </div>
                </div>

                      <div className="flex flex-col gap-8 items-start">
                    <div className="text-2xl font-bold font-[var(--font-anek-tamil)]">OPENING HOURS</div>
                    <div className="flex flex-col">

                        <div className="flex items-center justify-between w-[190px]">
                                       <div className="font-bold text-sm font-[var(--font-geist-sans)]">MON - FRI</div>
                                         <div className="font-bold text-sm font-[var(--font-geist-sans)]">5:00 - 23:00</div>
                        </div>

               

                                  <div className="flex items-center justify-between w-[190px]">
                                       <div className="font-bold text-sm font-[var(--font-geist-sans)]">WEEKENDS</div>
                                         <div className="font-bold text-sm font-[var(--font-geist-sans)]">8:00 - 13:00</div>
                        </div>

                                       <div className="flex items-center justify-between w-[190px]">
                                       <div className="font-bold text-sm font-[var(--font-geist-sans)]">HOLIDAYS</div>
                                         <div className="font-bold text-sm font-[var(--font-geist-sans)]">8:00 - 16:00</div>
                        </div>
             
                    </div>
                </div>

                      <div className="flex flex-col items-start gap-8">
                    <div className="text-2xl font-bold [font-family:var(--font-anek-tamil)]">SOCIAL</div>
                    <div className="flex flex-col">
                        <Link target="_blank" href="https://www.linkedin.com/in/singhdaljeet2001/" className="underline font-bold text-sm [font-family:var(--font-geist-sans)]">LinkedIn</Link>
                           <Link target="_blank" href="https://www.instagram.com/daljeetxmahal/" className="underline font-bold text-sm [font-family:var(--font-geist-sans)]">Instagram</Link>
                

                    </div>
                </div>

            </div>




        </div>
    )
}