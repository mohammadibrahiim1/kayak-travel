import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
import DisplayAirline from "../DisplayAirline/DisplayAirline";
import "./Airlines.css";
import FilterOptions from "../FilterOptions/FilterOptions";

// filter alliances

// const categories = ;

const Airlines = () => {
  const [filters, setFilters] = useState([
    { elm: "One World", alliance: "OW", isChecked: false },
    { elm: "Sky Team", alliance: "ST", isChecked: false },
    { elm: "Star Allience", alliance: "SA", isChecked: false },
    // Add more filter options as needed
  ]);
  // const [category, setCategory] = useState([
  //   { elm: "One World", alliance: "OW", isChecked: false },
  //   { elm: "Sky Team", alliance: "ST", isChecked: false },
  //   { elm: "Star Allience", alliance: "SA", isChecked: false },
  // ]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [state, setState] = useState([]);
  // const [airlines, setAirlines] = useState("");
  // console.log(airlines);
  // const [filterData, setFilterData] = useState([...state]);
  useEffect(() => {
    // Fetch product data from your REST API here and update the 'products' state.
    // Example API request using fetch:
    fetch("airlines.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially, display all products.
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // useEffect(() => {
  //   fetch("airlines.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setState(data);
  //       setFilterData(data);
  //       console.log(data);
  //     });
  // }, []);

  // const filterAirlines = (e) => {
  //   let value = e.target.value;
  //   let checked = e.target.checked;
  //   if (checked) {
  //     setAirlines(value);
  //   } else {
  //     setAirlines("");
  //   }
  // };

  const handleFilterChange = (filterText) => {
    const updatedFilters = filters.map((filter) =>
      filter.alliance === filterText ? { ...filter, selected: !filter.selected } : filter
    );

    setFilters(updatedFilters);

    // Apply filters to the product list based on selected checkboxes
    const filtered = products.filter((product) =>
      updatedFilters.some((filter) => filter.selected && product.alliance.includes(filter.alliance))
    );

    setFilteredProducts(filtered);
  };

  // useEffect(() => {
  //   if (airlines) {
  //     setFilterData(state.filter((item) => item.alliance === airlines));
  //   } else {
  //     setFilterData([...state]);
  //   }
  // }, [airlines]);

  return (
    <div>
      <section className="container">
        <div className="flex  items-center gap-5 mx-7 mt-2">
          <FilterOptions filters={filters} onFilterChange={handleFilterChange}></FilterOptions>
          {/* {category.map((item) => {
            return (
              <div className="form-control">
                <label key={item.id} className=" flex gap-2 items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value={item.alliance}
                    onChange={filterAirlines}
                    className="checkbox checkbox-sm mt-1"
                  />
                  <span className="text-lg  font-semibold ">{item.elm}</span>
                </label>
              </div>
            );
          })} */}
        </div>
        <div className="airlines_card_container mt-4 mb-12">
          {filteredProducts?.slice(0, 12)?.map((airline) => (
            <DisplayAirline airline={airline}></DisplayAirline>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Airlines;
