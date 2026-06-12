import React, { useEffect, useState } from "react";

const Products = () => {
const [products, setProducts] = useState([]);
const[isloading, setIsLoading] = useState(false)
const[isError, setIsLoading] = useState(false)
const[errorMessage, setIsLoading] = useState("")

const fetchProducts = async () =>{
  try{
setIsLoading(true);

const res = await fetch("https://fakestroeapi.com/products");
const data = await res.json
  }
}

 
  return (
    <>
      <div className=" p-10 grid-cols-4 gap-5">
        <div className="card w-80 border rounded h-100 p-3">
          <div className="w-full h-40">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt=""
              className="w-full h-full object-contain"
            /> 
          </div>
          <br />

          <div  className=" flex justify-center">
            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
           <p>men's clothing</p>
           <p>109.5</p>
           <p>3.5/5</p>
          </div>

          <div className="text-center mt-10  ">
            <button className="bg-amber-700 p-3 rounded-md">Add To Cart</button>
          </div>
        </div>
      </div>
 
    
    </>
  );
};

export default Products;
