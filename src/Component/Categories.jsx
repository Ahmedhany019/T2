// import CategoriesCard from "./CategoriesCard";

import { Link } from "react-router-dom";

const categories = [
    {
      title: "Fashion & Clothing",
      description: "Discover the latest trends and elevate your style.",
      imageUrl: "/images/categories/1.jpg",
    },
    {
      title: "Electronics & Gadgets",
      description: "Upgrade your life with the newest tech innovations.",
      imageUrl: "/images/categories/2.jpg",
    },
    {
      title: "Home & Living Essentials",
      description: "Transform your home with our stylish essentials.",
      imageUrl: "/images/categories/3.jpg",
    },
  ];
  
  const Categories = () => {
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((item,i)=>(
                <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-40 object-cover" 
                />
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link to='categories'>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Explore Now
                        </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Categories;
  