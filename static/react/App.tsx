import React, { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IProduct } from "./data/entities";
import axios from "axios";
import NotFound from "./components/NotFound";
import Shop from "./components/Shop";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

export const App: FC = () => {
  const [prods, setProds] = useState<IProduct[]>([]);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    axios
      .get("/react/data/db.json")
      .then((res) => {
        setProds([...prods, ...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/.netlify/functions/hello")
      .then((res) => {
        setName(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (prods.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <h1>{name}</h1>
      <Header />
      <Routes>
        <Route path="/shop/details" element={<ProductList products={prods} />}>
          <Route index element={<div>No Product Selected</div>} />
          <Route path=":id" element={<ProductDetail products={prods} />} />
        </Route>
        <Route path="/shop" element={<Shop products={prods} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
