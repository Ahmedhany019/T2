import  { useState } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6';
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
export default function CartOffset() {

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch()
    
    const handleDeleteItem = (id) =>{
        dispatch(removeFromCart(id))
    }
    

    const [toggleCart,setToggleCart] = useState(false)
    
    const openAndCloseClick = ()=>{
        setToggleCart((e)=> !e)
    }
    


  return (
    <div>
        <FiShoppingCart onClick={openAndCloseClick} className='cursor-pointer text-3xl w-12 h-10 p-2 hover:text-white duration-300 bg-blue-100 rounded-full'/>
        <div className={`w-full h-screen fixed ${toggleCart ? 'right-0' : '-right-full'} top-0 max-h-screen z-50`}>
            <div className='h-full w-full relative bg-white overflow-scroll ml-auto z-[100] max-w-sm '>
                {/* Top */}
                <div className='flex items-center w-11/12 mx-auto justify-between py-4 text-2xl'>
                    <h1 className='font-bold'>My Cart</h1>
                    <IoMdClose onClick={openAndCloseClick} className='cursor-pointer'/>
                </div>
                <hr/>
                <div className='w-full'>
                    <ul>
                    {cartItems.length !== 0 ? cartItems.map((item)=>(
                        <li key={item.id} className='cursor-pointer group flex gap-4 p-4 items-center bg-sky-50 mt-6 w-11/12 mx-auto'>
                                <img src={item.image} alt={item.name} className='w-24 h-24 overflow-hidden object-contain'/>
                                <div className='flex items-start flex-col'>
                                    <h1 className='text-lg font-bold'>{item.name}</h1>
                                    <h4 className=' text-sm py-2'>$ {item.price}</h4>
                                </div>
                                <FaRegTrashCan onClick={()=>handleDeleteItem(item.id)} className='hidden group-hover:block cursor-pointer text-red-500 mx-auto text-xl' />
                                </li>
                     )) :  
                    <p>Empty Card</p> 
                     }
                    </ul>
                    
                </div>
            </div>
            <div className="h-full w-full fixed top-0 z-[60] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100">
            </div>
        </div>
    </div>
  )
}
