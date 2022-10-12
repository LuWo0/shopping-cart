import { createContext, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const cartQuantity = cartItems.reduce((quantity,item) => item.quantity + quantity, 0);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }
    const increaseCartQuantity = (id) => {
        setCartItems(currItems => {
            if(cartItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity:1 }]
            } else {
                return currItems.map(items => {
                    if (items.id === id){
                        return {...items, quantity: items.quantity + 1}
                    } else
                        return items;
                });
            }
        });
    }

    const decreaseCartQuantity = (id) => {
        setCartItems(currItems => {
            if(cartItems.find(item => item.id === id) === 1){
                return currItems.filter(item => item.id !== id);
            }
            return currItems.map(items => {
                if (items.id === id){
                    return {...items, quantity: items.quantity - 1}
                }
                return items;
            });
        });
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems => {
            return cartItems.filter(item => item.id !== id);
        });
    }
    return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart }}>
        {children}
        <ShoppingCart isOpen={ isOpen } />
    </ShoppingCartContext.Provider>
    )
}