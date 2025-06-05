import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  const isDisabled = email.trim() === "" || password.trim() === "";

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <form
        onSubmit={handleLogin}
        className="lg:max-w-md w-full space-y-8 text-left"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Signin to your PopX account
          </h2>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Email field */}
        <div className="flex flex-col relative">
          <label
            htmlFor="email"
            className="absolute bg-white font-semibold text-md text-[#6c25ff] p-1 -top-4 left-3"
          >
            Email Address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 outline-none border border-gray-300 rounded-lg transition-all duration-300"
            placeholder="Enter email address"
          />
        </div>

        {/* Password field */}
        <div className="flex flex-col relative">
          <label
            htmlFor="password"
            className="absolute bg-white font-semibold text-md text-[#6c25ff] p-1 -top-4 left-3"
          >
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 outline-none border border-gray-300 rounded-lg transition-all duration-300"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
            isDisabled
              ? "bg-gray-300 text-white cursor-not-allowed"
              : "bg-[#6c25ff] text-white hover:bg-[#793df5]"
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
