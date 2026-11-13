import styled from "styled-components";
// import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
    min-height: 50vh;
    font-family: var(--primary-font);
    
    h3{
      text-align: center;
      font-weight: 700;
    }

    .policy-page {
  padding: 60px 20px;
  background: #fff;
  color: #333;
}

.policy-container {
  max-width: 1000px;
  margin: 0 auto;
}

.policy-header {
  text-align: center;
  margin-bottom: 45px;
}

.policy-header h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #222;
}

.policy-header p {
  color: #777;
  font-size: 14px;
}

.policy-container section {
  margin-bottom: 30px;
}

.policy-container section h2 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #222;
}

.policy-container section p,
.policy-container section li {
  font-size: 15px;
  line-height: 1.8;
  color: #666;
}

.policy-container ul {
  padding-left: 25px;
}

@media (max-width: 768px) {
  .policy-page {
    padding: 40px 18px;
  }

  .policy-header h1 {
    font-size: 28px;
  }

  .policy-container section h2 {
    font-size: 18px;
  }
}

`

function PrivacyPolicy() {
    return (
        <>
        <Header />
        <Wrapper>
           
    <div className="policy-page">
      <div className="policy-container">
        <div className="policy-header">
          <h1>Privacy Policy</h1>
          <p>Last Updated: November 9, 2026</p>
        </div>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to [Your Store Name]. We value your privacy and are
            committed to protecting your personal information. This
            Privacy Policy explains how we collect, use, store, and
            protect your information when you use our platform.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul>
            <li>Name, email address, phone number, and delivery address.</li>
            <li>Account information and login details.</li>
            <li>Order history and transaction details.</li>
            <li>Device, browser, and website usage information.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and deliver your orders.</li>
            <li>Manage your customer account.</li>
            <li>Send order updates and notifications.</li>
            <li>Provide customer support.</li>
            <li>Improve our products and services.</li>
            <li>Prevent fraudulent activities.</li>
          </ul>
        </section>

        <section>
          <h2>4. Payment Information</h2>
          <p>
            Payments may be processed through third-party payment
            providers. We do not intentionally store your full payment
            card details.
          </p>
        </section>

        <section>
          <h2>5. Sharing Your Information</h2>
          <p>
            We may share necessary information with payment processors,
            delivery partners, technology providers, and regulatory
            authorities where legally required.
          </p>
          <p>We do not sell your personal information to third parties.</p>
        </section>

        <section>
          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies to improve your browsing experience,
            remember preferences, and understand how visitors use our
            website.
          </p>
        </section>

        <section>
          <h2>7. Data Security</h2>
          <p>
            We use reasonable technical and organisational measures to
            protect your personal information against unauthorised
            access, loss, or misuse.
          </p>
        </section>

        <section>
          <h2>8. Your Privacy Rights</h2>
          <p>
            Depending on applicable laws, you may request access,
            correction, or deletion of your personal information and
            exercise other available data protection rights.
          </p>
        </section>

        <section>
          <h2>9. Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary
            to provide our services and meet applicable legal obligations.
          </p>
        </section>

        <section>
          <h2>10. Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites. We
            are not responsible for their privacy practices.
          </p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this policy periodically. Changes will be
            published on this page.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>
            For privacy-related enquiries, contact us through:
          </p>
          <p>Email: support@yourstore.com</p>
          <p>Phone: Your Business Phone Number</p>
          <p>Address: Your Business Address</p>
        </section>
      </div>
    </div>
  
                
        </Wrapper>
        <Footer />
        </>
    )
    
}

export default PrivacyPolicy;