import { useCart } from "../context/CartContext";
import {Link} from "react-router-dom"

const cartWidget = ()=>{

const {totalQuantity} = useCart();
const quantity = totalQuantity();

if(quantity === 0 ) return null;

    return(
      <Link to='/Cart' className="flex items-center gap-2 text-white bg-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-700 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className='font-bold text-xs'>{quantity}</span>
      </Link>
    )
}
export default cartWidget