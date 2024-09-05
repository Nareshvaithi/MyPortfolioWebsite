import { Singleproject } from "./Singleproject"
import weatherproimg from "/src/assets/weatherPro.png";
import bmiproimg from "/src/assets/bmiPro.png";
import qrcodeproimg from "/src/assets/qrcodePro.png"

export const Projects = ()=>{
    const projectitems=[
        {id:1,name:"weather fetching app",description:"weather fetching app built with react js",pic:weatherproimg},
        {id:2,name:"bmi calculator app",description:"bmi calculator build with react js app",pic:bmiproimg},
        {id:3,name:"qr code generator",description:"qr code generator build with react js",pic:qrcodeproimg},
    ]
    return(
        <section className="bg-blue-400 capitalize font-hero-font" id="project">
            <div className="text-center bg-pink-300 flex justify-center items-center w-full h-16 text-white">
                <h1 className="text-3xl border-b-2 border-blue-700 font-semibold">projects</h1>
            </div>
            <div className="flex flex-wrap justify-evenly items-center">
            {projectitems.map((project,index)=>(
                <Singleproject project={project} key={index}/>
            ))}
            </div>
            
        </section>
    )
}