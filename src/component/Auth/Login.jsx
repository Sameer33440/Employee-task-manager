import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    //console.log("Hello guys, form submitted");
    console.log("email is",email);
    console.log("password is",password);
    setEmail("");
    setPassword("");
   

  };

  return (
    <div className="flex h-screen w-screen items-center justify-center p-4">
      <div className="border-2 border-emerald-600 p-10 md:p-16 lg:p-20 rounded-xl w-full max-w-md">
        <form
          onSubmit={submitHandle}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <input
            required
            className="w-full  text-white text-center outline-none bg-transparent placeholder-gray-600 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="w-full   text-white text-center outline-none bg-transparent placeholder-gray-500 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="text-white mt-7 bg-emerald-600 py-2 px-8 text-lg rounded-full hover:bg-emerald-700 transition w-full hover:scale-105 hover:shadow-lg  hover:ring-4 hover:ring-emerald-400"
           
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
