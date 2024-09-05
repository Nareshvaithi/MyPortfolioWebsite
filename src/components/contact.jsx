import { AiFillHome, AiFillPhone, AiFillMail} from "react-icons/ai"
import { FaHandshake } from "react-icons/fa";
export const Contact=()=>{
    return(
        <section id="contact" className="w-full h-full bg-red-400 px-5 py-5 pt-10 text-white font-gills capitalize">
            <h1 className="text-3xl font-bold border-b-4 w-fit border-blue-500 mb-5">contact me</h1>
            <div className="md:flex justify-around items-center">
                <div>
                    <div className="flex flex-col items-center justify-center text-center">
                    <AiFillHome className="text-5xl text-blue-500"/>
                    <p className="text-xl">#11, selva nagar 6th main cross uruvaiyar,puducherry, puducherry-india-605110</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <AiFillPhone className="text-5xl text-blue-500"/>
                    <p className="text-xl">91+9500919327</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <AiFillMail className="text-5xl text-blue-500"/>
                    <a className="text-xl lowercase" href="mailto:nareshvaithi@gmail.com">nareshvaithi@gmail.com</a>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-5">
                    <p className="text-2xl">"bring me on board!"</p>
                    <FaHandshake className="text-5xl text-blue-500"/>
                    <a href="mailto:nareshvaithi4@gmail.com"><button className="bg-blue-500 px-10 py-2 text-2xl mt-2 rounded-full capitalize">hire me</button></a>
                </div>
            </div>
        </section>
    )
}