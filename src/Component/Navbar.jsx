import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartOffset from "./CartOffset";
export default function Navbar() {

    const navList = [
        {
            id: '1',
            name: 'Home',
            link: '/'
        },
        {
            id: '2',
            name: 'Categories',
            link: '/categories'
        },
        {
            id: '3',
            name: 'Contact',
            link: '/contact'
        },
    ]


  return (
    <nav className=" w-full shadow-md">
        <div className=" text-center flex justify-between items-center w-11/12 mx-auto py-5">
            <div className="flex-1">
                <Link to='/' className=" text-2xl font-bold tracking-wider">T2</Link>
            </div>
            <div className="hidden md:block text-center flex-1 space-x-4 ">
                {navList.map((list)=>(
                <Link key={list.id} to={list.link} className="text-gray-400 hover:text-gray-900 font-medium">{list.name}</Link>
                ))}

            </div>
            <div className=" justify-center flex-1 flex gap-4 items-center">
                <CartOffset/>
                <Link to='profile'>
                    <FaUserAlt className="cursor-pointer text-3xl w-10 h-10 p-2 hover:text-white duration-300 bg-blue-100 rounded-full"/>
                </Link>
            </div>
        </div>
    </nav>
  )
}
