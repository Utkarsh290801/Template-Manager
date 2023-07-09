import React, { useEffect, useState } from "react";
import "./Service.css";

const Services = ({ filter }) => {
  const url = "http://localhost:5000";
  const [services, setServices] = useState([]);
  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/service/getall");
    const data = await response.json();
    console.log(data);
    setServices(data);
  };
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  
  const handleApply = async (serviceId) => {
  
    // const response = await fetch("http://localhost:5000/apply/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ user: currentUser }),
    // });

    // const result = await response.json();
    // console.log(result);

   
    // if (result.message) {
    //   alert(result.message);
    // } else {
    //   // Navigate to the user's application page
    //   window.location.href = `/user/apply/${serviceId}`;
    // }
    window.location.href = `/user/apply/${serviceId}`;
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);
  const filteredServices = services.filter((service) =>
    service.domain.toLowerCase().includes(filter?.toLowerCase())
  );
  const renderServices = filter ? filteredServices : services;
  return (
    <section id="services" className="services">
      <h4 className="miniTitle text-center">Our Internships</h4>
      <div className="text-center">
        <h5 className="text-center sectionTitle">CHOOSE YOUR DOMAIN</h5>
      </div>

      <div className="row  p-5">
        {renderServices.length === 0 ? (
          <p
            className="text-center"
            style={{ fontSize: "4rem", fontWeight: "bold" }}
          >
            No Results Found
          </p>
        ) : (
          renderServices.map((curr) => (
            <div className="col-md-3" key={curr.id}>
              <div className="training-items">
                <img src="" alt=""></img>
                <h3>{curr.domain}</h3>
                <p style={{ fontSize: "1.2rem" }}>
                  Position: <span>{curr.position}</span> <br />
                  Location: <span>{curr.location}</span> <br />
                  Duration: <span>{curr.duration}</span>{" "}
                </p>
                <button className="" onClick={() => handleApply(curr._id)}>
                  Apply
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Services;
