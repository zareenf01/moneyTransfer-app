import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <Link to="/">
        <h1 className="font-bold text-3xl text-[#363b6a] m-3 p-3 font-sans">
          Sendme
        </h1>
      </Link>
      <div className=" flex flex-col space-y-8 p-4 m-5 rounded-3xl -mt-5">
        <h1 className="text-[#333865] text-5xl font-semibold text-center m-3">
          Welcome Back!
        </h1>

        <form>
          <div className="flex flex-col text-black justify-center items-center">
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="email"
              required
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 border-b"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 border-b"
              onChange={(e) => setPass(e.target.value)}
            />
            <h3 className="text-[#333865] m-3 ">
              Don't have an Account?{" "}
              <Link to="/signup" className="decoration-[#37436b] underline">
                Sign Up
              </Link>
            </h3>

            <Link to="/">
              <button
                onClick={async () => {
                  try {
                    const response = await axios.post(
                      "http://localhost:5000/api/v1/user/signin",
                      {
                        email,
                        password: pass,
                      }
                    );
                    localStorage.setItem("token", response.data.token);
                    console.log(response.data);

                    toast.success("Logged in successfully");
                    navigate("/dashboard");
                  } catch (error) {
                    toast.error("Failed to log in. Please try again.");
                  }
                }}
                type="submit"
                className="bg-[#333865] hover:border text-white hover:border-[#333865] hover:bg-white hover:text-[#333865] duration-500 w-40 mx-auto  font-semibold px-2 py-4 rounded-lg md:mx-10"
              >
                SignIn
              </button>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignIn;
