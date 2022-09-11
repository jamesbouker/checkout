const express = require("express");
const app = express();
const port = 3001;

const PRODUCTS = [
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

app.get("/products", (req, res) => {
  res.json(PRODUCTS);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
