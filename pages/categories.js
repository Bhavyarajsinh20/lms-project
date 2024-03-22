import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";

const Categories = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Categories"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Categories"
      />

      <div className="categories-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-categories-box">
                <img src="/images/categories/categorie1.jpg" alt="image" />

                <div className="content">
                  <h3>Development</h3>
                  <span>10 Courses</span>
                </div>

                <Link href="/courses-1">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-categories-box">
                <img
                  src="/images/courses/4.jpeg"
                  alt="image"
                  style={{ height: "190px" }}
                />

                <div className="content">
                  <h3>Python</h3>
                  <span>20 Courses</span>
                </div>

                <Link href="/courses-1">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-categories-box">
                <img src="/images/categories/categorie3.jpg" alt="image" />

                <div className="content">
                  <h3>IT & Software</h3>
                  <span>15 Courses</span>
                </div>

                <Link href="/courses-1">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-categories-box">
                <img src="/images/categories/categorie4.jpg" alt="image" />

                <div className="content">
                  <h3>Design</h3>
                  <span>11 Courses</span>
                </div>

                <Link href="/courses-1">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-categories-box">
                <img
                  src="/images/courses/7.jpeg"
                  alt="image"
                  style={{ height: "190px" }}
                />

                <div className="content">
                  <h3>Cyber Security</h3>
                  <span>10 Courses</span>
                </div>

                <Link href="/courses-1">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-categories-box">
                <img
                  src="/images/courses/6.png"
                  alt="image"
                  style={{ height: "190px" }}
                />

                <div className="content">
                  <h3>Mongo DB</h3>
                  <span>12 Courses</span>
                </div>

                <Link href="/courses-1">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-categories-box">
                <img
                  src="/images/courses/8.jpeg"
                  alt="image"
                  style={{ height: "190px" }}
                />

                <div className="content">
                  <h3>PHP</h3>
                  <span>05 Courses</span>
                </div>

                <Link href="/courses-1">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-categories-box">
                <img
                  src="/images/courses/9.jpeg"
                  alt="image"
                  style={{ height: "190px" }}
                />

                <div className="content">
                  <h3>SQl</h3>
                  <span>20 Courses</span>
                </div>

                <Link href="/courses-1">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="pagination-area text-center">
                <a href="#" className="prev page-numbers">
                  <i className="bx bx-chevrons-left"></i>
                </a>
                <span className="page-numbers current" aria-current="page">
                  1
                </span>
                <a href="#" className="page-numbers">
                  2
                </a>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="bx bx-chevrons-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubscribeForm />

      <Footer />
    </React.Fragment>
  );
};

export default Categories;
