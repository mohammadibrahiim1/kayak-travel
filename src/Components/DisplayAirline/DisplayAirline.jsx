import React from "react";
import "./DisplayAirline.css";
import { Link } from "react-router-dom";

const DisplayAirline = ({ airline }) => {
  const { name, logoURL, phone, site } = airline;
  return (
    <div>
      <section>
        <div class="container">
          <div class="card">
            <div class="content">
              <div class="imgBx">
                <img src={`https://www.kayak.com/${logoURL} `} alt={name} />
              </div>
              <div class="contentBx">
                <h3>
                  {name}
                  <br />
                </h3>
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
