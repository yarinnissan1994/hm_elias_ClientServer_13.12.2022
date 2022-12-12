import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

export const Main = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark navBar">
      <ul className="headerList">
        <li>
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </li>
        <li>
          <Link to="/insertStudent">
            <h2>Add Student</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
