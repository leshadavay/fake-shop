import React from "react";

const Home = () => {
  return (
    <>
      Hero Banner
      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
        <div>{["Product1", "Product2"].map((product) => product)}</div>
      </div>
      Footer
    </>
  );
};

export default Home;
