import React from "react";
import "./Services.css"; // Create this file for custom styles

const Services = () => {
  return (
    <div className="container my-5">
      <div className="d-flex align-items-start mb-4">
        <h2 className="services-heading me-3">Services</h2>
        <p className="text-muted">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="row gy-4">
        {/* Card 1 */}
        <div className="col-md-6">
          <div className="service-card p-4 rounded-4 h-100 border">
            <h5 className="highlighted-text mb-3">Search engine optimization</h5>
            <img
              id='img1'
              src="./src/assets/services-img1.png"
              alt="SEO"
              className="img-fluid mb-3"
            />
            <a href="#" className="learn-more d-flex align-items-center mt-5">
              <span className="icon-circle me-2 ">&#10140;</span> Learn more
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div className="service-card p-4 rounded-4 h-100 bg-lime">
            <h5 className="highlighted-text mb-3">Pay-per-click advertising</h5>
            <img
            id='img2'
              src="./src/assets/services-img2.png"
              alt="PPC"
              className="img-fluid mb-3"
            />
            <a href="#" className="learn-more d-flex align-items-center">
              <span className="icon-circle me-2">&#10140;</span> Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
