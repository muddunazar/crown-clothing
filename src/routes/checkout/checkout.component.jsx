// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>

                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>

                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>

                </HeaderBlock>

            </CheckoutHeader>

            {cartItems.map((cartItem) => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer >
    )
}
export default Checkout;