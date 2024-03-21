import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SendMoney() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState();
  const id = searchParams.get("id");
  const Name = searchParams.get("name");
  return (
    <div className="flex justify-center pt-20">
      <div className="mt-3 p-3 px-5 m-3 bg-[#333865] rounded-xl w-96">
        <h2 className="p-3 mt-5 text-2xl text-center font-semibold text-white">
          Send Money
        </h2>
        <div className="flex items-center -ml-8">
          <div className="mx-3 flex items-center">
            <button className="m-2 mt-5 focus:outline-none py-2 px-4  font-medium rounded-full mx-5 text-gray-400 border border-white">
              {Name[0].toUpperCase()}
            </button>
            <h1 className="font-meduim text-2xl font-bold mt-2 text-white font-sans">
              {Name}
            </h1>
          </div>
        </div>
        <input
          type="text"
          id=""
          name=""
          placeholder="Enter amount"
          className="w-full p-3 bg-[#23214588] shadow-md rounded-md mt-5 text-white focus:outline-none"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          className="m-2 mt-5 focus:outline-none py-2 px-4 w-full text-333865 font-medium rounded-lg bg-white"
          onClick={() => {
            try {
              axios.post(
                "http://localhost:5000/api/v1/accounts/transfer",
                {
                  to: id,
                  amount,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              toast.success("transaction successfull");
              setTimeout(() => {
                navigate("/dashboard");
              }, 2000);
            } catch (error) {
              toast.success("transaction failed");
            }
          }}
        >
          Send Money
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SendMoney;
