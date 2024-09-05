import { Singleproject } from "./Singleproject"

export const Projects = ()=>{
    const projectitems=[
        {id:1,name:"weather fetching app",description:"weather fetching app built with react js",pic:"/src/assets/weatherPro.png"},
        {id:2,name:"bmi calculator app",description:"bmi calculator build with react js app",pic:"/src/assets/bmiPro.png"},
        {id:3,name:"qr code generator",description:"qr code generator build with react js",pic:"/src/assets/qrcodePro.png"},
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