import React from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef();

  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
    } else ref.current.src = "icons/eyecross.png";
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="mycontainer">
        <h1 className="text-white text-4xl font-bold text-center">
          &lt;PassOP/&gt;
        </h1>
        <p className="text-white text-lg text-center">
          Your own Password Manager
        </p>
        <div className="flex flex-col p-4 gap-8 items-center">
          <input
            placeholder="Enter Website URL"
            className="rounded-full border w-full p-4 py-1"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              placeholder="Enter Username"
              className="rounded-full border w-full p-4 py-1"
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="rounded-full border w-full p-4 py-1"
              />
              <span
                className="absolute right-[3px] top-[3px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  width={30}
                  src="icons/eye.png"
                  alt="eye"
                  className="p-1"
                />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className="flex justify-center gap-1 items-center bgcolor hover:bgcolorlight rounded-full px-4 py-2 w-fit font-bold">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
