import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="navigator">
        <div className="navbox">Description</div>
        <div className="navbox fade"> Reviews(122)</div>
      </div>
      <div className="description">
        <p>
          AN e-commerce website is an online platform that facilitated buying
          and selling of products or services over the internet serves as a
          virtual marketplace where businesses and individual showcase their
          products, interact with customers , and conduct transactions without
          ther need for a physical immense popularity due to their convenial
          accessibility and the global reach they offer.
        </p>
        <p>E-commerce websites typically display products or services along with detailed descrioptions, images, prices, and any available variations ( e.g. sizes, colors).Each products usually has its own duplicated page with relevant infromation.</p>

      </div>
    </div>
  );
};

export default DescriptionBox;
