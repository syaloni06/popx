import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Debug: see form values
    navigate("/account-settings");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create your PopX account</h2>
      <form className="flex flex-col space-y-6 w-full lg:max-w-md" onSubmit={handleSubmit}>
        <div className="flex flex-col relative">
          <label
            className="absolute bg-white font-semibold text-md text-[#6c25ff] p-1 -top-4 left-3"
            htmlFor="fullName"
          >
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
            className="px-4 py-3 outline-none border border-gray-300 rounded-lg"
            placeholder="Enter full name"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            className="absolute bg-white font-semibold text-md text-[#6c25ff] p-1 -top-4 left-3"
            htmlFor="phone"
          >
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            maxLength={10}
            value={form.phone}
            onChange={handleChange}
            className="px-4 py-3 outline-none border border-gray-300 rounded-lg"
            placeholder="Enter phone number"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            className="absolute bg-white font-semibold text-md text-[#6c25ff] p-1 -top-4 left-3"
            htmlFor="email"
          >
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3 outline-none border border-gray-300 rounded-lg"
            placeholder="Enter email address"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            className="absolute bg-white font-semibold text-md text-[#6c25ff] p-1 -top-4 left-3"
            htmlFor="password"
          >
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            className="px-4 py-3 outline-none border border-gray-300 rounded-lg"
            placeholder="Enter password"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            className="absolute bg-white font-semibold text-md text-[#6c25ff] p-1 -top-4 left-3"
            htmlFor="company"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="px-4 py-3 outline-none border border-gray-300 rounded-lg"
            placeholder="Enter company name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="isAgency"
                value="Yes"
                checked={form.isAgency === "Yes"}
                onChange={handleChange}
                className="h-4 w-4 text-[#6c25ff] focus:ring-purple-500"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="isAgency"
                value="No"
                checked={form.isAgency === "No"}
                onChange={handleChange}
                className="h-4 w-4 text-[#6c25ff] focus:ring-purple-500"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6c25ff] hover:bg-[#793df5] text-white font-semibold py-3 rounded mt-10"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccountForm;
