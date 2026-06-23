import React from "react";
import Axios from "../src/utils/Axios";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const responce = await Axios.get("products/");
    console.log(responce);
    setProducts(responce.data);
  };

  return (
    <div>
      <button
        className=" m-8 bg-blue-600 py-4 px-4 text-white font-bold rounded"
        onClick={getData}
      >
        Get Data
      </button>
      {products.map((e, i) => {
       return(
         <div key={i}>
          <h1>{e.title}</h1>
        </div>
       )
      })}
    </div>
  );
};

export default App;
