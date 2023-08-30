import { BsBellFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

     const firstName = localStorage.getItem("firstName")
     const lastName = localStorage.getItem("lastName")

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const users = useSelector((state:any) => state.user.user)


  return (
    <nav className=" p-4 flex justify-between shadow-lg w-[100%]  md:pr-[8%] ml-[15%] md:ml-[7%] lg:ml-[5%] pr-[5%]">
      {/* Dashboard Name */}
      <div className="flex justify-between w-[100%]">
        <p className="text-grey-500 text-lg font-semibold">Dashboard</p>

        {/* User Circle Icon */}
        <div className="flex   justify-end">
          <BsBellFill className="h-4 w-4 my-auto text-gray-800 mr-2" />
          <img src={users?.imageUrl} alt="hsdjh" className='h-[50px] w-[50px] rounded-[50%] object-cover object-top' />
          <span className="text-gray-800 my-auto ml-4 w-[auto] font-medium">
            <p> {firstName?.toUpperCase()} { lastName?.toLocaleUpperCase() } </p>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
