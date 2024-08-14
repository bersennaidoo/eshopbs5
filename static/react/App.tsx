import React, { FC, useEffect, useState } from "react";
import createDB from "./data/db";
import { SuperStoreDB, Product } from "./data/db";
import axios, { AxiosResponse } from "axios";

const sdb: SuperStoreDB = {
  products: [],
};

const cdb = (d: SuperStoreDB): Product[] => {
    let db = createDB(d);
    db.data.products.push({
      id: "1",
      name: "Syringe1",
      image: "/images/800x600.png",
      slug: "/800x600.png",
      price: 10,
      description: "a syringe",
    });

    db.write();
    const { products } = db.data;
    return products;
  };


export const App: FC = () => {
  const [prods, setProds] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("/react/data/db.json")
         .then((res) => {
          setProds([...prods, ...res.data])
         })
         .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      {prods.map((p) => (
        <div key={p.name}>
          <h1>{p.name}</h1>
          <p>{p.description}</p>
          <img src={p.image} />
        </div>
      ))}
    </div>
  );
};

export default App;
