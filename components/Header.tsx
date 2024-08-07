import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="top-0 z-50 px-4 py-0 md:px-20 md:py-0 lg:py-0 mx-auto max-w-7xl md:sticky md:top-4">
     <Navbar/>
    </header>
  );
};

export default Header;
