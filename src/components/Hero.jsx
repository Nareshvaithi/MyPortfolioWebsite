import myphoto from "/src/assets/MypassFoto-removebg-preview.png";
import { AiOutlineGithub,AiOutlineLinkedin,AiOutlineWhatsApp,AiOutlineFacebook,AiOutlineInstagram,} from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'i am a front-end developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'i am a web designer',
        1000,
        'i am a react developer',
        1000,
        'i am a software engineer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export const Hero=()=>{
    return(
        <section className="flex bg-hero items-top md:items-center justify-center capitalize w-full h-full" id="home">
            <div className="flex flex-col md:flex-row mt-10 justify-around items-center w-full h-2/4 bg-white">
                <div className="font-hero-font py-5 text-3xl md:p-0">
                    <p className="font-cursive text-red-500 mb-2">hi</p>
                    <p className="font-cursive">i'm naresh vaithi</p>
                    <p className="text-xs w-full mt-5"><ExampleComponent/></p>
                    <div className="flex justify-evenly my-2 text-5xl md:my-10">
                        <a href="https://github.com/Nareshvaithi" target="blank"><AiOutlineGithub className="text-yellow-300"/></a>
                        <a href="" target="blank"><AiOutlineLinkedin className="text-blue-500"/></a>
                        <a href="" target="blank"><AiOutlineWhatsApp className="text-green-500"/></a>
                        <a href="" target="blank"><AiOutlineFacebook className="text-blue-600"/></a>
                        <a href="" target="blank"><AiOutlineInstagram className="text-pink-600"/></a>
                    </div>
                </div>
                <div className="w-96 h-96 rounded-full bg-gray-200 p-2 md:static">
                    <img className="w-full h-full rounded-full bg-yellow-500" src={myphoto} alt="myphoto" />
                </div>
            </div>
        </section>
    )
}