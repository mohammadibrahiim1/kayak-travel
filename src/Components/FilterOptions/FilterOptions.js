import React from "react";

const FilterOptions = ({ filters, onFilterChange }) => {
  return (
    <div>
      <div>
        <div className="flex  items-center gap-5  mt-2">
          {filters.map((filter) => {
            return (
              <div className="form-control">
                <label key={filter.id} className=" flex gap-2 items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value={filter.alliance}
                    checked={filter.selected}
                    className="checkbox checkbox-sm mt-1"
                    onChange={() => onFilterChange(filter.alliance)}
                  />
                  <span className="text-lg  font-semibold ">{filter.elm}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
