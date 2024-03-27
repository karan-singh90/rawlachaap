import React, { useEffect } from "react";
import "./main.css";
import { useState } from "react";
import CreateCategory from "../createcategory/CreateCategory";
import Displaycategory from "../displaycategory/Displaycategory";

const Maincontent = () => {
  const [createCategory, setCreateCategory] = useState(false);
  const [displayCategory, setDisplayCategory] = useState(false);

  const toggleCreateCategoryVisibility = () => {
    setCreateCategory(!createCategory);
    setDisplayCategory(false);
  };

  const toggleDisplayCategoryVisibility = () => {
    setDisplayCategory(!displayCategory);
    setCreateCategory(false);
  };

  return (
    <div className="main">
      <div className="sidebar">
        <h2 >Categories</h2>
        <ul className="sidebar-ul">
          <li className="cat-li">
            <a
              className="side-a"
              href="#"
              onClick={toggleCreateCategoryVisibility}
            >
              Create Category
            </a>
          </li>
          {/* <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Search Category
            </a>
          </li>
          <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Remove Category
            </a>
          </li>
          <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Edit Category
            </a>
          </li> */}
          <li className="cat-li">
            <a
              className="side-a"
              href="#"
              onClick={toggleDisplayCategoryVisibility}
            >
              Show Categories
            </a>
          </li>
        </ul>
        <h2>Orders</h2>
        <ul className="sidebar-ul">
          <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Place Order
            </a>
          </li>
          <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Order Summary
            </a>
          </li>
        </ul>
      </div>
      <CreateCategory toggle={createCategory} />
      <Displaycategory toggle={displayCategory} />
    </div>
  );
};

export default Maincontent;
