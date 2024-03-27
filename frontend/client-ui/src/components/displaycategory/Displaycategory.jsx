import React from "react";
import "./displaycategory.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Displaycategory = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/category");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        console.log("Response", json);
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [data]);

  const deleteItem =async(itemId,categoryId)=>{
    try {
      const response = await axios.delete(`http://localhost:8000/api/category/${categoryId}/item/${itemId}`);
      console.log('Data deleted successfully:', response.data);
   const newData=   removeItemFromCategory(data,itemId);
   console.log("new Data",newData);

      setData(newData);
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  }

  function removeItemFromCategory(array, idToRemove) {
    return array.map(category => {
      // If the current item has a nested array and the ID exists in it, filter it out
      if (category.items && Array.isArray(category.items)) {
        category.items = category.items.filter(item => item._id !== idToRemove);
      }
      return category;
    });
  }

  if (isLoading) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Error: {error.message} data</h1>
      </div>
    );
  }
  const tableHeaders = [
    " ITEM NAME ",
    " HALF PRICE ",
    " FULL PRICE ",
    " FAMILY PRICE ",
    " EDIT ",
    " DELETE "
  ];

  return (
    <div className="mainContent">
      {props.toggle && (
        <div className="table-container">
          <h2 style={{textAlign:"center" }}>Categories</h2>
          {data.map((category, index) => (
            <table className="scrolling-table">
              <thead>
               <span  key={index}><b style={{textAlign:"center"}}>{category.category_name}</b></span> 
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {category.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.item_name}</td>
                    <td>{item.half_price}</td>
                    <td>{item.full_price}</td>
                    <td>{item.family_price}</td>
                    <td><button >Edit</button></td>
                    <td><button onClick={()=>deleteItem(item._id,category._id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      )}
    </div>
  );
};

export default Displaycategory;
