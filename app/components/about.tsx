

export default function AboutUs(){
    return(
        <div className="flex flex-col border-t border-black">

            <div className="h-[480px] flex items-center w-full">

                <div className=" h-full bg-[#808CFD] w-[66.67%] flex flex-col justify-between p-8">
                    
                    <div className="font-bold [font-family:var(--font-anek-tamil)] text-5xl">
                        TAP INTO YOUR PRIMAL POWER. FORGE A STRONGER YOU.
                    </div>


                    <div className="flex flex-col gap-4">

                        <div className="font-bold [font-family:var(--font-anek-tamil)] text-2xl">OUR VISION</div>
                        <div className="text-lg [font-family:var(--font-geist-sans)]">Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness, and unwavering community support. We empower our members to tap into their primal power, achieve their goals, and live a life of strength, resilience, and unwavering determination.</div>

                    </div>

                </div>

                <img src="/image3.jpeg" alt="image3" className="w-[33.33%] h-full object-cover " />

            </div>

              <div className="h-[480px] flex items-center w-full">

                     <img src="/image3.jpeg" alt="image3" className="w-[66.67%] h-full object-cover " />

                <div className=" h-full w-[33.33%] flex flex-col justify-between p-8">
                    
                    <div className="font-bold [font-family:var(--font-anek-tamil)] text-5xl">
                        DYNAMIC OPEN GYM
                    </div>


               
                        <div className="text-lg [font-family:var(--font-geist-sans)]">At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense, functional workouts designed to build raw strength, resilience, and a body capable of anything.</div>

                </div>

           

            </div>

               <div className="h-[480px] bg-[url('/image4.jpeg')] bg-cover bg-center flex items-center w-full relative">

                           <div className=" w-[45%] text-white absolute bottom-4 left-4 font-bold [font-family:var(--font-anek-tamil)] text-5xl">WE'VE CREATED A SPACE WHERE YOU CAN RECONNECT WITH YOUR PRIMAL SELF.</div>

             

           

            </div>

        </div>
    )
}