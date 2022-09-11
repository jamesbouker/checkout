import { createContext, useContext, useMemo, useState } from "react";

const DUMMY_PRODUCTS = [
  {
    name: "apples",
    instock: 7,
    cost: 4,
    country: "usa",
  },
  {
    name: "oranges",
    instock: 10,
    cost: 3.5,
    country: "usa",
  },
  {
    name: "bananas",
    instock: 2,
    cost: 1.0,
    country: "usa",
  },
];

const EXAMPLE_CART = {
  apples: 12,
  oranges: 2,
  bananas: 0,
};

export const CartContext = createContext({
  cart: { ...EXAMPLE_CART },
  addToCart: (productName) => {},
  removeFromCart: (productName) => {},
  checkout: () => {},
  cartTotal: 0,
  products: DUMMY_PRODUCTS,
});

export function dollarAmountInCart(productName, cart, products) {
  const amount = cart[productName];
  if (amount == null) {
    return 0;
  }
  const prod = products.find((p) => p.name === productName);
  return prod.cost * amount;
}

export function CartContextProvider(props) {
  const [products, setProducts] = useState([...DUMMY_PRODUCTS]);
  const [cart, setCart] = useState({});

  function addToCart(productName) {
    const index = products.findIndex((prod) => prod.name === productName);
    if (index < 0 || products[index].instock <= 0) {
      return;
    }

    // add 1 to the cart
    const temp = { ...cart };
    if (temp[productName] == null) {
      temp[productName] = 0;
    }
    temp[productName] += 1;
    setCart(temp);

    // remove 1 from the instock
    const tempProds = [...products];
    tempProds[index].instock -= 1;
    setProducts(tempProds);
  }

  function removeFromCart(productName) {
    // remove 1 from the cart
    const temp = { ...cart };
    if (temp[productName] != null) {
      temp[productName] -= 1;
    }
    if (temp[productName] <= 0) {
      delete temp[productName];
    }
    setCart(temp);

    // add 1 back to the instock list
    const tempProds = [...products];
    const index = tempProds.findIndex((prod) => prod.name === productName);
    tempProds[index].instock += 1;
    setProducts(tempProds);
  }

  function checkout() {
    setCart({});
  }

  const cartTotal = useMemo(() => {
    let sum = 0;
    for (const productName in cart) {
      sum += dollarAmountInCart(productName, cart, products);
    }
    return sum;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, products]);

  const value = {
    products,
    cart,
    addToCart,
    removeFromCart,
    checkout,
    cartTotal,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
