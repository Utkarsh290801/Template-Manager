import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MDBCardImage } from "mdb-react-ui-kit";

const ShowUserDetail = ({ selUser, setShowUpdateForm, deleteUser }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/user/getall");
      const data = await response.json();

      console.log(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="h-100 gradient-custom-2 mt-4">
      <h1 className="card-title">User Details</h1>
      <hr></hr>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div
            className="rounded-top text-white d-flex flex-row"
            style={{ backgroundColor: "#000", height: 200 }}
          >
            <div
              className="ms-4 mt-5 d-flex flex-column"
              style={{ width: 150 }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image"
                className="img-fluid img-thumbnail mt-4 mb-2"
                style={{ width: 150, zIndex: 1 }}
              />
              <button
                type="submit"
                className="btn btn-danger"
                data-mdb-ripple-color="dark"
                style={{ zIndex: 1 }}
                onClick={(e) => deleteUser(selUser._id)}
              >
                Delete Account
              </button>
            </div>
            <div className="ms-3" style={{ marginTop: 110 }}>
              <h1>{selUser.username}</h1>
              <p>UserId: {selUser._id}</p>
            </div>
          </div>
          <div
            className="p-4 text-black"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="d-flex justify-content-end text-center py-1">
              <div>
                <p className="small text-muted mb-0">
                  <b>Created At:</b> {selUser.createdAt}
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <p className="lead fw-normal mb-1">About</p>
              <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="font-italic mb-0">{selUser.username}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">E-mail</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="font-italic mb-0">{selUser.email}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Password</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="font-italic mb-0">{selUser.password}</p>
                  </div>
                </div>
                <hr></hr>
                <button
                  onClick={(e) => setShowUpdateForm(false)}
                  color="error"
                  variant="contained"
                  className="w-100 mt-3"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowUserDetail;
