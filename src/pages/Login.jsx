import React, { useState } from "react";
import api, { getCSRFToken } from "../api/auth";
import { LockKeyhole, AtSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import bgImage from "./assets/bg.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    await getCSRFToken();
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      console.log(response.status);
      response.status === 204 && navigate("/account");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative bg-gradient-to-b from-purple-800 to-purple-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        // style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white bg-opacity-10 rounded-xl shadow-xl p-4 max-w-xs w-full backdrop-blur-lg border border-white border-opacity-20">
        <h2 className="text-center text-2xl font-bold text-white mb-4">
          Login
        </h2>
        <form onSubmit={login}>
          <div className="mb-4 relative">
            <input
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-800"
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="absolute right-3 top-2 text-white font-normal not-italic">
              <AtSign />
            </i>
          </div>
          <div className="mb-4 relative">
            <input
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-800"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="absolute right-3 top-2 text-white font-normal not-italic">
              <LockKeyhole />
            </i>
          </div>
          <div className="flex justify-between items-center text-white text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline hover:bg-green-90">
              Forgot password?
            </a>
          </div>
          <button
            className="w-full bg-green-700 hover:bg-green-900 text-white p-2 rounded-lg font-semibold transition"
            // onClick={() => navigate("/account")}
          >
            Login
          </button>
        </form>
        <p className="text-center text-white text-sm mt-4">
          Don't have an account?{" "}
          <a href="/register" className="underline hover:bg-green-900">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
