import { useEffect, useState } from "react"

export default function Featured() {

    const [featured,setFeatured] = useState([])

    const fetchData = ()=>{ fetch('/images/featured.json')
    .then(res => res.json())
    .then(data => setFeatured(data))
    .catch(err=> console.log("ERROR", err))}

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className="w-11/12 mx-auto my-10 bg-slate-100 p-4 rounded-md">
    <h1 className="text-3xl font-bold">Featured Product: </h1>
    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {featured.map((item,i)=>(
            <div key={i} className="mx-auto cursor-pointer shadow-xl rounded-xl relative group max-w-[300px] overflow-hidden p-4">
            <img src={item.img} className="max-h-[300px] mx-auto object-contain"/>
            <div className="duration-700 rounded-xl w-full h-full items-center justify-center flex-col bg-[#3533339d] absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 -translate-y-1/2 flex ">
                <h1 className="text-white text-xl">{item.title}</h1>
                <h5 className="text-gray-300 text-md text-center pt-5">{item.desc}</h5>
                <button className='mt-5 py-2 px-5 mx-auto rounded-full bg-lime-200 hover:bg-lime-500'>Add To Cart</button>
            </div>
        </div>
        ))}
        
    </div>
    </div>
  )
}
