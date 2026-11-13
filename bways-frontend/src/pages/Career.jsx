import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const Wrapper = styled.div`
  .careers-page {
    color: #333;
    background: #fff;
  }

  .careers-hero {
    text-align: center;
    padding: 100px 20px;
    color: white;
    background: var(--primary-color);
  }

  .careers-hero h1 {
    font-size: 42px;
    margin-bottom: 15px;
    font-weight: 700;
  }

  .careers-hero p {
    max-width: 650px;
    margin: 0 auto 25px;
    line-height: 1.8;
    color: white;
  }

  .careers-btn {
    display: inline-block;
    padding: 13px 25px;
    background: white;
    color: var(--primary-color);
    text-decoration: none;
    border-radius: 5px;
    font-weight: 700;
  }

  .careers-about,
  .careers-positions,
  .careers-application {
    max-width: 1100px;
    margin: auto;
    padding: 65px 20px;
  }

  .careers-about h2,
  .careers-positions h2,
  .careers-application h2 {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .careers-benefits {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 35px;
  }

  .benefit-card,
  .job-card {
    padding: 25px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #fff;
  }

  .benefit-card h3,
  .job-card h3 {
    margin-bottom: 12px;
    font-weight: 700;
  }

  .benefit-card p,
  .careers-positions > p,
  .careers-application > p {
    color: #666;
    line-height: 1.8;
  }

  .careers-positions > p,
  .careers-application > p {
    text-align: center;
  }

  .job-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;
  }

  .job-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .job-card a {
    color: #222;
    font-weight: 600;
    text-decoration: none;
  }

  .careers-application form {
    max-width: 650px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .careers-application input,
  .careers-application select,
  .careers-application textarea {
    width: 100%;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 15px;
    font-family: inherit;
  }

  .careers-application textarea {
    resize: vertical;
  }

  .careers-application button {
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #222;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }

  .careers-application button:hover,
  .careers-btn:hover {
    background: #444;
  }

  .careers-email {
    margin-top: 20px;
  }

  .careers-email a {
    color: #222;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .careers-hero {
      padding: 70px 20px;
    }

    .careers-hero h1 {
      font-size: 30px;
    }

    .careers-benefits,
    .job-list {
      grid-template-columns: 1fr;
    }

    .job-card {
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;

function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Connect this form to your backend API.
    console.log("Application:", formData);

    alert("Your application has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });
  };

  const jobPositions = [
    "Customer Support Representative",
    "Sales and Marketing Executive",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Digital Marketing Specialist",
    "Operations and Logistics Officer",
    "Product Manager",
  ];

  return (
    <>
      <Header />
      <Wrapper>
        <div className="careers-page">
          <section className="careers-hero">
            <h1>Build Your Future With Us</h1>
            <p>
              Join a team of passionate people working to make online shopping
              easier, faster, and more enjoyable.
            </p>
            <Link to="/careers" className="careers-btn">
              Explore Opportunities
            </Link>
          </section>

          <section className="careers-about">
            <h2>Why Work With Us?</h2>

            <div className="careers-benefits">
              <div className="benefit-card">
                <h3>Career Growth</h3>
                <p>
                  We encourage continuous learning, professional development,
                  and career advancement.
                </p>
              </div>

              <div className="benefit-card">
                <h3>Collaborative Environment</h3>
                <p>
                  Work with a team that values teamwork, creativity, and open
                  communication.
                </p>
              </div>

              <div className="benefit-card">
                <h3>Innovation</h3>
                <p>
                  Bring your ideas to life and help us improve the online
                  shopping experience.
                </p>
              </div>

              <div className="benefit-card">
                <h3>Make an Impact</h3>
                <p>
                  Contribute to meaningful solutions that make shopping better
                  for our customers.
                </p>
              </div>
            </div>
          </section>

          {/* <section className="careers-positions" id="open-positions">
            <h2>Explore Career Opportunities</h2>

            <p>
              We're interested in connecting with talented people across
              different areas of our business.
            </p>

            <div className="job-list">
              {jobPositions.map((job, index) => (
                <div className="job-card" key={index}>
                  <h3>{job}</h3>
                  <a href="#application-form">Apply Now</a>
                </div>
              ))}
            </div>
          </section> */}

          <section className="careers-application" id="application-form">
            <h2>Join Our Team</h2>

            <p>Interested in working with us?</p>

            {/* <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select Position</option>

                {jobPositions.map((job, index) => (
                  <option value={job} key={index}>
                    {job}
                  </option>
                ))}

                <option value="Other">Other</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about yourself and your experience"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit Application</button>
            </form> */}

            <p className="careers-email">
              You can also send your CV to{" "}
              <Link to="mailto:careers@bways.com">careers@bways.com</Link>
            </p>
          </section>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Career;
