import React, { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Product from "./components/Product";
import { IProduct } from "./data/entities";
import axios from "axios";
import NotFound from "./components/NotFound";
import Shop from "./components/Shop"
import Header from "./components/Header"
import Details from "./components/Details"
import ProductDetail from "./components/ProductDetail";

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
    <Router>
      <Header />
      <Routes>
        <Route path="/shop/details" element={<Details products={prods}/>} >
          <Route index element={<div>No Product Selected</div>} />
          <Route path=":id" element={<ProductDetail products={prods}/>} />
        </Route>
        <Route path="/shop" element={<Shop products={prods} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
