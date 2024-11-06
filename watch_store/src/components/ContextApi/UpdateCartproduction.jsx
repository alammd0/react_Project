import { createContext, useState } from "react";


export const UpdateCartproduct = createContext();

export const UpdateProvider = ({ children }) => {

    const [cartItem, setCartItem] = useState([]);
    

    const addCart = (product) => {
        setCartItem((prevCart) => {
            const exitingCart = prevCart.find((card) => card.id === product.id);

            if (exitingCart) {
                return prevCart.map((item) => (
                    item.id === product.id ? { ...item, Quality: item.Quality + 1, totalPrice : (item.quantity + 1) * item.price } : (item)
                ))

            }

            return [...prevCart, { ...product, Quality: 1, totalPrice : product.price }];

        })
    }


    const removeCart = (productId) => {
        setCartItem((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    const updateQuantity = (productId, quantity) => {
        setCartItem((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity, totalPrice : item.price * quantity} : item
            )
        );
    };


    const getTotalCartPrice = () => {
        return cartItem.reduce((total, item) => total + Number(item.totalPrice), 0);
    };



    const clearCart = () => {
        setCartItem([]);
    }


    const values =  {
        cartItem,
        addCart,
        updateQuantity,
        removeCart,
        clearCart,
        getTotalCartPrice
    };

    return(
        <UpdateCartproduct.Provider value={values}>
            {children}
        </UpdateCartproduct.Provider>
    )
}