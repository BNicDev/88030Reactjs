import { useState, useEffect } from "react";
import ListCard from "./listCard";
import GetApi from "./services/api";



const ItemList = ({name}) =>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        GetApi()
        .then((datos)=>setProducts(datos))
    },[])


    return(
        <div className="max-w-4xl mx-auto text-center p-4 mt-24">
             <h1 className="text-4xl font-bold">{name}</h1>
             <div className="item-container">
                {products.map((data)=>(<ListCard key={data.id} productos={data}/>))}
             </div>
        </div>

    )

}

export default ItemList;