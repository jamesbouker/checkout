import { useCartContext } from "../../contexts/CartContext";
import Card from "../Card/Card";
import ProductItem from "../ProductItem/ProductItem";
import "./StoreFront.css";

export default function StoreFront(props) {
  const { products, restock } = useCartContext();

  return (
    <Card style={{ margin: "1rem", minWidth: "12rem" }}>
      <h2>Store Front</h2>
      {products.map((product, index) => {
        return <ProductItem product={product} key={index} />;
      })}
      <>
        <hr />
        <div style={{ marginBottom: "1rem" }}>
          <div>
            <h4 style={{ display: "inline-block", margin: 0 }}>Re-stock: </h4>
          </div>
          <div>
            <button
              style={{ marginTop: "0.5rem" }}
              onClick={() => {
                restock();
              }}
            >
              Restock Products
            </button>
          </div>
        </div>
      </>
    </Card>
  );
}
