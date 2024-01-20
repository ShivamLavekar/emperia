import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="container">
      <header>
        <div className="">
          <nav class="navbar navbar-expand-xl navbar-light">
            <div class="container-fluid">
            <Link class="navbar-brand" to="/"><img src="media/logo.png" alt="" height={90} /></Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">
                  <li class="nav-item">
                    <Link class="nav-link px-4" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link px-4"
                      data-bs-toggle="dropdown"
                      to="Home/"
                      role="button"
                      aria-expanded="false"
                    >
                      About Us
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="History">
                          History
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          Leadership
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="CoreValues">
                          Core Values
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          Distribution
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle px-4"
                      data-bs-toggle="dropdown"
                      href="/"
                      role="button"
                      aria-expanded="false"
                    >
                      Product
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="PersonalCare">
                          Personal Care
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          Bathroom Care
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          Floor & Surface Care
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          General Care
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          Kitchen Care
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item" style={{ justifyContent: "around" }}>
                    <Link class="nav-link px-4" to="Innovation&Technology">
                      Innovation & Technology
                    </Link>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle ps-4"
                      data-bs-toggle="dropdown"
                      to="/"
                      role="button"
                      aria-expanded="false"
                    >
                      Media
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown- m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider m-0"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">
                          Youtube
                        </a>
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
              <img src="media/bag.png" alt="" href />
          </div>
            </div>
          </nav>
          
        </div>
        
        
      </header>
    </div>
  );
}
