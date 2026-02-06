import { useParams, Link} from "react-router-dom"
import { GetSelected } from "./api";
import { useEffect, useState } from "react";
import {useCart} from "../../context/CartContext"
import ItemCount from "../itemCount";


const CardDescription = () =>{
    const {id} = useParams();
    const [product, setProducts] = useState({});
    const [isAdded, setIsAdded] = useState(false);
    const {addItem} = useCart();


    useEffect(()=>{
        GetSelected(id).then(item=>setProducts(item))
    },[id])

    const onAdd = (quantity)=>{
      addItem(product,quantity);
      setIsAdded(true)
    }

    return (
      <div className="flex flex-col min-h-screen bg-gray-100 font-sans pt-16">
          <div className="container mx-auto p-6 md:p-8 flex-grow">
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                  <div className="flex justify-center items-center p-4 bg-gray-50 rounded-lg">
                      <img 
                          src={product.image || "https://via.placeholder.com/400x400?text=Cargando..."} 
                          alt={product.title} 
                          className="max-h-96 object-contain rounded-md"
                      />
                  </div>

                  <div className="space-y-6">
                      <h1 className="text-4xl font-extrabold text-gray-900">{product.title}</h1>
                      <p className="text-gray-600 text-lg">{product.description}</p>
                      <span className="text-5xl font-bold text-green-700 block">
                          ${product.price?.toFixed(2)}
                      </span>

                      <div className="mt-8">
                          {!isAdded ? (
                              <ItemCount 
                                  stock={10} 
                                  initial={1} 
                                  onAdd={onAdd} 
                              />
                          ) : (
                              <div className="flex flex-col gap-3">
                                  <Link 
                                      to="/cart" 
                                      className="w-full bg-green-600 text-white font-bold py-3 rounded-md text-center hover:bg-green-700 transition "
                                  >
                                      Terminar mi compra
                                  </Link>
                                  <Link to="/" className="text-black text-center underline">
                                      Seguir comprando
                                  </Link>
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default CardDescription