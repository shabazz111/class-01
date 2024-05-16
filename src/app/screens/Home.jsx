import axios from "axios";
import React, { useState } from "react";
import Button from "../Components/Button";
const API = "https://dummyjson.com/products";

const Home = () => {
  const [loader, setLoader] = useState(false);




  const [products, setProducts] = useState([]);
  const fetchAPi = async () => {
    try {
      setLoader(true);
      const { data } = await axios.get(API);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex w-full h-screen flex-col">
      <div className="flex w-full p-3 justify-end">
        <div className="flex w-44">
          <Button isLoading={loader} color={"blue"} onClickEvent={fetchAPi} />
        </div>
      </div>
        {products?.map(e => <span>{e?.title}</span> )}
    </div>
  );
};

export default Home;
