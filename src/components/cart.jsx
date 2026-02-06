import {useCart} from '../context/CartContext';
import {Link} from 'react-router-dom';

const Cart = () => {
    const {cart,removeItem, clear,totalQuantity} = useCart();

    const totalPrice = cart.reduce((acc,item)=>acc + (item.price * item.quantity), 0)

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
    return (
        <div className="min-h-screen bg-[#1a1c20] pt-28 px-4 md:px-10 text-white">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">Carrito de Compras</h1>
                
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row items-center justify-between bg-[#202226] p-6 rounded-xl border border-gray-700 gap-4">
                            <img src={item.image} alt={item.title} className="w-20 h-20 object-contain bg-white rounded-lg p-2" />
                            
                            <div className="flex-grow text-center md:text-left md:ml-6">
                                <h3 className="text-lg font-bold text-blue-400">{item.title}</h3>
                                <p className="text-gray-400">Precio unitario: ${item.price.toFixed(2)}</p>
                                <p className="text-white">Cantidad: {item.quantity}</p>
                            </div>

                            <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2">
                                <p className="text-xl font-bold text-green-500">${(item.price * item.quantity).toFixed(2)}</p>
                                <button 
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:text-red-400 text-sm font-semibold underline"
                                >
                                    Quitar producto
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 p-8 bg-[#202226] rounded-2xl border-2 border-blue-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <button onClick={clear} className="text-gray-400 hover:text-white transition underline">
                            Vaciar todo el carrito
                        </button>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-gray-400 text-sm">Total de productos: {totalQuantity()}</p>
                        <p className="text-4xl font-extrabold text-white mt-1">Total: ${totalPrice.toFixed(2)}</p>
                        <button className="mt-6 w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-black text-lg transition shadow-lg">
                            FINALIZAR COMPRA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart