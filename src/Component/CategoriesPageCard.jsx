import { useDispatch, useSelector} from "react-redux";
import { addToCart } from "../redux/cartSlice";
export default function CategoriesPageCard(product) {

  const itemsCart = useSelector((state)=>state.cart.items)
  const isInCart = itemsCart.some(item=> item.id === product.id)
  
  const dispatch = useDispatch()
  
  const handleAddToCart = ()=>{
    if(!isInCart){
      dispatch(addToCart(product))
    }
  }

  return (
    <div key={product.id} className="shadow-lg h-[400px] rounded-lg overflow-hidden">
    <img src={product.image} alt={product.name} className="hover:scale-[1.1] duration-300 rounded-t-lg w-full max-h-[200px] object-cover "/>
    <div className="pt-5 px-2">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <h5 className="text-sm text-gray-400">{product.desc}</h5>
      <h5 className="text-md text-gray-800 font-bold pt-2">$ {product.price}</h5>
    </div>
    <button onClick={handleAddToCart} className={`mt-5 py-2 px-5 mx-auto block rounded-full ${isInCart ?'bg-gray-100 cursor-not-allowed':'bg-lime-200 hover:bg-lime-500'}  `}>
      Add To Cart
    </button>
  </div>
  )
}