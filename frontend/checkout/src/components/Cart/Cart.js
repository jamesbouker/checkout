import { dollarAmountInCart, useCartContext } from "../../contexts/CartContext";
import Card from "../Card/Card";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";

export default function Cart(props) {
  const { cart, products, cartTotal, checkout } = useCartContext();

  const items = [];
  for (const productName in cart) {
    const quanity = cart[productName];
    const cost = dollarAmountInCart(productName, cart, products);
    const item = { name: productName, cost, quanity };
    items.push(item);
  }

  return (
    <Card style={{ margin: "1rem", minWidth: "12rem" }}>
      <h2>Cart</h2>
      {items.length === 0 && <>No Items in Cart</>}
      {items.map((item, index) => {
        return <CartItem key={index} {...item} />;
      })}
      {items.length > 0 && (
        <>
          <hr />
          <div style={{ marginBottom: "1rem" }}>
            <div>
              <h4 style={{ display: "inline-block", margin: 0 }}>Cost: </h4> $
              {cartTotal}
            </div>
            <div>
              <button
                style={{ marginTop: "0.5rem" }}
                onClick={() => {
                  checkout();
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
