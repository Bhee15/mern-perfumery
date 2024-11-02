import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import navLogo from "../assets/Group 9283.svg";
import dropDownIcon from "../assets/arrow-down.svg";
import LogOut from "../components/LogOut";
import arrowUp from "../assets/arrow-up.svg";
import OffCanvass from "../components/OffCanvass"
import CartContext from "../context/CartContext";

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isReveal, setIsReveal] = useState(false);
  const {user} = useContext(CartContext)
  const fullName = localStorage.getItem("fullname")
  const token = localStorage.getItem("perf-token")
  function toggleIsReveal(){
    isReveal ? setIsReveal(false) : setIsReveal(true)
  }
  return (
    <>
      <nav className="container d-flex py-4 justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <img src={navLogo} alt="nav-logo" />
          <h2 className="d-none d-lg-block">Perfume House</h2>
        </div>
        <div className="d-none d-md-flex gap-4">
          {token ? (
            <>
              <div className="position-relative">
                <h1>
                  {`Hi, ${fullName}`}
                  <span className="ms-3">
                    {isReveal ?
                     <img
                     onClick={toggleIsReveal}
                       src={arrowUp}
                       alt="arrow-up-icon"
                       role="button"
                     />
                     :
                    <img
                    onClick={toggleIsReveal}
                      src={dropDownIcon}
                      alt="drop-down-icon"
                      role="button"
                    />
                     }
                    
                  </span>
                </h1>
                <div className="position-absolute end-0">{isReveal && <LogOut/>}</div>
              </div>
            </>
          ) : (
            <>
              <button className="login-btn">
                <Link
                  className="text-decoration-none login-link"
                  to="/auth/login"
                >
                  Log In
                </Link>
              </button>
              <button className="sign-up-btn">
                <Link
                  className="text-decoration-none sign-up-link"
                  to="/auth/signup"
                >
                  Sign Up
                </Link>
              </button>
            </>
          )}
        </div>


        <div className="d-md-none">
        {['top'].map((placement, idx) => (
        <OffCanvass key={idx} placement={placement} name={placement} />
      ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
