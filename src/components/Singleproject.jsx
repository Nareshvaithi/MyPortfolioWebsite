import "../App.css"
export const Singleproject=({project})=>{
    return(
            <div className="w-72 h-fit border-2 border-white flex flex-col my-10 mx-10 capitalize">
                <div className="w-full h-3/4 border-b-2 border-white">
                    <img className="w-full h-full object-cover" src={project.pic} alt=""/>
                </div>
                <div className="w-full h-1/4 px-3 text-white text-center py-5">
                    <h1 className="text-2xl">{project.name}</h1>
                    <p>{project.description}</p>
                    <button className="bg-pink-400 px-7 py-1 text-2xl mt-3">visit</button>
                </div>
            </div>   
    )
}