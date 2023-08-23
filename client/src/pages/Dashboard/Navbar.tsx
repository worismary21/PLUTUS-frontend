import { BsBellFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {

     const firstName = localStorage.getItem("firstName")
     const lastName = localStorage.getItem("lastName")
  return (
    <nav className=" p-4 flex justify-between shadow-lg w-[100%]  md:pr-[8%] ml-[15%] md:ml-[7%] lg:ml-[5%] pr-[5%]">
      {/* Dashboard Name */}
      <div className="flex justify-between w-[100%]">
        <p className="text-grey-500 text-lg font-semibold">Dashboard</p>

        {/* User Circle Icon */}
        <div className="flex   justify-end">
          <BsBellFill className="h-4 w-4 my-auto text-gray-800 mr-2" />
          <FaUserCircle className="h-6 w-6 my-auto text-gray-800" />
          <span className="text-black my-auto ml-4 w-[auto]">
            <p> {firstName} { lastName } </p>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
