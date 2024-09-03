import React, { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IProduct } from "./data/entities";
import axios from "axios";
import NotFound from "./components/NotFound";
import Shop from "./components/Shop";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import HeroCarousel from "./components/HeroCarousel";
import EStoreCallout from "./components/EStoreCallout";
import { CSpinner, CButton } from "@coreui/react"

interface Post {
  id: string
  title: string
}

export const App: FC = () => {
  const [prods, setProds] = useState<IProduct[]>([]);
  const [post, setPost] = useState<string>("")

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
        setPost(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  if (prods.length === 0) {
    return <CSpinner className="bg-info" />
  }

  return (
    <Router>
      <h1>{post}</h1>
      <Header />
      <HeroCarousel />
      <EStoreCallout />
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
