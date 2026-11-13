import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.footer`
  .cookie-page {
    padding: 60px 20px;
    background: #fff;
    color: #333;
  }

  .cookie-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .cookie-header {
    text-align: center;
    margin-bottom: 45px;
  }

  .cookie-header h1 {
    font-size: 36px;
    color: #222;
    margin-bottom: 10px;
  }

  .cookie-header p {
    color: #777;
    font-size: 14px;
  }

  .cookie-container section {
    margin-bottom: 30px;
  }

  .cookie-container section h2 {
    font-size: 20px;
    color: #222;
    margin-bottom: 12px;
  }

  .cookie-container section h3 {
    font-size: 17px;
    color: #333;
    margin: 18px 0 8px;
  }

  .cookie-container section p,
  .cookie-container section li {
    font-size: 15px;
    line-height: 1.8;
    color: #666;
  }

  .cookie-container ul {
    padding-left: 25px;
  }

  @media (max-width: 768px) {
    .cookie-page {
      padding: 40px 18px;
    }

    .cookie-header h1 {
      font-size: 28px;
    }
  }
`;

function CookiePolicy() {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="cookie-page">
          <div className="cookie-container">
            <div className="cookie-header">
              <h1>Cookie Policy</h1>
              <p>Last Updated: November 10, 2026</p>
            </div>

            <section>
              <h2>1. Introduction</h2>
              <p>
                At [Your Store Name], we use cookies and similar technologies to
                improve your browsing experience, understand how visitors
                interact with our website, and provide better services.
              </p>
            </section>

            <section>
              <h2>2. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help websites remember information about
                your visit, including your preferences and shopping cart
                activities.
              </p>
            </section>

            <section>
              <h2>3. Types of Cookies We Use</h2>

              <h3>Essential Cookies</h3>
              <p>
                These cookies support important website features such as account
                login, shopping cart management, and secure checkout.
              </p>

              <h3>Functional Cookies</h3>
              <p>
                These cookies remember your preferences and settings to improve
                your shopping experience.
              </p>

              <h3>Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our
                website and improve its performance.
              </p>

              <h3>Marketing Cookies</h3>
              <p>
                These cookies may be used to display relevant advertisements and
                measure marketing performance, subject to applicable consent
                requirements.
              </p>
            </section>

            <section>
              <h2>4. Why We Use Cookies</h2>
              <ul>
                <li>Keep customers logged into their accounts.</li>
                <li>Remember shopping cart items.</li>
                <li>Improve website performance.</li>
                <li>Understand customer browsing behaviour.</li>
                <li>Personalise the shopping experience.</li>
                <li>Improve marketing activities.</li>
              </ul>
            </section>

            <section>
              <h2>5. Third-Party Cookies</h2>
              <p>
                Some cookies may be placed by third-party services integrated
                into our website, including analytics providers and advertising
                platforms.
              </p>
            </section>

            <section>
              <h2>6. Managing Your Cookie Preferences</h2>
              <p>
                You can manage or disable cookies through your browser settings
                or our cookie preference settings, where available. Disabling
                essential cookies may affect some website features.
              </p>
            </section>

            <section>
              <h2>7. Data Protection</h2>
              <p>
                Information collected through cookies is handled in accordance
                with our Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy periodically. Updated versions
                will be published on this page.
              </p>
            </section>

            <section>
              <h2>9. Contact Us</h2>
              <p>Email: support@yourstore.com</p>
              <p>Phone: Your Business Phone Number</p>
              <p>Address: Your Business Address</p>
            </section>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default CookiePolicy;
