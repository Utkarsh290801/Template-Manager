import React from "react";
import { Form, Col, Row, Toast } from "react-bootstrap";
import "./EditProfile.css";
import { NavLink } from "react-router-dom";
const EditProfile = () => {
  return (
    <div>
      <div className="bookForm ">
        <div className="edit-profile ">
          <img
            src="https://img.freepik.com/free-icon/user_318-159711.jpg"
            alt=""
            className="rounded mx-auto d-block"
          />
          <div className="text-center">
            <NavLink className="h4 mt-4" to="/dashboard/profile">
              Profile
            </NavLink>
          </div>
        </div>
        {/* <Row>
          <Col md={6} xs={12} className="my-3">
            <Form.Label style={{ fontWeight: "bold" }}>Service</Form.Label>
            <select class="form-select">
              <option>bnbb</option>
              <option>bnb</option>
            </select>
          </Col>
          <Col md={6} xs={12} className="my-3">
            <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
            <div className="priceInput">99</div>
          </Col>
        </Row> */}

        <Form>
          <Row>
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Full Name
                </Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                <Form.Control type="text" placeholder="Email Address" />
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>
            </Col>
            <Col md={6} xs={12}>
              <div>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Card Number
                </Form.Label>
              </div>
              <div className="mt-3">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Expiration Date
                </Form.Label>
              </div>
              <div className="mt-3">
                <Form.Label style={{ fontWeight: "bold" }}>CVC</Form.Label>
              </div>
            </Col>
          </Row>
          <div className="text-center">
            <button className="mainBtn mt-4" type="submit">
              Update Profile
            </button>
          </div>
          <div className="mt-3">
            <Form.Group>
              <Form.Label style={{ fontWeight: "bold" }}>Change Password</Form.Label>
              <Form.Control type="text" placeholder="Change Password" />
            </Form.Group>
            <div className="text-center">
            <button className="mainBtn mt-4" type="submit">
              Update Password
            </button>
          </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
