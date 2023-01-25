import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    const Wrapper = styled.div`
      min-height: 70vh;
      background-image: linear-gradient(
        to bottom right,
        rgba(92, 122, 169, 1),
        white,
        white,
        rgba(92, 122, 169, 1)
      );

      section {
        display: flex;
        align-items: center;
      }
    `;
    return (
      <Wrapper>
        <div className="container py-3">
          <h2>You can call our office line</h2>
          <p>Available 8.00 am to 5.00pm Mon</p>
          <section className="">
            <h3>Phone</h3>
            <span>
              <img src="/assets/call2.png" alt="" height="50" width="50" />
            </span>
            <Link
              to="tel:#"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "1rem",
                marginLeft: "20px",
              }}
            >
              <p>tel +23498200****</p>
            </Link>
          </section>

          <div className="container mt-3">
            <h3>Email our us here</h3>
            <form method="post" action="/contact">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Contact;
