import { BsPersonFillGear } from 'react-icons/bs';
import { BiSolidLockOpen } from 'react-icons/bi';
import { BiSolidBellRing } from 'react-icons/bi';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';


const AccountSettings: React.FC = () => {
  const location = useLocation();

  return (
    <div className="p-4 md:p-8 lg:p-16">
      {/* Navigation Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 overflow-x-auto w-10/12">
        <Link to="/dashboard/accountsettings" className="bg-slate-50 hover:bg-blue-500 p-2 rounded-md flex flex-col items-center">
          <div className="flex items-center text-left space-x-2 md:space-x-4">
            <BsPersonFillGear className="h-6 w-6 ml-2 md:ml-4 text-black" />
            <span className="text-black justify-start text-sm md:text-base">Personal Info</span>
          </div>
        </Link>

        <Link to="/dashboard/notifications" className="bg-slate-50 hover:bg-blue-500 p-2 rounded-md flex flex-col items-center">
             <div className="flex items-center text-left space-x-4">
               <BiSolidBellRing className="h-6 w-6 ml-4 text-black" />
               <span className="text-black justify-start">Notifications</span>
             </div>
        </Link>

        <Link to="/dashboard/password-and-security" className="bg-slate-50 hover:bg-blue-500 p-2 rounded-md flex flex-col items-center">
             <div className="flex items-center text-left space-x-4">
               <BiSolidLockOpen className="h-6 w-6 ml-4 text-black" />
               <span className="text-black justify-start">Password and Security</span>
             </div>
        </Link>

        <Link to="/dashboard/choose-plan" className="bg-slate-50 hover:bg-blue-500 p-2 rounded-md flex flex-col items-center">
           <div className="flex items-center text-left space-x-4">
               <BsFillCreditCard2FrontFill className="h-6 w-6 ml-4 text-black" />
               <span className="text-black justify-start">Choose Plan</span>
             </div>
        </Link>
        
        {/* Other Navigation Links */}
        {/* Add other navigation links here */}
      </div>

      {/* Form Section */}
      <form className="space-y-4 w-8/12">
        {location.pathname === "/dashboard/accountsettings" && (
          <>
            {/* Personal Info Fields */}
            <div className="flex items-center space-x-2">
             <label htmlFor="fileInput" className="w-24 ml-2 mb-0 h-24 flex items-center justify-center rounded-full bg-gray-300">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-4 w-4 text-white"
                 viewBox="0 0 20 20"
                 fill="currentColor"
                 aria-hidden="true"
               >
                 <path
                   fillRule="evenodd"
                   d="M3.293 12.293a1 1 0 011.414 0L10 17.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                   clipRule="evenodd"
                 />
                 <path
                   fillRule="evenodd"
                   d="M10 3a1 1 0 011 1v9a1 1 0 11-2 0V4a1 1 0 011-1z"
                   clipRule="evenodd"
                 />
               </svg>
             </label>
             <input type="file" name="file" id="fileInput" className="hidden" />
           </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                First Name
                <input
                  className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none"
                  placeholder="First Name"
                  name="firstName"
                />
              </label>

              <label className="flex flex-col">
                Last Name
                <input
                  className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none"
                  placeholder="Last Name"
                  name="lastName"
                />
              </label>

              {/* Add other input fields here */}
            </div>

            <label className="flex flex-col">
              Email
              <input
                className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none"
                placeholder="mail@email.com"
                name="email"
              />
            </label>

            <label className="flex flex-col">
              Phone Number
              <input
                className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none"
                placeholder="+000-12345678"
                name="phoneNumber"
              />
            </label>

            <label className="flex flex-col">
              Street Address
              <input
                className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none"
                placeholder="2 MainLand, Lagos"
                name="address"
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                ZIP
                <input
                  className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none"
                  placeholder="0000"
                  name="zipCode"
                />
              </label>

              <label className="flex flex-col">
                City
                <input
                  className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none"
                  placeholder="Lagos"
                  name="city"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                State
                <input
                  className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none"
                  placeholder="Abuja"
                  name="state"
                />
              </label>

              <label className="flex flex-col">
                Country
                <input
                  className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none"
                  placeholder="Nigeria"
                  name="country"
                />
              </label>
            </div>

            <button className="w-full bg-black text-white py-2 rounded-md">
              Save
            </button> 
          </>
        )}

        {/* Other Sections */}
        {/* Add other sections similarly with input fields */}
      </form>
    </div>
  );
};

export default AccountSettings;




