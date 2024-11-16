import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiBootstrap, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";

const Technology = () => {
  return (
    <div className="border-b border-neutral-900 pb-24" >
        <h1 className="my-20 text-center text-4xl " >Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-4" >
            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <RiReactjsLine className="text-6xl text-cyan-400 " />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <FaNodeJs className="text-6xl text-green-400 " />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <SiExpress className="text-6xl text-yellow-400 " />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <SiJavascript className="text-6xl text-cyan-400 " />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <SiTailwindcss className="text-6xl text-blue-700 " />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <SiMongodb className="text-6xl text-green-900 " />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <SiVite className="text-6xl text-yellow-300   " />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <SiBootstrap className="text-6xl text-purple-800 " />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <SiHtml5 className="text-6xl text-orange-500 " />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 " >
                <SiCss3 className="text-6xl text-blue-900 " />
            </div>
        </div>

    </div>
  )
}

export default Technology