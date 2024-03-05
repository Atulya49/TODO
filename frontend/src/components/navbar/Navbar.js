import React from "react";
import "./Navbar.css";
import { FcTodoList } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { authActions } from "../../store/Index";
const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logout());
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <b>
            {" "}
            <FcTodoList /> TODO
          </b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active mx-1 my-1"
                aria-current="page"
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-1 my-1"
                aria-current="page"
                to="/todo"
              >
                Todo
              </Link>
            </li>
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-1 my-1"
                    aria-current="page"
                    to="/signup"
                  >
                    SignUP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-1 my-1"
                    aria-current="page"
                    to="/signin"
                  >
                    SignIN
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="nav-item" onClick={logout}>
                <Link
                  className="nav-link active mx-1 my-1"
                  aria-current="page"
                  to="/"
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
