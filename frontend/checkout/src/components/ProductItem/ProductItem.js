import { useCartContext } from "../../contexts/CartContext";
import Card from "../Card/Card";
import "./ProductItem.css";

export default function ProductItem(props) {
  const { addToCart } = useCartContext();
  const { name, cost, instock, country } = props.product;
  return (
    <Card>
      <h3>{name}</h3>
      <div>
        ${cost}
        <br />
        {instock} left in stock
        <br />
        Country: {country}
      </div>
      <button
        onClick={() => {
          addToCart(name);
        }}
      >
        Add to Cart
      </button>
    </Card>
  );
}
