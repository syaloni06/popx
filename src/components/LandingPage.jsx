import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to PopX</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <div className="space-y-4">
            <button
              onClick={() => navigate("/create")}
              className="w-full bg-[#9A34FF] text-white font-semibold py-3 rounded-lg hover:bg-[#8329d4] transition duration-300"
            >
              Create Account
            </button>
            <button className="w-full bg-[#E5D9FA] text-black font-semibold py-3 rounded-lg hover:bg-[#d8c7f2] transition duration-300">
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
