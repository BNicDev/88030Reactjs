import { useParams } from "react-router-dom"
import Navbar from "../Navbar"
import { GetSelected } from "./api";
import { useEffect, useState } from "react";


const CardDescription = () =>{
    const {id} = useParams();
    const [product, setProducts] = useState([]);

    useEffect(()=>{
        GetSelected(id).then(item=>setProducts(item))
    },[id])

    return(
        <>
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      <div className="container mx-auto p-6 md:p-8 flex-grow">

        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

          <div className="flex justify-center items-center p-4 bg-gray-50 rounded-lg">
            <img 
              src={product.image || "https://via.placeholder.com/400x400?text=Producto"} 
              alt={product.title} 
              className="max-h-96 object-contain rounded-md"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{product.title}</h1>
            
            <p className="text-gray-600 text-lg">{product.description || "Descripción detallada del producto."}</p>

            <div className="flex items-baseline space-x-4">
              <span className="text-5xl font-bold text-green-700">${product.price?.toFixed(2) || "0.00"}</span>
            </div>

            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-l-md transition duration-200"
                >
                  -
                </button>
                <button 
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-r-md transition duration-200"
                >
                  +
                </button>
              </div>
              <button className="flex-grow bg-yellow-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-yellow-700 transition duration-300 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Añadir al Carrito</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default CardDescription