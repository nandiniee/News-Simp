import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#656565" }}
      >
        <div className="container-md">
          <Link className="navbar-brand" to="/" style={{ color: "#fff" }}>
            News Simp
          </Link>
        </div>
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          General
        </Link>
        <Link
          to="/business"
          style={{
            color: "#fff",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          Business
        </Link>
        <Link
          to="/entertainment"
          style={{
            color: "#fff",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          Entertainment
        </Link>
        <Link
          to="/health"
          style={{
            color: "#fff",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          Health
        </Link>
        <Link
          to="/science"
          style={{
            color: "#fff",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          Science
        </Link>
        <Link
          to="/sports"
          style={{
            color: "#fff",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          Sports
        </Link>
        <Link
          to="/technology"
          style={{
            color: "#fff",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          Technology
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
