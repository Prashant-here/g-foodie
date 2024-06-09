import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const UnderHome = ({searchs}) => {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("https://g-foodie.vercel.app/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data[0], data[1]);
      setFoodCategory(data[1]);
      setFoodItems(data[0]);
    } catch (error) {
      console.log(error, "Error in data fetching");
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  //  const foodCategory=data[1];

  return (
    <div className="h-[100vh] w-[100%] ">
      {foodCategory.map((data) => (
        <div className="flex flex-col">
          <div key={data._id} className="text-[#191966] text-[20px] font-extrabold p-10">{data.CategoryName}</div>
          <div className="p-5"><hr></hr></div>
          <div className="grid grid-cols-3">
          {foodItems.filter((items) =>
            ((items.CategoryName === data.CategoryName ) && (items.name.toLowerCase().includes(searchs.toLocaleLowerCase())))).map((d) => (
              <div key={d._id} >
                <Card foodItem={d} options={d.options[0]}/>
              </div>
            ))
          }
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default UnderHome;
