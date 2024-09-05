import { useState } from "react";
import resume from "/src/assets/MY_RESUME.pdf";
import resumeimg from "/src/assets/giveresume.png";
export const Resume=()=>{
    const [thank,setthank] = useState(false);
    function handleclick(){
        setthank(true);
    }
    return(
        <section id="resume" className="w-full h-fit bg-purple-400 flex items-center justify-center capitalize">
            <div className="flex flex-col w-full h-full justify-evenly items-center md:flex-row">
                <div className="w-96 h-full my-5">
                <h1 className="text-xm text-center font-cursive">"spark innovation - my resume awaits"</h1>
                <img className="w-full h-full object-cover" src={resumeimg} alt=""/>
                </div>
                <div className="text-center my-5 w-96 h-fit">
                    <a href={resume} download={"Naresh_vaithi Resume"}>
                        <button onClick={handleclick} className="uppercase rounded-xl font-bold text-2xl py-2 px-7 text-white bg-green-600 hover:bg-green-500">download</button>
                    </a>
                    <p className="pt-5 text-xl text-black font-semibold">click download to view my resume</p>
                    {thank && <p>thank you for download my resume if you want to hire me please meet in contact page</p>}
                </div>
            </div>
        </section>
    )
}