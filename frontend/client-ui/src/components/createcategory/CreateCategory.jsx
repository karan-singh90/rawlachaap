import React from "react";
import axios from "axios";
import { useState } from "react";
import "./createcategory.css"

const CreateCategory = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputs, setInputs] = useState([
    { item: "", half: "", full: "", family: "" },
  ]);

  //const { options, onChange } = useState(["THALI",]);;

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

    const createCategory = {
      category_name: selectedOption,
      items: newItemsArray,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/category",
        createCategory
      );
      alert("Category submitted Thanks !!")
      
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Some Error Occured !!")
    }
   
  };

  return (
    <div className="mainContent">
      {props.toggle && (
        <div className="">
          <h2 style={{textAlign:"center" }}>Create Category</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="options">Choose a category : </label>
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
              <option value="CHAAP">CHAAP</option>
              <option value="PANEER">PANEER</option>
              <option value="MOMOS">MOMOS</option>
              <option value="GRAVY">GRAVY</option>
              <option value="TAWA SE">TAWA SE</option>
              <option value="SALAD">SALAD</option>
              <option value="CHUTNI">CHUTNI</option>
              <option value="SOUPS">SOUPS</option>
              <option value="PAPAD">PAPAD</option>
              <option value="ROTI & PARATHA">ROTI & PARATHA</option>
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
                        required
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
            <button type="submit" style={{marginLeft:"320px" }}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateCategory;
