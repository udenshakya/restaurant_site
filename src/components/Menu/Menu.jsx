import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Menu.css";
import { useState, useEffect } from "react";
import Searchresult from "./Searchresult";

export const BASE_URL = "http://localhost:9000";

const Menu = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedbtn, setselectedbtn] = useState("all");

  useEffect(() => {
    const fetchFoddData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoddData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterfood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setselectedbtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setselectedbtn(type);
  };

const filterbtns=[
  {
    name:"All",
    type:"all"
  },
  {
    name:"Breakfast",
    type:"breakfast"
  },
  {
    name:"Lunch",
    type:"lunch"
  },
  {
    name:"Dinner",
    type:"dinner"
  },

]



  return (
    <>
      <Navbar />
      <div className="categories">
      <div className="button">
    {filterbtns.map((value) => (
      <button key={value.name} isSelected={selectedbtn===value.type}  onClick={() => filterfood(value.type)}>
        {value.name}
      </button>
    ))}
  </div>
        <div className="search">
          <input onChange={searchFood} placeholder="Search Food.." />
        </div>
        </div>
      <Searchresult data={filteredData} />
    </>
  );
};

export default Menu;
