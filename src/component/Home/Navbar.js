import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import PopOver from "../PopOver/PopOver";

const Navbar = ({ setFilter }) => {
  const { loggedIn, setloggedIn } = useContext(AppContext);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container-fluid">
          {/* <i class="fa-solid fa-bars"></i> */}
          <a class="navbar-brand me-2" href="">
            <img
              src="https://rightpathpredictor.in/sisotcha/2023/04/RPP-300x292.jpg"
              height="56"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          <div className="d-flex flex-column">
            <h5
              className=""
              style={{
                color: "#7355F7",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              Right Path Predictor
            </h5>

            <small
              className=""
              style={{ color: "#f7cc53", fontWeight: "bold", fontSize: "1rem" }}
            >
              Intern. Grow. Succeed.
            </small>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarExample01">
            <form
              class="input-group  mx-auto d-none d-sm-flex"
              style={{ width: "35%" }}
            >
              <input
                autocomplete="off"
                type="search"
                class="form-control rounded"
                placeholder="Search internships"
                style={{ minWidth: "165px" }}
                onChange={handleFilterChange}
              />
            </form>
            <ul class="navbar-nav ms-auto mb-lg-0">
              <div className="ms-auto d-flex align-items-center justify-content-center ">
                <li className="nav-item ">
                  <a
                    href="#about"
                    style={{ color: "#7355F7" }}
                    className="d-none d-sm-block"
                  >
                    &nbsp; &nbsp;About Us &nbsp; &nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#services" style={{ color: "#7355F7" }}>
                    Internship Domain{" "}
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#contact" style={{ color: "#7355F7" }}>
                    {" "}
                    &nbsp; &nbsp;Contact Us &nbsp; &nbsp;
                  </a>
                </li>
                {loggedIn ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/dashboard/profile">Dashboard</NavLink>
                    </li>
                  </>
                ) : null}
              </div>
              <li class="nav-item active">
                {!loggedIn ? (
                  <NavLink
                    className="btn btn-outline-primary btn-lg m-2 "
                    to="/login"
                  >
                    Login
                  </NavLink>
                ) : (
                  <>
                    <PopOver />
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
