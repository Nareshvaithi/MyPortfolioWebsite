export const SingleSkill=({imglink,index})=>{
    return(
        <div key={index} className="w-40 h-40 border-2 border-blue-400 mx-2 my-3">
           <img className="w-full h-full object-contain" src={imglink} alt="" />
        </div>
    )
}