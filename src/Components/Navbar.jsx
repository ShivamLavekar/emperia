import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="container">
      <header>
        <div className="">
          <nav className="navbar navbar-expand-xl navbar-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src="media/logo.png" alt="" height={90} /></Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link className="nav-link px-4" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link px-4"
                      data-bs-toggle="dropdown"
                      to="Home/"
                      role="button"
                      aria-expanded="false"
                    >
                      About Us
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="History">
                          History
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Leadership
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="CoreValues">
                          Core Values
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Distribution
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle px-4"
                      data-bs-toggle="dropdown"
                      to="/"
                      role="button"
                      aria-expanded="false"
                    >
                      Product
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="PersonalCare">
                          Personal Care
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Bathroom Care
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Floor & Surface Care
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          General Care
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Kitchen Care
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item" style={{ justifyContent: "around" }}>
                    <Link className="nav-link px-4" to="Innovation&Technology">
                      Innovation & Technology
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle ps-4"
                      data-bs-toggle="dropdown"
                      to="/"
                      role="button"
                      aria-expanded="false"
                    >
                      Media
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/">
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown- m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Instagram
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          LinkedIn
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Twitter
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Youtube
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="Navbar-brand d-block">
            <Link to="Contact">
              <button className="btn rounded-pill me-3" to="Contact">
                Contact us
              </button>
            </Link>
              <img src="media/bag.png" alt="" to=""/>
          </div>
            </div>
          </nav>
          
        </div>
        
        
      </header>
    </div>
  );
}
