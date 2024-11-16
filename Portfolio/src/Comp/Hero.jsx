
import profile from "../assets/abhi.png";
import { HERO_CONTENT } from "../constants/index.js";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35" >
        <div className="flex flex-wrap" >
            <div className="w-full lg:w-1/2" >
            <div className="flex flex-col items-center lg:items-start " >
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >
                    Abhishek nigam
                </h1>
                <span className="bg-gradient-to-r from-orange-300 via-blue-500 to-green-400 bg-clip-text text-4xl tracking-tight text-transparent" >

                    MERN Stack Developer
                </span>
                <p className="my-2 max-w-xl font-light tracking-tighter" >{HERO_CONTENT}</p>
               

            </div>
            </div>
            <div className="w-screen lg:w-1/2 lg:p-8 rounded " >
            <div className="flex justify-center   " >
                <img src={profile} className=" rounded-full w-1/2 " alt="Abhishek nigam" />

            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero