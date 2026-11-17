import styled from "styled-components";
// import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  min-height: 50vh;
  font-family: var(--primary-font);

  h3 {
    text-align: center;
    font-weight: 700;
  }

  .terms-page {
    padding: 0;
    background: #fff;
    color: #333;
  }

  .terms-container {
    width: 100%;
    margin: 0;
  }

  .terms-header {
    text-align: center;
    margin-bottom: 45px;
    background: var(--primary-color);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    alifn-items: center;
    padding: 20px;
    color: white;
  }

  .terms-header h1 {
    font-size: 36px;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .terms-header p {
    font-size: 14px;
  }

  .terms-container section {
    margin-bottom: 30px;
  }

  .terms-container section h2 {
    font-size: 20px;
    margin-bottom: 12px;
    color: #222;
    font-weight: 700;
  }

  .terms-container section p,
  .terms-container section li {
    font-size: 15px;
    line-height: 2;
    color: rgba(0, 0, 0, 0.8);
  }

  .terms-container ul {
    padding-left: 25px;
  }

  @media (max-width: 768px) {
    .terms-header h1 {
      font-size: 28px;
    }

    .terms-container section h2 {
      font-size: 18px;
    }
  }
`;

function TermsAndConditions() {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="terms-page">
          <div className="terms-container">
            <div className="terms-header">
              <h1>Terms and Conditions</h1>
              <p>Last Updated: November 9, 2026</p>
            </div>

            <main className="px-10">
              <section>
                <h2>1. Introduction</h2>
                <p>
                  Welcome to Bways. These Terms and Conditions govern your
                  access to and use of our website, products, and services. By
                  using our platform, you agree to these terms.
                </p>
              </section>

              <section>
                <h2>2. Account Registration</h2>
                <p>
                  You may need to create an account to access certain features.
                  You agree to provide accurate information and keep your login
                  credentials secure.
                </p>
              </section>

              <section>
                <h2>3. Products and Pricing</h2>
                <p>
                  We make reasonable efforts to ensure product descriptions,
                  images, prices, and availability are accurate. Prices and
                  availability may change, subject to applicable law.
                </p>
              </section>

              <section>
                <h2>4. Orders and Payments</h2>
                <p>
                  Orders are subject to confirmation, payment, and product
                  availability. We reserve the right to reject or cancel orders
                  where necessary. Eligible refunds will be processed in
                  accordance with our refund policy.
                </p>
              </section>

              <section>
                <h2>5. Delivery and Shipping</h2>
                <p>
                  Delivery times are estimates and may vary depending on
                  location, weather, and logistics. Customers must provide
                  accurate delivery information.
                </p>
              </section>

              <section>
                <h2>6. Returns and Refunds</h2>
                <p>
                  Returns, refunds, and exchanges are handled according to our
                  Returns and Refunds Policy and applicable consumer protection
                  laws.
                </p>
              </section>

              <section>
                <h2>7. Order Cancellation</h2>
                <p>
                  Cancellation requests should be submitted as soon as possible.
                  Orders that have already been processed or dispatched may not
                  be eligible for cancellation.
                </p>
              </section>

              <section>
                <h2>8. User Responsibilities</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>Provide false or misleading information.</li>
                  <li>Use the platform for unlawful activities.</li>
                  <li>Attempt unauthorised access to our systems.</li>
                  <li>Interfere with the operation of our website.</li>
                  <li>Engage in fraudulent transactions.</li>
                </ul>
              </section>

              <section>
                <h2>9. Intellectual Property</h2>
                <p>
                  All website content, including logos, images, graphics, text,
                  and designs, belongs to [Your Store Name] or its respective
                  licensors and may not be used without permission.
                </p>
              </section>

              <section>
                <h2>10. Limitation of Liability</h2>
                <p>
                  To the extent permitted by applicable law, we are not
                  responsible for indirect or consequential losses arising from
                  the use of our platform. This does not exclude liability that
                  cannot legally be excluded.
                </p>
              </section>

              <section>
                <h2>11. Third-Party Services</h2>
                <p>
                  Our platform may use third-party payment providers, delivery
                  companies, and other external services. Their own terms and
                  policies may also apply.
                </p>
              </section>

              <section>
                <h2>12. Account Suspension</h2>
                <p>
                  We may suspend or restrict accounts involved in fraudulent,
                  unlawful, or prohibited activities, subject to applicable law.
                </p>
              </section>

              <section>
                <h2>13. Changes to These Terms</h2>
                <p>
                  We may update these Terms and Conditions periodically. Updated
                  versions will be published on this page.
                </p>
              </section>

              <section>
                <h2>14. Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by the laws of the
                  Federal Republic of Nigeria, subject to applicable mandatory
                  legal requirements.
                </p>
              </section>

              <section>
                <h2>15. Contact Us</h2>
                <p>Email: support@bways.com</p>
                <p>Phone: +2348037755443</p>
                <p>N0 11 Amino Kano way, Wuse 2, Abuja</p>
              </section>
            </main>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default TermsAndConditions;
