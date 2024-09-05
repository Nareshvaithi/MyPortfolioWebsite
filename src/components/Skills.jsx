import { SingleSkill } from "./Singleskill";
import htmlimg from "/src/assets/htmlimg.png"; 
import css from "/src/assets/cssimg.png";
import jsimg from "/src/assets/JavaScriptimg.png";
import tailwindimg from "/src/assets/tailwindcssimg.png";
import reactimg from "/src/assets/reactjsimg.png";
import reduximg from "/src/assets/reduximg.png";
import mysqlimg from "/src/assets/mysqlimg.png";
import gitandgithub from "/src/assets/gitandgithubimg.png";
export const Skills=()=>{
    const skillimg = [htmlimg,css,jsimg,tailwindimg,reactimg,reduximg,mysqlimg,gitandgithub]
    return(
        <section className="w-full h-full" id="skills">
            <div className="bg-green-500 py-3">
                <h1 className="text-center font-semibold text-3xl text-white underline">skills</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center">
                {skillimg.map((skill,index)=>(
                    <SingleSkill imglink={skill} index={index} key={index}/>
                ))}
            </div>
        </section>
    )
} 