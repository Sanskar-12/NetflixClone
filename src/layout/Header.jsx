import React from "react";
import logo from "../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />

      <div className="links">
        <Link to={"/tvshows"}>Tv Shows</Link>
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/recentlyadded"}>Recently Added</Link>
        <Link to={"/mylist"}>MyList</Link>
      </div>

      <ImSearch />
    </div>
  );
};

export default Header;
