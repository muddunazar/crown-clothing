import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
// import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
import { setIsCartOpen } from '../../store/cart/cart.action.js'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
const CartIcon = () => {
    const dispatch = useDispatch();
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>

        </CartIconContainer>
    )
};
export default CartIcon;
