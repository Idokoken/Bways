import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import new1 from "../assets/news1.jpg";
import new2 from "../assets/news2.jpg";

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);

  .blog-page {
    color: #333;
    background: #fff;
  }

  .blog-hero {
    padding: 85px 20px;
    text-align: center;
    background: var(--primary-color);
    color: white;
  }

  .blog-hero h1 {
    font-size: 40px;
    margin-bottom: 15px;
    font-weight: 700;
  }

  .blog-hero p {
    max-width: 600px;
    margin: auto;
    line-height: 1.8;
  }

  .blog-container {
    max-width: 1150px;
    margin: auto;
    padding: 65px 20px;
  }

  .blog-heading {
    text-align: center;
  }

  .blog-heading h2 {
    font-size: 28px;
  }

  .blog-heading p {
    color: #777;
  }

  .blog-categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin: 35px 0;
  }

  .blog-categories button {
    padding: 10px 20px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  .blog-categories button.active {
    background: #168b38;
    color: #fff;
    border-color: #168b38;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  .blog-card {
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }

  .blog-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .blog-card-content {
    padding: 22px;
  }

  .blog-category {
    color: #168b38;
    font-size: 13px;
    font-weight: 600;
  }

  .blog-date {
    font-size: 13px;
    color: #999;
  }

  .blog-card-content h3 {
    font-size: 19px;
    margin: 12px 0;
  }

  .blog-card-content p {
    color: #666;
    line-height: 1.7;
  }

  .blog-card-content a {
    display: inline-block;
    color: #168b38;
    text-decoration: none;
    font-weight: 600;
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .blog-hero h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 550px) {
    .blog-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "10 Things to Consider Before Buying Online",
    category: "Shopping Tips",
    date: "November 10, 2026",
    image: new1,
    description:
      "Discover important things to consider when shopping online to make better purchasing decisions.",
    slug: "things-to-consider-before-buying-online",
  },
  {
    id: 2,
    title: "How to Choose the Right Product for Your Needs",
    category: "Product Guides",
    date: "November 8, 2026",
    image: new2,
    description:
      "Learn how to compare products, understand specifications, and choose the right option.",
    slug: "how-to-choose-the-right-product",
  },
  {
    id: 3,
    title: "The Latest Trends You Should Know About",
    category: "Lifestyle",
    date: "November 5, 2026",
    image: new1,
    description:
      "Explore some of the latest trends and discover ideas that can improve your everyday life.",
    slug: "latest-trends-you-should-know",
  },
];

function Blog() {
  return (
    <>
      <Header />
      <Wrapper>
        {" "}
        <div className="blog-page">
          <section className="blog-hero">
            <h1>Our Blog</h1>
            <p>
              Discover helpful tips, product guides, shopping inspiration, and
              the latest updates.
            </p>
          </section>

          <section className="blog-container">
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article className="blog-card" key={post.id}>
                  <img src={post.image} alt={post.title} />

                  <div className="blog-card-content">
                    <span className="blog-category">{post.category}</span>

                    <p className="blog-date">{post.date}</p>

                    <h3>{post.title}</h3>

                    <p>{post.description}</p>

                    <a href={`/blog/${post.slug}`}>Read More →</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="">
            <Newsletter />
          </section>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Blog;
