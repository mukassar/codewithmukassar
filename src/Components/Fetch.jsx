import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
  const [user, setusers] = useState([]);
  const Getuser = async () => {
    const response = await axios.get("https://dummyjson.com/products?limit=10");
    // console.log(response.data.products);
    setusers(response.data.products);
  };
  useEffect(() => {
    Getuser();
  }, []);
  return (
    <div>
      <table>
        {user.map((item, i) => {
          return (
            <div>
              <ol key={i}>
                <li>{item.id}</li>
                <li>{item.title}</li>
                <li>{item.description}</li>
                <li>{item.brand}</li>
                <li>{item.price}</li>
                <li>{item.discountPercentage}</li>
                <li>{item.rating}</li>
                <li>{item.stock}</li>
              </ol>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default Fetch;
