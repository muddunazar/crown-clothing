import { createContext, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToAdd.id
    );
    //if found,increment quantity
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }

    //return new array with modified cartItems/new cartItems
    //i.e new added to prev && if all above program donot work least return && if there is new product
    return [...cartItems, { ...productToAdd, quantity: 1 }]
    // [{ ...productToAdd, quantity: 1 }]
}
//decrement
const removeCartItem = (cartItems, productToRemove) => {
    //find the cartItem to remove
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToRemove.id
    );
    //check if quantity is equal to 1, if it is remove item from cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }
    //return back cartItems with matching cart items with reduced quantiy
    return cartItems.map(cartItem => cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem)
}
//remove
const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
});
const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartTotal: 0,
    cartCount: 0
};

const cartReducer = (state, action) => {
    const { type, payload } = action;



    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type of ${type}  in cartReducer`);
    }

}

export const CartProvider = ({ children }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    const [{ cartTotal, cartCount, cartItems, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    //     setCartCount(newCartCount)
    // }, [cartItems])
    // //total
    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    //     setCartTotal(newCartTotal)
    // }, [cartItems])

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        // dispatch(
        //     {
        //         type: CART_ACTION_TYPES.SET_CART_ITEMS,
        //         payload: {
        //             cartItems: newCartItems,
        //             cartTotal: newCartTotal,
        //             cartCount: newCartCount
        //         }
        //     });
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount
            })
        );
    };

    const addItemToCart = (productToAdd) => {
        // setCartItems(addCartItem(cartItems, productToAdd))
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems);
    }
    //decrement
    const removeItemFromCart = (cartItemToRemove) => {
        // setCartItems(removeCartItem(cartItems, cartItemToRemove))
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }
    //clear
    const clearItemFromCart = (cartItemToClear) => {
        // setCartItems(clearCartItem(cartItems, cartItemToClear))
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        // dispatch(
        //     {
        //         type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
        //         payload: bool
        //     }
        //     );
        dispatch(
            createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
