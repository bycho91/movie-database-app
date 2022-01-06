import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";

const Header = ({ changeSearchTerm }) => {
  return (
    <div className="header section-padding">
      <div className="logo">
        <Link to="/">
          <h1>Ben's Movies</h1>
        </Link>
      </div>

      <div className="right-container">
        <div className="search-bar">
          <FcSearch size="2em" />
          <input
            type="text"
            placeholder="search movie"
            onChange={(e) => changeSearchTerm(e.target.value)}
          />
        </div>

        <div className="avatar">
          <BsPersonFill size="2em" />
        </div>
      </div>
    </div>
  );
};

export default Header;
