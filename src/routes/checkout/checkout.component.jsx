import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import Modal from "../../components/Modal/Modal";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  Order,
  Close,
  Card,
} from "./checkout.styles";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { Fragment } from "react";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [open, setIsOpen] = useState(false);

  const showCartHandler = () => {
    setIsOpen(true);
  };
  const hideCartHandler = () => {
    setIsOpen(false);
  };
  const content = (
    <Fragment>
      <Card>
        <h2 style={{ textAlign: "center" }}>Order Placed Successfully !!!</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Close onClick={hideCartHandler}>close</Close>
        </div>
      </Card>
    </Fragment>
  );
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

      {cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <div style={{ marginTop: "30px", marginLeft: "auto", fontSize: "36px" }}>
        <Order onClick={showCartHandler}>Order</Order>
        {open && <Modal onClose={hideCartHandler}>{content}</Modal>}
      </div>
    </CheckoutContainer>
  );
};
export default Checkout;
