import React from "react";

const Products = () => {
  return (
    <>
      <div className=" p-10 grid-cols-4">
        <div className="card w-80 border rounded h-100">
          <div className="w-full h-40">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <br />

          <div  className="text-center">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            fuga illo quas cupiditate iusto! Totam temporibus perspiciatis ut
            cum impedit.
          </div>

          <div className="text-center mt-10  ">
            <button className="bg-amber-700 p-3 rounded-md">Add To Cart</button>
          </div>
        </div>
      </div>

      <div className=" p-10 flex-cols-4 justify-center">
        <div className="card w-full border rounded h-50 grid">
          <div className="w-30 h-40 mx-12 p-3">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt=""
              className=" h-full object-contain"
            />
          </div>
         

          <div className="ps-60 ">
            <div  className="text-center top-0">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            fuga illo quas cupiditate iusto! Totam temporibus perspiciatis ut
            cum impedit.
          </div>

          <div className="text-center   ">
            <button className="bg-amber-700 p-3 rounded-md">Add To Cart</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
