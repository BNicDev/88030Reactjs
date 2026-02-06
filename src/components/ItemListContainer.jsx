import { useState, useEffect } from "react";
import {GetApi} from "./services/api";
import ItemList from "./itemList";



const ItemListContainer = ({name}) =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        GetApi()
        .then((datos)=>{
            setProducts(datos);
             setLoading(false)
            })
            .catch(err => {
                console.error(`error 1 ${err}`);
                setLoading(false)
            })
    },[])

    return (
        <div className="max-w-7xl mx-auto text-center p-4 mt-16 min-h-screen">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-12 capitalize">{name}</h1>
            
            {loading ? (
                <div className="text-white text-xl">Cargando catálogo...</div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );

}

export default ItemListContainer;