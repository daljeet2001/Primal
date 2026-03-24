


export default function CTA3(){

    const phone = 917973065721;
const message = "Hi, I came across your Primal Personal Training program and I’m interested in getting started. Could you please share details about personalized plans, pricing, and the enrollment process?";

    return(
        <div className="flex items-center border-t border-black justify-center  bg-[#808CFD] h-[463.45px]  md:h-[480px] w-full">
            <div className="flex flex-col items-center justify-center gap-4 w-full md:w-[50%]">
          
                <div className=" text-center font-bold leading-none text-[44px] leading-none md:text-5xl [font-family:var(--font-anek-tamil)]">PRIMAL PERSONAL TRAINING</div>
                

                   <div className="md:text-lg text-[15px] [font-family: var(--font-geist-sans)] text-center">Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way.</div>

                        <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank" className="bg-white border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >RESERVE YOUR SPOT</a>

            </div>
        </div>
    )
}