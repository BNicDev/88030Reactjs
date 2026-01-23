import { createContext, useState,useContext} from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    
    const addItem = (item, quantity)=>{
        if(isInCart(item.id)){
            setCart(cart.map(prod =>
                prod.id===item.id
                ? {...prod, quantity: prod.quantity + quantity}
                :prod 
                ));
        }
        else{
            setCart([...cart,{...item, quantity}]);
        }
    }

    const removeItem = (itemId)=>{
        const updatedCart = cart.filter(prod => prod.id !== itemId);
        setCart(updatedCart)
    }

    const clear = () => setCart([]);

    const isInCart = (id) => cart.some(prod => prod.id===id);

    const totalQuantity = () => cart.reduce((acc,prod)=> acc + prod.quantity, 0);
    const totalPrice = () => cart.reduce((acc,prod => acc + (prod.quantity * prod.price), 0))

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clear,
            isInCart,
            totalQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}
