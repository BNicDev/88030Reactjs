import { useState, useEffect } from "react";
import ListCard from "./listCard";
import {GetApi} from "./services/api";



const ItemList = ({name}) =>{

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        GetApi()
        .then((datos)=>setProducts(datos))
    },[])

    return(
        <div className="max-w-6xl mx-auto text-center p-4 mt-8">
             <h1 className="text-5xl font-extrabold text-blue-800 mb-12 mt-12">{name}</h1>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {products.map((data)=>(<ListCard key={data.id} productos={data}/>))}
             </div>
        </div>

    )

}

export default ItemList;