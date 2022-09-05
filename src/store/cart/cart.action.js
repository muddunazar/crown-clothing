import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";


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

export const addItemToCart = (cartItems, productToAdd) => {
    // setCartItems(addCartItem(cartItems, productToAdd))
    const newCartItems = addCartItem(cartItems, productToAdd);
    // >>>>>>>>>>>>>>>>>>>>>>// updateCartItemsReducer(newCartItems);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

}
//decrement
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // setCartItems(removeCartItem(cartItems, cartItemToRemove))
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    // >>>>>>>>>>>>>>>>>>>>>>//updateCartItemsReducer(newCartItems);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

}
//clear
export const clearItemFromCart = (cartItems, cartItemToClear) => {
    // setCartItems(clearCartItem(cartItems, cartItemToClear))
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    // >>>>>>>>>>>>>>>>>>>>>>// updateCartItemsReducer(newCartItems);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

}

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);


// const addItemToCart = (productToAdd) => {
//     // setCartItems(addCartItem(cartItems, productToAdd))
//     const newCartItems = addCartItem(cartItems, productToAdd)
//     updateCartItemsReducer(newCartItems);
// }
// //decrement
// const removeItemFromCart = (cartItemToRemove) => {
//     // setCartItems(removeCartItem(cartItems, cartItemToRemove))
//     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//     updateCartItemsReducer(newCartItems);
// }
// //clear
// const clearItemFromCart = (cartItemToClear) => {
//     // setCartItems(clearCartItem(cartItems, cartItemToClear))
//     const newCartItems = clearCartItem(cartItems, cartItemToClear)
//     updateCartItemsReducer(newCartItems);
// }
