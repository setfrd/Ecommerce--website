import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that enables you to
          explore and purchase a wide range of products from the comfort of your
          home. With intuitive navigation and secure transactions, you can shop
          for everything from electronics to fashion items with ease. Experience
          the convenience of online shopping today.
        </p>
        <p>
          E- commerce websites typically display products or servces along with
          detailed dexcriptions. Images, prices, and any aviable variations
          (e.g. sizes, colors). Each prodcut usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
