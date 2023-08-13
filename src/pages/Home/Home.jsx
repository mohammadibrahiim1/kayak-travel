import React from "react";
import Airlines from "../../Components/Airlines/Airlines";

const Home = () => {
  return (
    <div>
      <section className="container m-auto">
        <div className="mx-7">
          <p className="text-2xl font-semibold text-teal-500 mt-5 ">Airlines</p>
          {/* </div>
        <div> */}
          <p className="text-md font-bold text-indigo-400 mt-4  ">Filter by Alliances</p>
        </div>

        <Airlines></Airlines>
      </section>
    </div>
  );
};

export default Home;
