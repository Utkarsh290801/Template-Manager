import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InternshipApply.css";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const InternshipApply = () => {
  const { id } = useParams();
  const url = "http://localhost:5000";
  const navigate = useNavigate();
  const [resumeUrl, setResumeUrl] = useState("");
  const [modelData, setModelData] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  
  const getModelById = () => {
    fetch(url + "/service/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModelData(data);
      })
      .catch((error) => {
        console.log("Error fetching internship data:", error);
      });
  };

  useEffect(() => {
    getModelById();
  }, []);
  
  const [hasApplied, setHasApplied] = useState(false);
  useEffect(() => {
    // Check if user has already applied for the same internship domain
    if (modelData && currentUser) {
      fetch(`${url}/apply/checkuser/${currentUser._id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.domain === modelData.domain) {
            setHasApplied(true);
          }
        })
        .catch((error) => {
          console.log("Error checking user application:", error);
        });
    }
  }, [modelData, currentUser]);

  const [selFile, setSelFile] = useState("");
  const Apply = {
    number: "",
    gender: "",
    linkedin: "",
    github: "",
    course: "",
    stream: "",
    college: "",
    year: "",
    resume: "",
    appliedBy: currentUser?.email || "",
    domain: modelData?.domain || "",
  };
  const addSubmit = async (formdata) => {
    console.log("Form submitted:", formdata);
    formdata.file = selFile;
    formdata.resume = resumeUrl;
    formdata.user = currentUser._id;
    console.log(formdata);
    const response = await fetch("http://localhost:5000/apply/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log(response.status);
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Model added Successfully!! 👍👍",
      });
      navigate("/");
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
  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("file uploaded");
          return res.json(); // Parse the response as JSON
        } else {
          throw new Error("File upload failed");
        }
      })
      .then((data) => {
        // Get the file URL from the backend response
        const fileName = data.fileName; // Assuming the response contains the file name
        setResumeUrl(fileName);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const validationSchema = Yup.object().shape({
    gender: Yup.string().required("Gender is required"),

    number: Yup.string()
      .required("Phone number is required")
      .matches(
        /^\d{10}$/,
        "Phone number must be exactly 10 digits long and should contain only numbers"
      ),
      // linkedin: Yup.string()
      // .url("Invalid URL")
      // .required("LinkedIn profile URL is required"),
  });

  return (
    <div className="footer intern-center" style={{ height: "100%" }}>
      <div>
        {modelData && (
          <>
            {hasApplied ? (
              <>
                <div className="">
                  <p
                    className="text-center"
                    style={{ fontSize: "4rem", fontWeight: "bold" ,  }}
                  >
                    You have already applied for this internship.
                  </p>
                  <p></p>
                </div>
              </>
            ) : (
              <div class="internship-container ">
                <div class="apply_box">
                  <h1>
                    {modelData.domain}
                    <span class="title_small"> ({modelData.duration})</span>
                  </h1>
                  <Formik
                    initialValues={Apply}
                    onSubmit={addSubmit}
                    validationSchema={validationSchema}
                  >
                    {({
                      values,
                      handleSubmit,
                      handleChange,
                      errors,
                      touched,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div class="form_container">
                          <div class="form_control">
                            <label
                              className="internship-label"
                              htmlFor="username"
                            >
                              {" "}
                              Full Name *{" "}
                            </label>
                            <input
                              id="username"
                              name="username"
                              placeholder="Enter Full Name..."
                              value={currentUser.username}
                              readOnly
                              className="internship-input"
                            />
                          </div>
                          <div class="form_control">
                            <label className="internship-label" htmlFor="email">
                              {" "}
                              Email Address *{" "}
                            </label>
                            <input
                              id="email"
                              text="email"
                              name="email"
                              placeholder="Enter Email..."
                              className="internship-input"
                              value={currentUser.email}
                              readOnly
                            />
                          </div>

                          <div class="form_control">
                            <label
                              className="internship-label"
                              htmlFor="number"
                            >
                              {" "}
                              Mobile Number *{" "}
                            </label>
                            <input
                              type="number"
                              id="number"
                              name="number"
                              placeholder="Enter Mobile Number..."
                              className="internship-input"
                              value={values.number}
                              onChange={handleChange}
                            />
                            {errors.number && touched.number && (
                              <div className="error">{errors.number}</div>
                            )}
                          </div>

                          <div class="form_control">
                            <label
                              className="internship-label"
                              htmlFor="gender"
                            >
                              {" "}
                              Gender *{" "}
                            </label>
                            <div className="d-flex align-items-center justify-content-around">
                              {" "}
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                              />{" "}
                              Male
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={handleChange}
                              />{" "}
                              Female
                            </div>
                            {errors.gender && touched.gender && (
                              <div className="error">{errors.gender}</div>
                            )}
                          </div>

                          <div class="form_control">
                            <label
                              className="internship-label"
                              htmlFor="linkedin"
                            >
                              {" "}
                              Linkedin Profile link{" "}
                            </label>
                            <input
                              type="text"
                              id="linkedin"
                              name="linkedin"
                              placeholder="Enter Linkedin Profile Link..."
                              className="internship-input"
                              value={values.linkedin}
                              onChange={handleChange}
                            />
                          </div>

                          {/* <div class="textarea_control">
                      <label className="internship-label" for="address">
                        {" "}
                        Address{" "}
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        row="4"
                        cols="50"
                        placeholder="Enter Address"
                        className="internship-input"
                      ></textarea>
                    </div> */}
                          <div class="form_control">
                            <label
                              className="internship-label"
                              htmlFor="github"
                            >
                              Github Link{" "}
                            </label>
                            <input
                              id="github"
                              name="github"
                              placeholder="Enter Github link..."
                              className="internship-input"
                              value={values.github}
                              onChange={handleChange}
                            />
                          </div>
                          <div class="form_control">
                            <label
                              className="internship-label"
                              htmlFor="course"
                            >
                              {" "}
                              Choose Qualification{" "}
                            </label>
                            <select
                              className="internship-input"
                              id="course"
                              name="course"
                              value={values.course}
                              onChange={handleChange}
                            >
                              <option value="">Select Choose</option>
                              <option value="BE">BE</option>
                              <option value="btech">BTech</option>
                              <option value="diploma">Diploma</option>
                              <option value="bca">BCA</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div class="form_control">
                            <label
                              className="internship-label"
                              htmlFor="stream"
                            >
                              Stream Name
                            </label>
                            <input
                              type="text"
                              id="stream"
                              name="stream"
                              placeholder="Enter your Stream name..."
                              className="internship-input"
                              value={values.stream}
                              onChange={handleChange}
                            />
                          </div>
                          <div class="form_control">
                            <label
                              className="internship-label"
                              htmlFor="college"
                            >
                              College Name
                            </label>
                            <input
                              type="text"
                              id="college"
                              name="college"
                              placeholder="Enter your College name..."
                              className="internship-input"
                              value={values.college}
                              onChange={handleChange}
                            />
                          </div>
                          <div class="form_control">
                            <label className="internship-label" htmlFor="year">
                              Passing Year
                            </label>
                            <input
                              type="number"
                              id="year"
                              name="year"
                              placeholder="Enter your Pssing Year..."
                              className="internship-input"
                              value={values.year}
                              onChange={handleChange}
                            />
                          </div>
                          <div class="">
                            <label
                              className="internship-label"
                              htmlFor="resume"
                            >
                              {" "}
                              Resume{" "}
                            </label>
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              className="internship-input"
                              onChange={uploadFile}
                            />
                          </div>
                        </div>
                        {errors.resume && touched.resume && (
                          <div className="error">{errors.resume}</div>
                        )}
                        {resumeUrl && (
                          <div className="mt-4" style={{ float: "left" }}>
                            <a
                              href={`http://localhost:5000/${resumeUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Resume
                            </a>
                          </div>
                        )}
                        <div class="button_container">
                          <button type="submit">Apply Now</button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default InternshipApply;
