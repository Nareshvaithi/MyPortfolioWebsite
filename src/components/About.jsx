import aboutmeimg from "/src/assets/aboutme.png";
export const About=()=>{
    return(
    <section id="about" className="w-full bg-blue-700 flex flex-col justify-center items-center capitalize font-hero-font md:flex-row">
        <div className="md:w-1/4">
            <img src={aboutmeimg} alt="about me image"/>
        </div>
        <div className="text-white px-5 text-justify aboutp md:w-3/4">
            <h1 className="text-3xl border-b-4 border-blue-300 w-fit pt-5 font-semibold">About me</h1>
            <p>Hello! I'm naresh vaithi, a passionate software developer with a love for creating innovative and user-friendly web applications. With a strong foundation in front-end development and expertise in React JS and redux tool kit, I'm dedicated to building exceptional digital experiences.</p>
            <p>I'm a recently BCA degree graduate with a solid understanding of HTML, CSS, tailwind CSS , JavaScript, react JS, mySql, core python, core java and responsive design. I'm always looking to expand my skill set and stay up-to-date with industry trends and best practices.</p>
            <p>When I'm not coding, you can find me at cycling, weight training. I'm excited to collaborate with like-minded professionals and contribute to exciting projects. Let's connect and build something amazing together!</p>
            <p>Feel free to customize it to fit your own experiences, style, and branding. This content should give visitors a brief overview of your background, skills, and personality.</p>
        </div>
    </section>
    )
        
}
