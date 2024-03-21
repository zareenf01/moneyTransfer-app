import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Link to="/">
        <h1 className="font-bold text-3xl m-3 p-3 text-[#363b6a] font-sans">
          Sendme
        </h1>
      </Link>
      <div className=" flex flex-col space-y-8 p-4 m-5 rounded-3xl -mt-5">
        <h1 className="text-[#333865] text-5xl font-semibold text-center m-3">
          SignUp!
        </h1>

        <form>
          <div className="flex flex-col text-black justify-center items-center">
            <input
              type="text"
              autoComplete="off"
              placeholder="first Name"
              required
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 border-b"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              type="text"
              autoComplete="off"
              placeholder="last Name"
              required
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 border-b"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <input
              type="email"
              autoComplete="off"
              placeholder="email"
              required
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 border-b"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              required
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 border-b"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <h3 className="text-[#333865] m-3 ">
              Already a member?{" "}
              <Link to="/signin" className="decoration-[#37436b] underline">
                LogIn
              </Link>
            </h3>
            <Link to="/signup">
              <button
                onClick={async () => {
                  const response = await axios.post(
                    "http://localhost:5000/api/v1/user/signup",
                    {
                      email: email,
                      firstname: firstname,
                      lastname: lastname,
                      password: password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard");
                }}
                type="submit"
                className="bg-[#333865] text-white hover:border hover:border-[#333865] hover:bg-white hover:text-[#333865] duration-500 w-40 mx-auto  font-semibold px-2 py-4 rounded-lg md:mx-10"
              >
                SignUp
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
