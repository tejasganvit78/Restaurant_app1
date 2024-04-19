import React from "react";

const Header = () => {
  return (
    <nav className="navbar fixed-top" style={{boxShadow:"0px 2px 4px rgba(0,0,0,0.5)"}}>
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg"
        alt="Logo"
        className="mx-4"
        width={100}
        height={100}
      />

      <ul className="navbar-nav d-flex flex-row justify-content-center">
        <li className="nav-item mx-4">Home</li>
        <li className="nav-item mx-4">About</li>
        <li className="nav-item mx-4">Contact</li>
        <li className="nav-item mx-4">Cart</li>
      </ul>
    </nav>
  );
};

export default Header;
