import React from "react";
import { Form, Col, Row, Toast } from "react-bootstrap";
import "./Book.css";
const TaskSubmission = () => {
  return (
    <>
      <div className="bookForm">
     
        <Row>
          <Col md={6} xs={12} className="my-3">
            <Form.Label style={{ fontWeight: "bold" }}>Service</Form.Label>
            <select class="form-select">
              <option>bnbb</option>
              <option>bnb</option>
            </select>
          </Col>
          <Col md={6} xs={12} className="my-3">
            <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
            <div className="priceInput">23</div>
          </Col>
        </Row>

        <Form>
          <Row>
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Your Name
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
              Pay Now
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default TaskSubmission;
