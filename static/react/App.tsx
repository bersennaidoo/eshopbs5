import React, { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Product, { IProduct } from "./components/Product";
import axios from "axios";
import ProductList from "./components/ProductList";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

export const App: FC = () => {
  const [prods, setProds] = useState<IProduct[]>([]);

  useEffect(() => {
    axios.get("/react/data/db.json")
         .then((res) => {
          setProds([...prods, ...res.data])
         })
         .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <Home products={prods} />
    </div>
  );
};

export default App;
