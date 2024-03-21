import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <div className="p-3 -mx-4 bg-[#333865] flex justify-between items-center">
        <div className="p-3 pl-10 mt-5">
          <h1 className="text-white text-5xl md:text-6xl font-semibold">
            The Smarter <br /> Way To Transfer <br />
            Money.
          </h1>
          <h3 className="text-gray-400 text-lg mt-8 max-w-96">
            We prefer an easier and Smarter way to transfer money, with an easy
            and hassle-free process we focus on sending money quickly and
            safely.
          </h3>

          <Link to="/signup">
            <button className=" mt-10 focus:outline-none py-2 px-4 w-32 font-medium rounded-full  text-white border transition duration-500">
              Get Started
            </button>
          </Link>
        </div>

        <img src="../images/main.png" alt="" className="w-1/3 mr-10" />
      </div>
    </div>
  );
}

export default Main;
