// src/Register.js
import React, { useState } from "react";
import api, { getCSRFToken } from "../api/auth";
// import bgImage from "./assets/bg.png";

function Register() {
  const [username, serUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation , setPassword_confirmation ] = useState("");

  const register = async (e) => {
    e.preventDefault();
    await getCSRFToken();
    try {
      const respnse = await api.post("/register", {
        name: username,
        email: email,
        password: password,
        password_confirmation : password_confirmation ,
      });
      console.log(respnse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative bg-gradient-to-b from-purple-800 to-purple-900">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        // style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      <div className="relative z-10 bg-white bg-opacity-10 rounded-xl shadow-xl p-4 max-w-xs w-full backdrop-blur-lg border border-white border-opacity-20">
        <h2 className="text-center text-2xl font-bold text-white mb-4">
          Register
        </h2>
        <form onSubmit={register}>
          <div className="mb-4">
            <input
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-800"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => serUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-800"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-800"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-800"
              type="password"
              placeholder="Confirm Password"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-900 text-white p-2 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-white text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="underline hover:bg-green-900">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
