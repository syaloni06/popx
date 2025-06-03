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
    // Handle form logic here (e.g., validation, API call)
    navigate("/"); // Navigate back to welcome screen
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-white px-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full space-y-5 text-left"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Create your PopX account
          </h2>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Company name
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={form.isAgency === "Yes"}
                  onChange={handleChange}
                  className="text-purple-600 focus:ring-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={form.isAgency === "No"}
                  onChange={handleChange}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#9A34FF] text-white font-semibold py-3 rounded-lg hover:bg-[#8329d4] transition duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateAccountForm;
