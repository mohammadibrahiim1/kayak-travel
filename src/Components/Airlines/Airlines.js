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

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  const handleFilterChange = (filterText) => {
    const updatedFilters = filters.map((filter) =>
      filter.alliance === filterText ? { ...filter, selected: !filter.selected } : filter
    );

    setFilters(updatedFilters);

    // Apply filters to the product list based on selected checkboxes
    const selectedFilters = updatedFilters.filter((filter) => filter.selected);

    if (selectedFilters.length === 0) {
      setFilteredProducts(products);
    } else {
      // Apply filters to the product list based on selected checkboxes
      const filtered = products.filter((product) =>
        selectedFilters.some((filter) => product.alliance.includes(filter.alliance))
      );

      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <section className="container">
        <div className="flex  items-center gap-5 mx-7 mt-2">
          <FilterOptions filters={filters} onFilterChange={handleFilterChange}></FilterOptions>
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
