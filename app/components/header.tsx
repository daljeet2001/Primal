

export default function Header(){
    return(
        <div className="flex flex-col w-full border-t border-black">
            <div className="flex items-center w-full h-[480px]">
                <img className=" h-full w-[66.67%] object-cover" src="/image1.jpeg" alt="header_img"/>
                <div className="h-full p-8 bg-[#E9ECFF] flex flex-col justify-between w-[33.33%]">
                    <div className="text-black text-4xl font-bold [font-family:var(--font-tamil)]">FOR THE COMMITTED</div>

                    <div className="flex flex-col  gap-4 ">
                        <div className="text-base text-black [font-family:var(--font-geist-sans)]">Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.

</div>
<div className="text-sm [font-family:var(--font-geist-mono)]">ABOUT US</div>
                    </div>

                </div>
            </div>


               <div className="flex items-center w-full h-[480px]">
              
                <div className="w-[33.33%] h-full p-8 bg-[#E9ECFF] flex flex-col justify-between ">
                    <div className="text-black text-4xl font-bold [font-family:var(--font-tamil)]">GUIDED BY EXPERTS</div>

                    <div className="flex flex-col justify-start  gap-4 ">
                        <div className="text-base text-black [font-family:var(--font-geist-sans)]">We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your potential.



</div>

                    </div>

                </div>

                 <div className="w-[33.33%] h-full p-8 bg-[#E9ECFF] flex flex-col justify-between ">
                    <div className="text-black text-4xl font-bold [font-family:var(--font-tamil)]">DYNAMIC OPEN GYM</div>

                    <div className="flex flex-col justify-start  gap-4 ">
                        <div className="text-base text-black [font-family:var(--font-geist-sans)]">Our facility is the optimal environment for strength training and performance, equipped with top-of-the-line tools, training areas, and focus on functional movement.



</div>

                    </div>

                </div>

                  <img className="w-[33.33%] h-full object-cover" src="/image2.jpeg" alt="header_img"/>
            </div>

        </div>
    )
}