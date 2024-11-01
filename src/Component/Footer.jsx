import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="w-full">
    <div className=" w-full h-full bg-gray-100 ">
      <div className="border-b-[1px] p-2  border-black w-11/12 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 justify-center items-center mx-auto">
      <div className="col min-h-[190px]">
        <h1 className="font-bold py-2 text-2xl">T2</h1>
        <p className="text-sm text-gray-500 italic py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sapiente ducimus accusamus autem hic est error sit quisquam animi omnis natus deserunt quaerat, dicta sint adipisci. Sint facilis reiciendis incidunt!</p>
      </div>

      <div className="col min-h-[190px] mx-auto">
      <h1 className="font-bold py-2 text-2xl">Quick Links</h1>
        <ul >
            <li className="font-bold py-2 hover:text-lime-400 duration-300 transition-all ease-linear">
                <Link to='/'>Home</Link>
            </li>
            <li className="font-bold py-2 hover:text-lime-400 duration-300 transition-all ease-linear">
                <Link>About</Link>
            </li>
            <li className="font-bold py-2 hover:text-lime-400 duration-300 transition-all ease-linear">
                <Link to='/contact'>Contact</Link>
            </li>
            <li className="font-bold py-2 hover:text-lime-400 duration-300 transition-all ease-linear">
                <Link to='/shop'>Shop</Link>
            </li>
        </ul>
      </div>

      <div className="col min-h-[190px] mx-auto">
      <h1 className="font-bold py-2 text-2xl">Terms & Conditions</h1>
        <ul >
            <li className="font-bold py-2 hover:text-lime-400 duration-300 transition-all ease-linear">
                <Link>Privacy Policy</Link>
            </li>
            <li className="font-bold py-2 hover:text-lime-400 duration-300 transition-all ease-linear">
                <Link>Terms of use</Link>
            </li>
        </ul>
      </div>

      <div className="col min-h-[190px] mx-auto">
      <h1 className="font-bold py-2 text-2xl">Social Links</h1>
        <ul className="flex items-center gap-3">
            <li className="font-bold p-1 md:p-3 hover:bg-lime-500 group cursor-pointer bg-lime-300 duration-300 transition-all ease-linear">
                <FaFacebook className="text-3xl group-hover:text-white duration-300 transition-all ease-linear"/>
            </li>
            <li className="font-bold p-1 md:p-3 hover:bg-lime-500 group cursor-pointer bg-lime-300 duration-300 transition-all ease-linear">
                <FaInstagram className="text-3xl group-hover:text-white duration-300 transition-all ease-linear"/>
            </li>
            <li className="font-bold p-1 md:p-3 hover:bg-lime-500 group cursor-pointer bg-lime-300 duration-300 transition-all ease-linear">
                <RiTwitterXFill className="text-3xl group-hover:text-white duration-300 transition-all ease-linear"/>
            </li>
        </ul>
      </div>
    </div>
    <div className="w-11/12 mx-auto py-3 flex justify-between items-center">
        <p className="flex items-center gap-2 font-bold"><FaRegCopyright/> All rights reserved T2 2024.</p>
        <img src='/images/card.png' alt="card" className="w-full h-full max-w-[200px]"/>
    </div>
    </div>
    </section>
  );
}
