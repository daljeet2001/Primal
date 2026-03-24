"use client"
import { useRouter } from "next/navigation";
import Link  from "next/link"

export default function Footer(){

    const router = useRouter();

    return(
        <div className="bg-[#E9ECFF] border-t border-black h-auto md:h-[480px] md:px-8 md:py-8  px-5 pt-[27px] pb-[50px] flex flex-col justify-between md:gap-0 gap-20">

              <div className='flex flex-row md:gap-0 gap-6 flex-wrap items-center justify-between'>
                <img onClick={()=>router.push("/")} className="md:h-52 md:w-52  h-32 w-32" src="../icon.png" alt="logo"/>
                <div onClick={()=>router.push("/")} className="cursor-default font-extrabold text-5xl [font-family:var(--font-instrument)]">PrimalTraining</div>
            </div>


            <div className="flex flex-row flex-wrap md:items-start md:justify-between md:gap-0 gap-20">

                <div className="flex flex-col gap-4 md:gap-8 items-start">
                    <div className="text-2xl font-bold [font-family:var(--font-anek-tamil)]">CONTACT</div>
                    <div className="flex flex-col">
                        <div className="font-bold text-sm [font-family:var(--font-geist-sans)]">Email: singhdaljit25126@gmail.com</div>
                           <div className="font-bold text-sm [font-family:var(--font-geist-sans)]">Phone: +91 7973065721</div>

                    </div>
                </div>

                      <div className="flex flex-col gap-4 md:gap-8 items-start">
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

                      <div className="flex flex-col w-full md:w-auto items-start gap-4 md:gap-8">
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