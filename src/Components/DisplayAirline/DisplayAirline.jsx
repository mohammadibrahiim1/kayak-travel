import React from "react";
import "./DisplayAirline.css";
import { Link } from "react-router-dom";

const DisplayAirline = ({ airline }) => {
  //   console.log(airline);
  //   const { logoURL } = airline;

  // const   {logoURL={`https://www.kayak.com/${logoURL}`}} = airline
  return (
    <div>
      <section>
        <div class="container">
          <div class="card">
            <div class="content">
              <div class="imgBx">
                <img src={`https://www.kayak.com/${airline?.logoURL} `} alt={airline.name} />
              </div>
              <div class="contentBx">
                <h3>
                  {airline.name}
                  <br />
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <Link href="">{airline.phone}</Link>
              </li>
              <li>
                <Link href="">{airline.site}</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayAirline;
