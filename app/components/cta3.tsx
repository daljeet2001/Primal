


export default function CTA3(){

    const phone = 917973065721;
const message = "Hi, I came across your Primal Personal Training program and I’m interested in getting started. Could you please share details about personalized plans, pricing, and the enrollment process?";

    return(
        <div className="flex items-center justify-center border-t border-black bg-[#808CFD]  h-[480px] w-full">
            <div className="flex flex-col items-center justify-center gap-4 w-[50%]">
          
                <div className="font-bold text-5xl [font-family:var(--font-anek-tamil)]">PRIMAL PERSONAL TRAINING</div>
                

                   <div className="text-lg [font-family: var(--font-geist-sans)] text-center">Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way.</div>

                        <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank" className="bg-white border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >RESERVE YOUR SPOT</a>

            </div>
        </div>
    )
}