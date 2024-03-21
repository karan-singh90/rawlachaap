import React from "react";
import "./sidebar.css";
import { useState } from "react";
import axios from "axios";

const Sidebar = () => {
  const [createCategory, setCreateCategory] = useState(false);

  const toggleCreateCategoryVisibility = () => {
    setCreateCategory(!createCategory);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [inputs, setInputs] = useState([
    { item: "", half: "", full: "", family: "" },
  ]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], [name]: value };
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { item: "", half: "", full: "", family: "" }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", { selectedOption, inputs });

    const category_name = selectedOption;
    console.log("category_name ::", category_name);

    const newItemsArray = inputs.map((items) => {
      return {
        item_name: items.item,
        half_price: items.half,
        full_price: items.full,
        family_price: items.family,
      };
    });

    console.log("items ::", newItemsArray);

    const createCategory={
      category_name :selectedOption,
      items:newItemsArray
    };

    try {
      const response = await axios.post("http://localhost:8000/api/category",createCategory);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main">
      <div className="sidebar">
        <h2>Categories</h2>
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
          <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Search Catgory
            </a>
          </li>
          <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Delete Category
            </a>
          </li>
          <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Update Category
            </a>
          </li>
        </ul>
        <h2>Orders</h2>
        <ul className="sidebar-ul">
          <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Place order
            </a>
          </li>
          <li className="cat-li">
            <a className="side-a" href="https://www.example.com">
              Order Summary
            </a>
          </li>
        </ul>
      </div>
      <div className="mainContent">
        {createCategory && (
          <div className="mainContent">
            <h2>Create Category</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="options">Choose an option:</label>
              <select
                id="options"
                value={selectedOption}
                onChange={handleOptionChange}
                required
              >
                <option value="">Select</option>
                <option value="THALI">THALI</option>
                <option value="RAITA">RAITA</option>
                <option value="RICE">RICE</option>
              </select>
              <br />
              <br />

              <table>
                <thead>
                  <tr>
                    <th>ITEM NAME</th>
                    <th>HAlF PRICE</th>
                    <th>FULL PRICE</th>
                    <th>FAMILY PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  {inputs.map((input, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name="item"
                          value={input.item}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="half"
                          value={input.half}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="full"
                          value={input.full}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="family"
                          value={input.family}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="button" onClick={handleAddInput}>
                Add Input
              </button>
              <br />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
