import React from "react";
import "./DisplayAirline.css";
import { Link } from "react-router-dom";

const DisplayAirline = ({ airline }) => {
  const { alliance, name, logoURL, phone, site } = airline;
  return (
    <div>
      <section>
        <div class="container">
          <div class="card">
            <div class="content">
              <div class="imgBx">
                <img src={`https://www.kayak.com/${logoURL}`} alt={alliance} />
              </div>
              <div class="contentBx">
                <span>{name}</span>
                <span className="text-orange-500">{alliance}</span>
              </div>
            </div>
            <ul class="sci">
              <li>
                <Link href="">{phone}</Link>
              </li>
              <li>
                <Link href="">{site}</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayAirline;
