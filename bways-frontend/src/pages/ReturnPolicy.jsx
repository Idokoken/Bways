import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  .return-page {
    padding: 60px 20px;
    background: #fff;
    color: #333;
  }

  .return-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .return-header {
    text-align: center;
    margin-bottom: 45px;
  }

  .return-header h1 {
    font-size: 36px;
    color: #222;
    margin-bottom: 10px;
  }

  .return-header p {
    color: #777;
    font-size: 14px;
  }

  .return-container section {
    margin-bottom: 30px;
  }

  .return-container section h2 {
    font-size: 20px;
    color: #222;
    margin-bottom: 12px;
  }

  .return-container section p,
  .return-container section li {
    font-size: 15px;
    line-height: 1.8;
    color: #666;
  }

  .return-container ul,
  .return-container ol {
    padding-left: 25px;
  }

  @media (max-width: 768px) {
    .return-page {
      padding: 40px 18px;
    }

    .return-header h1 {
      font-size: 28px;
    }

    .return-container section h2 {
      font-size: 18px;
    }
  }
`;

function ReturnPolicy() {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="return-page">
          <div className="return-container">
            <div className="return-header">
              <h1>Returns and Refunds Policy</h1>
              <p>Last Updated: November 10, 2026</p>
            </div>

            <section>
              <h2>1. Introduction</h2>
              <p>
                At [Your Store Name], customer satisfaction is important to us.
                This policy explains how you can request a return, exchange, or
                refund if you are not satisfied with your purchase.
              </p>
            </section>

            <section>
              <h2>2. Return Eligibility</h2>
              <p>Customers may request a return where:</p>
              <ul>
                <li>The product received is damaged or defective.</li>
                <li>The wrong product was delivered.</li>
                <li>The product does not match its description.</li>
                <li>The product qualifies under our return conditions.</li>
              </ul>
              <p>
                For eligible change-of-mind returns, products should generally
                be unused, undamaged, and in their original packaging, subject
                to applicable law.
              </p>
            </section>

            <section>
              <h2>3. Return Period</h2>
              <p>
                Please contact our customer support team within 7 days of
                receiving your order to request a return. This period does not
                limit any additional rights available under applicable law.
              </p>
            </section>

            <section>
              <h2>4. Non-Returnable Products</h2>
              <p>
                Certain products may not qualify for change-of-mind returns,
                including:
              </p>
              <ul>
                <li>Opened or used personal care and hygiene products.</li>
                <li>Perishable goods.</li>
                <li>Customised or personalised products.</li>
                <li>Products clearly marked as non-returnable.</li>
              </ul>
              <p>
                These exclusions do not remove mandatory consumer rights
                relating to defective or incorrectly supplied products.
              </p>
            </section>

            <section>
              <h2>5. How to Request a Return</h2>
              <ol>
                <li>Contact our customer support team.</li>
                <li>Provide your order number and reason for the return.</li>
                <li>Share pictures or videos where necessary.</li>
                <li>Wait for confirmation and return instructions.</li>
                <li>
                  Package the product securely and follow the instructions.
                </li>
              </ol>
              <p>
                Please do not send products back before receiving return
                instructions.
              </p>
            </section>

            <section>
              <h2>6. Refund Process</h2>
              <p>
                Once your returned product has been received and inspected, we
                will notify you whether your refund has been approved.
              </p>
              <p>
                Approved refunds will generally be processed through the
                original payment method where possible. Processing times may
                depend on your bank or payment provider.
              </p>
            </section>

            <section>
              <h2>7. Exchanges</h2>
              <p>
                Customers may request exchanges for eligible products, subject
                to stock availability. If a replacement is unavailable, we will
                discuss an alternative or refund.
              </p>
            </section>

            <section>
              <h2>8. Damaged, Defective, or Incorrect Products</h2>
              <p>
                If you receive a damaged, defective, or incorrect product,
                contact us as soon as possible. We may request photographs or
                videos to help investigate the issue.
              </p>
              <p>
                Eligible customers may receive a replacement, exchange, repair,
                or refund as appropriate under applicable law.
              </p>
            </section>

            <section>
              <h2>9. Return Shipping Costs</h2>
              <p>
                Where a return is necessary because we supplied a damaged,
                defective, or incorrect product, we will arrange or cover
                reasonable return costs as required by applicable law.
              </p>
              <p>
                For eligible change-of-mind returns, customers may be
                responsible for return shipping costs where clearly disclosed
                and legally permitted.
              </p>
            </section>

            <section>
              <h2>10. Order Cancellation</h2>
              <p>
                Customers may request cancellation before dispatch. Once an
                order has been dispatched, cancellation may no longer be
                possible, but a return may still be available.
              </p>
            </section>

            <section>
              <h2>11. Refund Delays</h2>
              <p>
                If you have not received an approved refund within the expected
                processing period, contact our customer support team with your
                order number.
              </p>
            </section>

            <section>
              <h2>12. Contact Us</h2>
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

export default ReturnPolicy;
