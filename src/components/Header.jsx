import {Bars3Icon} from "@heroicons/react/24/solid"
import { useState } from "react"
export const Header=()=>{
    const [togglemenu,settogglemenu] = useState(false);
    return(
        <div className="flex justify-between items-center px-3 h-12 header-bg capitalize fixed w-full">
            <div className="ml-5 ">
                <a href="#" className="font-bold text-white text-2xl">My Portfolio</a>
            </div>
            <nav className="hidden md:block">
                <ul className="flex text-white mdheader">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
            {togglemenu && <nav className="block md:hidden">
                <ul className="flex flex-col items-right text-white mobile-nav">
                    <li><a onClick={()=>settogglemenu(!togglemenu)} href="#home">Home</a></li>
                    <li><a onClick={()=>settogglemenu(!togglemenu)} href="#about">About</a></li>
                    <li><a onClick={()=>settogglemenu(!togglemenu)} href="#skills">Skills</a></li>
                    <li><a onClick={()=>settogglemenu(!togglemenu)} href="#project">Projects</a></li>
                    <li><a onClick={()=>settogglemenu(!togglemenu)} href="#resume">resume</a></li>
                    <li><a onClick={()=>settogglemenu(!togglemenu)} href="#contact">Contact Me</a></li>
                </ul>
            </nav>}
            <button onClick={()=>settogglemenu(!togglemenu)} className="block md:hidden"><Bars3Icon className="text-white h-7"/></button>
        </div>
    )
}