import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
import DisplayAirline from "../DisplayAirline/DisplayAirline";
import "./Airlines.css";

// filter alliances

// const categories = ;

const Airlines = () => {
  const [category, setCategory] = useState([
    { elm: "One World", alliance: "OW", isChecked: false },
    { elm: "Sky Team", alliance: "ST", isChecked: false },
    { elm: "Star Allience", alliance: "SA", isChecked: false },
  ]);
  const [state, setState] = useState([]);
  const [airlines, setAirlines] = useState("");
  const [filterData, setFilterData] = useState([...state]);

  // const [visible, setVisible] = useState(12);

  // const showMore = () => {
  //   setVisible((preValue) => preValue + 4);
  // };

  useEffect(() => {
    fetch("airlines.json")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
        setFilterData(data);
        // console.log(data);
      });
  }, []);

  const filterAirlines = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    if (checked) {
      setAirlines(value);
    } else {
      setAirlines("");
    }
  };

  useEffect(() => {
    if (airlines) {
      setFilterData(state.filter((item) => item.alliance === airlines));
    } else {
      setFilterData([...state]);
    }
  }, [airlines]);

  return (
    <div>
      <section className="container">
        <div className="flex  items-center gap-5 mx-7 mt-2">
          {category.map((item) => {
            return (
              // <div className="form-check ms-2" key={index}>
              //   <label className="form-check-label">
              //     <input
              //       className="form-check-input"
              //       type="checkbox"
              //       onChange={(e) => updateFilters(e.target.checked, elm)}
              //     />
              //     {elm}
              //   </label>
              // </div>

              <div className="form-control">
                <label className=" flex gap-2 items-center cursor-pointer">
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
          })}
        </div>
        <div className="airlines_card_container mt-4 mb-12">
          {/* <div className="d-flex flex-wrap"> */}
          {filterData?.slice(0, 12)?.map(
            (airline) => (
              <DisplayAirline airline={airline}></DisplayAirline>
            )
            // {
            //   return (
            //     <div className="card m-3" style={{ width: "400px" }} key={prod.id}>
            //       <div className="card-body">
            //         <p className="card-text">Id: {prod.id}</p>
            //         <h3 className="card-title">Title: {prod.title}</h3>
            //         <p className="card-text">Price: {prod.price}</p>
            //         <p className="card-text">Category: {prod.category}</p>
            //         <p className="card-text">Rating: {prod.rating.rate}</p>
            //       </div>
            //     </div>
            //   );
            // }
          )}
        </div>

        {/* {airlines.filter(prod)=> Object.keys(toCheck).length === 0 ? true : !!toCheck[prod.category]).slice(0, 12).map((airline, i) => (
              <>
                <DisplayAirline airline={airline}></DisplayAirline>
              </>
            ))
          )} */}
        {/* </div> */}
      </section>
    </div>
  );
};

export default Airlines;
