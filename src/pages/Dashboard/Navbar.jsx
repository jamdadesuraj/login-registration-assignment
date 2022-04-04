import React from "react";
import "./navbar.css";
import { Button, Link } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../components/Authentication/AuthProvider";

const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" to="#">
          WELCOME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-duotone fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Button
              color="red.300"
              bg="blue.500"
              onClick={() => {
                logout();
              }}
            >
              logout
            </Button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Header;
