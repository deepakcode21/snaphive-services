import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        }else{
          toast.error(data.message )
        }
      } else {
    
        // Handle other states (e.g., "Professional") if needed
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start bg-white p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span>{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-black text-sm md:text-base"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-black text-sm md:text-base"
            type="password"
            required
          />
        </div>
        <button
          type="submit" // Ensure the button is of type "submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-600 transition text-sm md:text-base"
        >
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Professional Login?{" "}
            <span
              className="text-black font-semibold cursor-pointer hover:underline"
              onClick={() => setState("Professional")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-black font-semibold cursor-pointer hover:underline"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
