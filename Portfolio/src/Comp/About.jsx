
import imgabout from '../assets/imgabout2.png';
import { ABOUT_TEXT } from "../constants/index.js";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" >
        <h1 className="my-20 text-center text-5xl" >Objective
            
        </h1>
        <div className="flex flex-wrap" >
            <div className="w-full lg:w-1/2 lg:p-8 ">
            <div className="flex justify-center items-center " >
                <img src={imgabout} alt="about" className='rounded-2xl' width={384}  />
                </div>
                </div>
                <div className="w-full lg:w-1/2 " >
               <div className='flex justify-center lg:justify-start' >
            <p className='my-2 max-w-xl text-xl py-6' >
                {ABOUT_TEXT}</p>
            </div>
            </div>
    </div>
        
    </div>
       
  )
}

export default About