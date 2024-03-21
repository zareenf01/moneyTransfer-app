import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex m-3 p-3 pl-10 pr-10 justify-between items-center">
        <h1 className="font-bold text-3xl text-[#363b6a] font-sans">Sendme</h1>
        <div className="flex items-center">
          <Link to="/signin">
            <button className="m-2 mt-5 focus:outline-none py-2 px-4 w-28 font-medium rounded-full mx-5 text-[#363b6a] border border-[#363b6a]">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="m-2 mt-5 focus:outline-none py-2 px-4 w-28 text-white font-medium rounded-full bg-[#363b6a]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
