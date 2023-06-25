import React from "react";
import { Link } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-white px-7 md:px-0 w-full">
      <nav className="flex justify-center gap-16 border-b py-7">
        <Link to="/">
          <div className="text-xs tracking-[.2rem] text-[#767676] hover:text-black uppercase flex gap-2 items-center transition duration-200 ease">
            <span className="mr-1 h-full flex justify-center items-center">
              <AcUnitIcon style={{ fontSize: "8px" }} />
            </span>
            <p>Home</p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="text-xs tracking-[.2rem] text-[#767676] hover:text-black uppercase flex gap-2 items-center transition duration-200 ease">
            <span className="mr-1 h-full flex justify-center items-center">
              <AcUnitIcon style={{ fontSize: "8px" }} />
            </span>
            <p>Contact</p>
          </div>
        </Link>
      </nav>
    </header>
  );
};
