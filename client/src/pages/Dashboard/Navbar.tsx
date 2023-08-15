import React from 'react';
import { BsBellFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=" p-4 flex justify-between ml-[15%] md:ml-[5%] w-[100%] pr-[15%] md:pr-[8%]">
      {/* Dashboard Name */}
      <div className="flex justify-between">
        <p className="text-black text-lg font-semibold">Dashboard</p>

        {/* User Circle Icon */}
        <div className="flex   justify-end">
          <BsBellFill className="h-4 w-4 text-black mr-2" />
          <FaUserCircle className="h-6 w-6 text-black" />
          <span className="text-black w-[auto]">Obiora Kingsley</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
