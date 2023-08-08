import { BsPersonFillGear } from 'react-icons/bs';
import { BiSolidLockOpen } from 'react-icons/bi';
import { BiSolidBellRing } from 'react-icons/bi';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';


const AccountSettings = () => {
  return (
    <>
       <div className="flex space-x-4 px-20 mt-16">
      {/* Personal Info */}
      <div className="flex flex-col items-center">
        <button className="bg-slate-50 hover:bg-blue-500 p-2 rounded-md flex flex-col items-center">
          <div className="flex items-center text-left space-x-4">
            <BsPersonFillGear className="h-6 w-6 ml-4 text-black" />
            <span className="text-black justify-start">Personal Info</span>
          </div>
        </button>
      </div>

      {/* Password and Security */}
      <div className="flex flex-col items-center">
        <button className="bg-slate-50 hover:bg-blue-500 p-2 rounded-md flex flex-col items-center">
          <div className="flex items-center text-left space-x-4">
            <BiSolidLockOpen className="h-6 w-6 ml-4 text-black" />
            <span className="text-black justify-start">Password and Security</span>
          </div>
        </button>
      </div>
        
      {/* Notifications */}
      <div className="flex flex-col items-center">
      <button className="bg-slate-50 hover:bg-blue-500 p-2 rounded-md flex flex-col items-center">
          <div className="flex items-center text-left space-x-4">
            <BiSolidBellRing className="h-6 w-6 ml-4 text-black" />
            <span className="text-black justify-start">Notifications</span>
          </div>
        </button>
      </div>

      {/* Choose Plan */}
      <div className="flex flex-col items-center">
      <button className="bg-slate-50 hover:bg-blue-500 p-2 rounded-md flex flex-col items-center">
          <div className="flex items-center text-left space-x-4">
            <BsFillCreditCard2FrontFill className="h-6 w-6 ml-4 text-black" />
            <span className="text-black justify-start">Choose Plan</span>
          </div>
        </button>
      </div>
      </div>
      
      <form>
      <div className="flex items-center space-x-2">
          <label htmlFor="fileInput" className="w-24 ml-20 mt-4 mb-0 h-24 flex items-center justify-center rounded-full bg-gray-300">
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

        <div className="flex flex-col">
          <div className="flex flex-row ml-10 mt-3">

          <label className="flex flex-col ml-10 w-64">First Name
            <input className="w-72 mr-20 mt-1 h-10" placeholder='First Name' name='firstName' />
          </label>
            
          <label className="flex flex-col ml-20">Last Name
            <input className="w-72 mt-1 h-10" placeholder='Last Name' name='lastName' />
          </label>  
          </div>
          
          <label className="flex flex-col ml-20 mt-3">Email
            <input className="w-2/4 mt-1 h-10" placeholder='mail@email.com' name='Email' />
          </label>
          
          <label className="flex flex-col ml-20 mt-3">Phone Number
            <input className="w-2/4 mt-1 h-10" placeholder='+000-12345678' name='lastName' />
          </label>
          
          <label className="flex flex-col ml-20 mt-3">Street Address
            <input className="w-2/4 mt-1 h-10" placeholder='2 MainLand, Lagos' name='address' />
          </label>

          <div className="flex flex-row ml-10 mt-3">
          <label className="flex flex-col ml-10 w-64">ZIP
            <input className="w-72 mr-20 mt-1 h-10" placeholder='0000' name='zipcode' />
          </label>
          <label className="flex flex-col ml-20">City
            <input className="w-72 mt-1 h-10" placeholder='Lagos' name='city' />
          </label>  
          </div>

          <div className="flex flex-row ml-10 mt-3">
          <label className="flex flex-col ml-10 w-64">State
            <input className="w-72 mr-20 mt-1 h-10" placeholder='Abuja' name='state' />
          </label>
          <label className="flex flex-col ml-20">Country
            <input className="w-72 mt-1 h-10" placeholder='Nigeria' name='country' />
          </label>


          </div>
          <button className="bg-black text-white px-4 ml-20 h-11 w-2/4 mt-6 py-2 rounded-md">
            Save
          </button>
        </div>
          

      </form>
    </>
  )
}

export default AccountSettings
