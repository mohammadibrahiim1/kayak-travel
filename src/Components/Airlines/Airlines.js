import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
import DisplayAirline from "../DisplayAirline/DisplayAirline";
import "./Airlines.css";
const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  console.log(filterValue);
  const [filterData, setFilterData] = useState(airlines);
  //   const [selectedCategory, setSelectedCategory] = useState([]);
  useEffect(() => {
    fetch("airlines.json")
      .then((res) => res.json())
      .then((data) => {
        setAirlines(data);
        setFilterData(data);
        console.log(data);
      });
  }, []);

  //   const {
  //     data: airlines,
  //     isLoading,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["airlines"],
  //     queryFn: async () => {
  //       const res = await fetch("airlines.json");
  //       const data = await res.json();
  //       console.log(data);
  //       return data;
  //     },
  //   });

  // filter data by alliance
  const handleFilterData = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    if (checked) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  };

  useEffect(() => {
    if (filterValue) {
      setFilterData(airlines.filter((item) => item.alliance === filterValue));
    } else {
      setFilterData([...airlines]);
    }
  }, [filterValue]);

  return (
    <div>
      <section className="container">
        <div className="flex  items-center gap-5 mx-7">
          <div className="form-control">
            <label className=" flex gap-2 items-center cursor-pointer">
              <input type="checkbox" value={"OW"} onChange={handleFilterData} className="checkbox checkbox-sm mt-1" />
              <span className="text-lg  font-semibold ">Oneworld</span>
            </label>
          </div>
          <div className="form-control">
            <label className=" flex gap-2 items-center cursor-pointer">
              <input type="checkbox" value={"ST"} onChange={handleFilterData} className="checkbox checkbox-sm mt-1" />
              <span className="text-lg  font-semibold">Sky Team</span>
            </label>
          </div>
          <div className="form-control">
            <label className=" flex gap-2 items-center cursor-pointer">
              <input type="checkbox" value={"SA"} onChange={handleFilterData} className="checkbox checkbox-sm  mt-1" />
              <span className="text-lg font-semibold ">Star Allience</span>
            </label>
          </div>
        </div>
        <div className="airlines_card_container mt-4 mb-12">
          {filterData.length === 0 ? (
            <div className="text-danger text-left font-semibold">no data found</div>
          ) : (
            filterData?.slice(0, 12).map((airline, i) => (
              <>
                <DisplayAirline airline={airline}></DisplayAirline>
              </>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Airlines;
