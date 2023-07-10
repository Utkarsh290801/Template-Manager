import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";

// import userimg from "../../Assets/images/user.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Swal from "sweetalert2";

const Profile = () => {
  const navigate = useNavigate();
  const { loggedIn, setloggedIn } = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );
  const [appliedStatus, setAppliedStatus] = useState(null);
  const logout = () => {
    //destroy session value
    sessionStorage.removeItem("admin");
    //  setloggedIn to false
    setloggedIn(false);
    //  navigate to login page
    navigate("/login");
  };

  const url = "http://localhost:5000";

  return (
    <>
      <Col md={5} className="mx-auto">
        <div className="profile">
          <h2>Profile</h2>
          <div className="profileInfo">
            <img
              src="https://img.freepik.com/free-icon/user_318-159711.jpg"
              alt=""
            />
            <h3>{currentUser.username}</h3>
            <h5>{currentUser.email}</h5>

            {/* <>
              <p>
                Applied Status: Applied on{" "}
                <span>Web</span>
              </p>
            </> */}

            <div className="d-flex justify-content-around">
              {/* <NavLink className="mainBtn mt-3" to="/dashboard/edit">
                Edit Profile
              </NavLink> */}

              <button className="mainBtn mt-3" onClick={logout}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Profile;
