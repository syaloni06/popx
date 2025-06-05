import { IoCameraSharp } from "react-icons/io5";
const AccountSettings = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-24 px-4">
      <div className="bg-white rounded-2xl shadow-md p-6 w-full lg:max-w-xl">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ec689480cc22c2d441e152f/3e579187-0c52-451e-b10c-4e1084dfcca7/corporate-headshots-professional-photography-connecticut-ct-photo-studio-greenwich.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-[#9A34FF] p-1.5 rounded-full cursor-pointer">
              <IoCameraSharp className="text-white text-sm" />
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">Marry Doe</h2>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-sm text-gray-700 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam
        </p>
      </div>
    </div>
    </>
  )
}

export default AccountSettings;