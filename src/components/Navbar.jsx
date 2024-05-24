import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] ">
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
          <div className="logo font-bold text-white text-2xl">&lt;PassOP/&gt;</div>
          <ul>
            <li className="flex gap-4">
              <a className="hover:font-bold text-white" href="/">
                Home
              </a>
              <a className="hover:font-bold text-white" href="/">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
