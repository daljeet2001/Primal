


export default function Sessionx(){

    const message1 = "Hi, I came across your Strength training program at Primal Training and I’m interested in joining. Could you please provide more details about the schedule, pricing, and enrollment process?"
    const message2= "Hi, I came across your Conditioning program at Primal Training and I’m interested in joining. Could you please provide more details about the schedule, pricing, and enrollment process?"
    const message3= "Hi, I’m interested in joining the Community Classes at Primal Training. Could you please share details about timings, pricing, and how to get started?"

    const phone = 917973065721


    return(
        <div className="h-[480px] flex items-center w-full border-t border-black bg-[#E9ECFF]">


            <div className="flex h-full flex-col justify-between p-8 border-r border-black">

                <div className="text-5xl font-bold [font-family:var(--font-anek-tamil)]">
                    STRENGTH
                </div>

                <div className="flex flex-col gap-2">
                    <div className="border-b border-black text-lg [font-family: var(--font-geist-sans)]">Weekdays at 6PM</div>
                    <div className="border-b border-black text-lg [font-family: var(--font-geist-sans)]">Weekends and Holidays at 8AM</div>
                       <div className="text-lg [font-family: var(--font-geist-sans)]">Build a foundation of raw power with our comprehensive weightlifting and strength training programs. </div>
                </div>

                   <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message1)}`} target="_blank"  className="bg-[#808CFD] border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >RESERVE YOUR SPOT</a>

           


            </div>

                <div className="flex h-full flex-col justify-between p-8 border-r border-black">

                <div className="text-5xl font-bold [font-family:var(--font-anek-tamil)]">
                    CONDITIONING
                </div>

                <div className="flex flex-col gap-2">
                    <div className="border-b border-black text-lg [font-family: var(--font-geist-sans)]">Weekdays at 8PM</div>
                    <div className="border-b border-black text-lg [font-family: var(--font-geist-sans)]">Weekends and Holidays at 10AM</div>
                       <div className="text-lg [font-family: var(--font-geist-sans)]">Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness.  </div>
                </div>

                   <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message2)}`} target="_blank"  className="bg-[#808CFD] border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >RESERVE YOUR SPOT</a>

           


            </div>


    <div className="flex h-full flex-col justify-between p-8">

                <div className="text-5xl font-bold [font-family:var(--font-anek-tamil)]">
                    COMMUNITY CLASSES 
                </div>

                <div className="flex flex-col gap-2">
                                        <div className=" invisible border-b border-black text-lg [font-family: var(--font-geist-sans)]">Weekdays at 8PM</div>


                    <div className="border-b border-black text-lg [font-family: var(--font-geist-sans)]">Everyday on the hour</div>
                
                       <div className="text-lg [font-family: var(--font-geist-sans)]">Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.</div>
                </div>

                   <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message3)}`} target="_blank"   className="bg-[#808CFD] border-none text-[15px] [font-family:var(--font-geist-mono)] px-4 py-2 rounded-xl cursor-pointer hover:text-white hover:bg-black"  >RESERVE YOUR SPOT</a>

           


            </div>




        </div>
    )
}