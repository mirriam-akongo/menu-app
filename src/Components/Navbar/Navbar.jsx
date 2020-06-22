import React from "react";
import NavItems from "./NavItems/NavItems";

function Navbar() {
  return (
    <div className="Navbar">
      <NavItems name="Home" />
      <NavItems name="Menu" />
      <NavItems name="About" />
      <NavItems name="Contact" />
    </div>
  );
}

export default Navbar;
