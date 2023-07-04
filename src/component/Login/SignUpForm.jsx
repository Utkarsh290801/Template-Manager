import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "./SocialMedia";
import SignInForm from "./SignInForm";

const SignUpForm = ({ onSignUpSuccess }) => {
  const url = "http://localhost:5000";
  const navigate = useNavigate();

  const signup = {
    username: "",
    email: "",
    password: "",
  };
  const userSubmit = async (formdata) => {
    console.log(formdata);
    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log(response.status);
      const data = await response.json();
      // console.log("data saved");
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Well Done",
        text: "You have done a wonderful job !! 👍👍",
      });
      if (typeof onSignUpSuccess === "function") {
        onSignUpSuccess(); // Call the callback function on successful signup
      }
    } else {
      console.log(response.status);
      console.log("something went wrong");
      Swal.error({
        icon: "error",
        title: "OOPS",
        text: "!! something went wrong!!",
      });
    }
  };
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short username!")
      .max(12, "Too Long username !")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is Required")
      .test("email", "Email already exists", async (value, obj) => {
        // console.log(obj);
        // if(obj.path!=='email') return;
        const response = await fetch(
          "http://localhost:5000/user/checkemail/" + value
          // {
          //   method: "POST",
          //   body: JSON.stringify({ email: value }),
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // }
        );
        if (response.status === 200) {
          // console.log("email found");
          return false;
        } else if (response.status === 404) {
          // console.log("email not found");
          return true;
        } else if (response.status === 402) {
          // console.log("email not found");
          return true;
        }
      }),
    password: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  return (
    <>
      <Formik
        validationSchema={formSchema}
        initialValues={signup}
        onSubmit={userSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
            </div>
            <p className="text-warning">
              {errors.username && touched.username && errors.username}
            </p>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
            </div>
            <p className="text-warning">
              {errors.email && touched.email && errors.email}
            </p>
            {/* {errors.email && <span className="text-warning">This field is required</span>} */}
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
              />
            </div>
            <p className="text-warning">
              {errors.password && touched.password && errors.password}
            </p>
            <input className="iBtn" type="submit" value="sign Up" />
            {/* <p className="social-text">Or Sign up with social account</p>
            <SocialMedia /> */}
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
