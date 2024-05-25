import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] ">
        <div className="mycontainer px-4 py-3 h-14 text-center">
          <div className="logo font-bold text-white text-2xl ">
              <span className="text-green-500"> &lt;</span>
              <span>Pass</span>
              <span className="text-green-500">OP/&gt;</span>
          </div>
        </div>
      </nav>
      <hr/>
    </>
  );
};

export default Navbar;
