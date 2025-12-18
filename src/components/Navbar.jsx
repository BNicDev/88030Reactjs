import cartWidget from "./CartWidget"
import showByCategory from "./categoryShow"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-[#202226]'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg text-blue-600'>
            Buy & Sell
        </li>
        <li>
          <Link to={'/'} className="!text-white">All</Link>
        </li>
        <li>
           <Link to={`/products/category/electronics`} className="!text-white">Electronics</Link>
        </li>
        <li>
            <Link to={`/products/category/jewelery`} className="!text-white">Jewelery</Link>
        </li>
        <li>
            <Link to={`/products/category/men's clothing`} className="!text-white">Men's clothing</Link>
        </li>
        <li>
          <Link to={`/products/category/women's clothing`} className="!text-white">Women's clothing</Link>
        </li>
      </ul>
      {cartWidget()}
    </nav>
  )
}

export default Navbar