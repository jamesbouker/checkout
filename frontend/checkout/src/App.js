import "./App.css";
import Cart from "./components/Cart/Cart";
import StoreFront from "./components/StoreFront/StoreFront";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="container">
        <StoreFront />
        <Cart />
      </div>
    </CartContextProvider>
  );
}

export default App;
