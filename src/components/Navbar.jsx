import cartWidget from "./CartWidget"

const Navbar = () => {

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-[#202226]'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg text-blue-600'>
            Buy & Sell
        </li>
        <li>
            All
        </li>
        <li>
            Clothes
        </li>
        <li>
            Electronics
        </li>
        <li>
            Furnitures
        </li>
        <li>
            Toys
        </li>
        <li>
            Others
        </li>
      </ul>
      {cartWidget()}
    </nav>
  )
}

export default Navbar