import {useCart} from '../context/CartContext';
import {Link} from 'react-router-dom';

const Cart = () => {
    const {cart,removeItem, clear,totalPrice} = useCart();

    if(cart.length === 0){
        return(
            <div className='flex flex-col items-center justify-center min-h-screen bg-[#1a1c20] text-white'>
                <h2 className='text-2xl mb-4'>Tu carrito está vacío 🛒</h2>
                <Link to = '/' className = 'bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition'>
                    Volver a la tienda
                </Link>
            </div>
        )
    }
    return(
        <div className='min-h-screen bg-[#1a1c20] pt-24 px-8 text-white'>
            <h1 className='text-3xl font-bold mb-8 border-b border-gray-700 pb-4'>Resumen de la compra</h1>

            <div className='max-w-4xl mx-auto space-y-4'>
                {cart.map((item)=>(
                    <div key={item.id} className='flex items-center justify-between bg-[#202226] p-4 rounded-xl shadow-md'>
                        <img src={item.image} alt={item.name} className='w-16 h-16 object-contain bg-white rounded p-1' />
                        <div className='flex-grow ml-4'>
                            <h3 className='font-bold'>{item.title}</h3>
                            <p className='text-gray-400'>cantidad: {item.quantity}</p>
                            <p className='text-blue-400 font-bold'>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <button onClick={()=>removeItem(item.id)} className='text-red-500 hover:text-red-700 font-semibold p-2'>
                            Eliminar
                        </button>
                    </div>
                ))}
                <div className='mt-8 p-6 bg-[#20226] rounded-xl flex justify-between items-center'>
                    <button onClick={clear} className='text-gray-400 hover:text-white underline text-sm'>Vaciar Carrito</button>
                    <div className='text-right'>
                        <p className='text-xl font-bold'>Total: ${totalPrice().toFixed(2)}</p>
                        <button className='mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold tansition'>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart