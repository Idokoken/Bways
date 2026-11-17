import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);

  .affiliate-page {
    color: #333;
    background: #fff;
  }

  .affiliate-hero {
    padding: 100px 8%;
    background: #f3f7f3;
  }

  .affiliate-hero span {
    color: var(--primary-color);
    font-weight: 700;
    letter-spacing: 2px;
  }

  .affiliate-hero h1 {
    max-width: 650px;
    font-size: 45px;
    margin: 20px 0;
    font-weight: 700;
  }

  .affiliate-hero p {
    max-width: 600px;
    line-height: 1.8;
    color: rgba(0, 0, 0, 0.8);
  }

  .affiliate-btn,
  .affiliate-form-section button {
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    padding: 14px 25px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    margin-top: 20px;
  }

  .affiliate-section,
  .affiliate-benefits,
  .affiliate-form-section {
    max-width: 1100px;
    margin: auto;
    padding: 65px 20px;
  }

  .affiliate-section h2,
  .affiliate-benefits h2,
  .affiliate-form-section h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
    font-weight: 700;
  }

  .affiliate-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .affiliate-card {
    padding: 25px;
    border: 1px solid #eee;
    border-radius: 8px;
  }

  .affiliate-card span {
    color: var(--primary-color);
    font-size: 28px;
    font-weight: 700;
  }

  .affiliate-card p,
  .affiliate-form-section p {
    color: #666;
    line-height: 1.8;
  }

  .affiliate-benefits {
    background: #f8f8f8;
    max-width: 100%;
  }

  .affiliate-benefits ul {
    max-width: 600px;
    margin: auto;
    line-height: 2.2;
  }

  .affiliate-audience {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  .affiliate-audience span {
    background: #e9f6ec;
    color: var(--primary-color);
    padding: 15px 20px;
    border-radius: 5px;
    font-weight: 600;
  }

  .affiliate-form-section > p {
    text-align: center;
  }

  .affiliate-form-section form {
    max-width: 650px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .affiliate-form-section input,
  .affiliate-form-section select,
  .affiliate-form-section textarea {
    width: 100%;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    font-size: 15px;
  }

  .affiliate-form-section button {
    width: 100%;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    .affiliate-hero {
      padding: 65px 20px;
    }

    .affiliate-hero h1 {
      font-size: 32px;
    }

    .affiliate-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .affiliate-grid {
      grid-template-columns: 1fr;
    }
  }
`;

function AffliatesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    platform: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this form to your backend API.
    console.log("Affiliate Application:", formData);

    alert("Your affiliate application has been submitted!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
      platform: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div className="affiliate-page">
          <section className="affiliate-hero">
            <div>
              <span>OUR AFFILIATE PROGRAMME</span>
              <h1>Earn More by Sharing What You Love!</h1>
              <p>
                Join our affiliate programme and earn commissions by promoting
                products your audience will love.
              </p>

              <a href="#affiliate-form" className="affiliate-btn">
                Become an Affiliate
              </a>
            </div>
          </section>

          <section className="affiliate-section">
            <h2>How It Works</h2>

            <div className="affiliate-grid">
              <div className="affiliate-card">
                <span>01</span>
                <h3>Sign Up</h3>
                <p>
                  Complete our registration form and submit your application.
                </p>
              </div>

              <div className="affiliate-card">
                <span>02</span>
                <h3>Get Your Link</h3>
                <p>
                  Receive your unique affiliate referral link after approval.
                </p>
              </div>

              <div className="affiliate-card">
                <span>03</span>
                <h3>Promote Products</h3>
                <p>
                  Share your referral link with your audience and promote our
                  products.
                </p>
              </div>

              <div className="affiliate-card">
                <span>04</span>
                <h3>Earn Commissions</h3>
                <p>
                  Earn commissions from qualifying purchases made through your
                  link.
                </p>
              </div>
            </div>
          </section>

          <section className="affiliate-benefits">
            <h2>Why Become an Affiliate?</h2>

            <ul>
              <li>Earn commissions from successful referrals.</li>
              <li>Promote a wide range of products.</li>
              <li>Access promotional materials.</li>
              <li>Track your referral performance.</li>
              <li>Grow with our e-commerce community.</li>
            </ul>
          </section>

          <section className="affiliate-section">
            <h2>Who Can Join?</h2>

            <div className="affiliate-audience">
              <span>Influencers</span>
              <span>Bloggers</span>
              <span>Content Creators</span>
              <span>Digital Marketers</span>
              <span>Business Owners</span>
            </div>
          </section>

          <section className="affiliate-form-section" id="affiliate-form">
            <h2>Become an Affiliate Partner</h2>
            <p>Complete the form below to apply for our affiliate programme.</p>

            <form onSubmit={handleSubmit}>
              <input
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

              <input
                type="url"
                name="website"
                placeholder="Website or Social Media URL"
                value={formData.website}
                onChange={handleChange}
              />

              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
              >
                <option value="">Select Platform</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="TikTok">TikTok</option>
                <option value="YouTube">YouTube</option>
                <option value="Blog">Blog / Website</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your audience and how you plan to promote our products"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit Application</button>
            </form>
          </section>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default AffliatesPage;
