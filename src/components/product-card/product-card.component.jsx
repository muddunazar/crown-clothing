import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ProductCartContainer, Footer, Price, Name } from './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () =>
        addItemToCart(product);


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