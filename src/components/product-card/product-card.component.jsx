// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import { ProductCartContainer, Footer, Price, Name } from './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    // const { addItemToCart } = useContext(CartContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () =>
        // addItemToCart(product)
        // dispatch(addItemToCart(product));
        dispatch(addItemToCart(cartItems, product));




    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            {/* <Button buttonType='inverted'>Add to card</Button> */}
            {/* <Button buttonType='inverted' onclick={() => addItemToCart(product)}>Add to card</Button> */}
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
        </ProductCartContainer>
    )
}
export default ProductCard;  