import { useEffect, useState } from "react"
import CategoriesPageCard from "../Component/CategoriesPageCard"
import { FaSearch } from "react-icons/fa"

export default function Categories() {

  const [categories,setCategories] = useState([])

  

  const fetchData = ()=>{

    fetch('/images/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(err => `ERORR ${err}`)

  }

  useEffect(()=>{
    fetchData()
  },[])

  const [valueInput,setValueInput] = useState("")
  
  const searchProduct = (e)=>{

    setValueInput(e.target.value);
    
  }
  const filterProducts = categories.filter((product)=> product.title.toLocaleLowerCase().includes(valueInput.toLocaleLowerCase()))

  const displayedProducts = valueInput.length === 0 ? categories : filterProducts;
  
  return (
    <>
    <div className="my-10 w-11/12 mx-auto">
      <div className="relative max-w-[218px] mb-5">
        <input value={valueInput} onChange={searchProduct} placeholder="Search for what u need " className="p-2 outline-none border-gray-300 border rounded-xl"/>
        <FaSearch className="absolute top-1/2 -translate-y-1/2 right-2"/>
      </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {displayedProducts.map((category,i) => (
        <CategoriesPageCard key={i} id={category.id} name={category.title} image={category.imageUrl} price={category.price} desc={category.description}/>
      ))}
    </div>
    </div>
    </>
  )
}
