import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { tablet } from "../Responsive";
import Footer from "../components/Footer";
import Title from "../components/Title";
import contact_img from "../assets/contact_img.jpg";
import Newsletter from "./../components/Newsletter";
import Header from "../components/Header";

const Wrapper = styled.div`
  min-height: 50vh;
  font-family: var(--primary-font);

  .contact-page {
    width: 100%;
    color: #222;
  }

  .contact-hero {
    text-align: center;
    padding: 70px 20px;
    background: linear-gradient(261.79deg, #5b11bd 0%, #2a0857 62.97%);
    color: white;
  }

  .contact-hero span {
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .contact-hero h1 {
    font-size: 38px;
    margin: 15px 0;
  }

  .contact-hero p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
    max-width: 600px;
    margin: auto;
  }

  .contact-section {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 50px;
    padding: 70px 8%;
  }

  .contact-info h2,
  .contact-form-container h2 {
    font-size: 26px;
    margin-bottom: 20px;
  }

  .contact-info > p {
    color: #666;
    line-height: 1.7;
    margin-bottom: 30px;
  }

  .contact-item {
    margin-bottom: 25px;
  }

  .contact-item h4 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .contact-item p {
    color: #666;
  }

  .contact-form-container {
    background: #fff;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 13px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    font-family: inherit;
    font-size: 14px;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #f97316;
  }

  .form-group textarea {
    resize: vertical;
  }

  .contact-form-container button {
    width: 100%;
    padding: 14px;
    border: none;
    background: var(--primary-color);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s ease;
  }

  .contact-form-container button:hover {
    background: rgba(91, 17, 189, 0.5);
  }

  @media (max-width: 768px) {
    .contact-hero h1 {
      font-size: 28px;
    }

    .contact-section {
      grid-template-columns: 1fr;
      padding: 40px 5%;
      gap: 30px;
    }

    .contact-form-container {
      padding: 25px 18px;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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

    // Connect this to your backend contact API
    console.log(formData);

    alert("Your message has been submitted!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div className="contact-page">
          {/* Hero Section */}
          <section className="contact-hero">
            <span>GET IN TOUCH</span>
            <h1>We'd Love to Hear From You</h1>
            <p>
              Have a question, suggestion, or need assistance? Our team is
              always happy to help.
            </p>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>

              <p>
                Get in touch with us through any of the channels below. We'll be
                happy to assist you.
              </p>

              <div className="contact-item">
                <h4>Email Address</h4>
                <p>support@bways.com</p>
              </div>

              <div className="contact-item">
                <h4>Phone Number</h4>
                <p>+234 800 300 6600</p>
              </div>

              <div className="contact-item">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>

              <div className="contact-item">
                <h4>Our Location</h4>
                <p>Your b</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is your message about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </section>
        </div>

        <Newsletter />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
