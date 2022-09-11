import { useCartContext } from "../../contexts/CartContext";
import Card from "../Card/Card";
import ProductItem from "../ProductItem/ProductItem";
import "./StoreFront.css";

export default function StoreFront(props) {
  const products = useCartContext().products;

  return (
    <Card style={{ margin: "1rem", minWidth: "12rem" }}>
      <h2>Store Front</h2>
      {products.map((product, index) => {
        return <ProductItem product={product} key={index} />;
      })}
    </Card>
  );
}
