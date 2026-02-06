import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
    const [ count, setCount] = useState(initial);

    const increment = () => {
        if(count < stock) setCount(count + 1);
    }
    const decrement = () => {
        if(count > 1) setCount(count - 1);
    }

    return(
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <button onClick={decrement} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition text-black">-</button>
                <span className="px-6 font-bold text-black">{count}</span>
                <button onClick={increment} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition text-black">+</button>
            </div>
            <button onClick={()=>onAdd(count)} className="w-full bg-yellow-600 text-white font-bold py-3 rounded-md hover:bg-yellow-700 transition">Añadir al Carrito</button>
        </div>
    )
};
 export default ItemCount;
