import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });

    axios
      .get("http://localhost:5000/api/v1/accounts/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBalance(res.data.balance);
      });
  }, [filter]);
  console.log(balance);
  return (
    <div className="m-3 p-3 -mt-3 pl-10 pr-10">
      <div className="flex m-3 p-2  justify-between items-center">
        <h1 className="font-bold text-3xl text-[#363b6a] font-sans">Sendme</h1>

        <div className="mx-3 flex items-center">
          <h1 className="font-bold text-xl mt-3 text-black font-sans">
            Hello!
          </h1>
          <button className="m-2 mt-5 focus:outline-none py-2 px-4  font-medium rounded-full mx-5 text-[#363b6a] border border-[#363b6a]">
            U
          </button>
          <button
            className="m-2 mt-5 focus:outline-none py-2 px-4  font-medium rounded-lg mx-2 border bg-[#363b6a] text-white"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Log out
          </button>
        </div>
      </div>

      <div className="flex items-center ">
        <h1 className="p-3 mt-5 text-3xl font-semibold">Your Balance:</h1>
        <h1 className="p-3 mt-5 text-3xl font-semibold">
          ₹{Math.floor(balance)}
        </h1>
      </div>
      <div className="mt-3 p-3 px-5 m-3 bg-[#333865] rounded rounded-t-xl">
        <h2 className="p-3 mt-5 text-2xl font-semibold text-white">Contacts</h2>

        <input
          type="search"
          name=""
          id=""
          placeholder="Search contacts..."
          className="w-full p-3 bg-[#23214588] shadow-md rounded-md mt-5 text-white focus:outline-none"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />

        {users &&
          users.map((user) => (
            <div className="flex items-center justify-between mt-5">
              <div className="mx-3 flex items-center">
                <button className="m-2 mt-5 focus:outline-none py-2 px-4  font-medium rounded-full mx-5 text-gray-400 border border-white">
                  {user.firstName.charAt(0).toUpperCase()}
                </button>
                <h1 className="font-meduim text-xl mt-2 text-white font-sans">
                  {user.firstName}
                </h1>
              </div>

              <button
                className="m-2 mt-5 focus:outline-none py-2 px-4 w-32 text-333865 font-medium rounded-lg bg-white"
                onClick={(e) => {
                  navigate(
                    "/transfer?id=" + user.id + "&name=" + user.firstName
                  );
                }}
              >
                Send Money
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
