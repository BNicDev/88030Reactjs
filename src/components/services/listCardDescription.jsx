import { useParams, useSearchParams } from "react-router-dom"
import { GetSelected } from "./api";
import { useEffect, useState } from "react";
import {useCart} from "../../context/CartContext"
import { Link } from "react-router-dom";


const CardDescription = () =>{
    const {id} = useParams();
    const [product, setProducts] = useState({});

    const [count, setCount] = useState(1)
    const {addItem} = useCart();

    const [isAdded, setIsAdded] = useState(false);

    useEffect(()=>{
        GetSelected(id).then(item=>setProducts(item))
    },[id])

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () =>{
      if(product.id){
        addItem(product, count);
        setIsAdded(true);
      }
    }

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
            {!isAdded ? (
        <>
            <div className="flex items-center border border-gray-300 rounded-md">
                <button onClick={decrement} className="px-4 py-2">-</button>
                <span className="px-4">{count}</span>
                <button onClick={increment} className="px-4 py-2">+</button>
            </div>
            <button onClick={handleAddToCart} className="flex-grow bg-yellow-600 text-white font-semibold py-3 rounded-md">
                Añadir al Carrito
            </button>
        </>
    ) : (
        <Link 
            to="/cart" 
            className="w-full bg-green-600 text-white font-bold py-3 rounded-md text-center hover:bg-green-700 transition"
        >
            Terminar mi compra
        </Link>
    )}
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default CardDescription