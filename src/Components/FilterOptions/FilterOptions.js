import React from "react";

const FilterOptions = ({filters,onFilterChange}) => {
  return (
    <div>
      <div>
        <h3>Filter Options</h3>
        {filters.map((filter) => (
          <label key={filter.id}>
            <input
              type="checkbox"
              value={filter.alliance}
              checked={filter.selected}
              onChange={() => onFilterChange(filter.alliance)}
            />
            {filter.elm}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterOptions;
