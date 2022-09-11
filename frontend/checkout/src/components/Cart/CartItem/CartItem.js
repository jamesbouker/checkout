import { useCartContext } from "../../../contexts/CartContext";
import Card from "../../Card/Card";

export default function CartItem(props) {
  const { removeFromCart } = useCartContext();
  const { name, cost, quanity } = props;
  return (
    <Card>
      <h3>{name}</h3>
      <p>
        Cost: ${cost} for {quanity} {name} in cart
      </p>
      <button
        onClick={() => {
          removeFromCart(name);
        }}
      >
        Remove from Cart
      </button>
    </Card>
  );
}
