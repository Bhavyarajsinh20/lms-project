import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../components/_App/Footer";

const CoursesGrid01 = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Data Science"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Data Science"
      />
      <div className="courses-area courses-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <a className="d-block image">
                      <img
                        src="\images\courses\4.jpeg"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    {/* <img
                      src="/images/user6.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Alex Morgan</span> */}
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <a>Python</a>
                    </Link>
                  </h3>

                  <p>
                    Tune for Highest Efficiency at Scale using Advanced
                    Tools-OpenMP, tbb4py, mpi4py, more. Program multiple devices
                    using Data Parallel Python (DPPy) without rewriting CPU
                    code. Near-Native Performance. Scalable Performance. Data
                    Parallel Extensions.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="price">$39</div>
                      {/* <i className="flaticon-people"></i> 145 Students */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <a className="d-block image">
                      <img
                        src="/images/courses/R.png"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center"></div>

                  <h3>
                    <Link href="/single-courses-1">
                      <a>R Programming</a>
                    </Link>
                  </h3>

                  <p>
                    R is popular among data analysts and research scientists as
                    it helps them import and clean data and perform effective
                    quantitative analyses. Moreover, R coding was among the top
                    five programming languages of the year as of August 2021.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="price ">$49</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <a className="d-block image">
                      <img
                        src="/images/courses/9.jpeg"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="/single-courses-1">
                      <a>SQl</a>
                    </Link>
                  </h3>

                  <p>
                    Keywords are words that have significance in SQL. Certain
                    keywords, such as SELECT , DELETE , or BIGINT , are reserved
                    and require special treatment for use as identifiers such as
                    table and column names. This may also be true for the names
                    of built-in functions.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="price">$99</div>
                      {/* <i className="flaticon-people"></i> 440 Students */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <a className="d-block image">
                      <img
                        src="/images/courses/s2.png"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    {/* <img
                      src="/images/user6.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Alex Morgan</span> */}
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <a>Scala</a>
                    </Link>
                  </h3>

                  <p>
                    Due to its high scalability, Scala programming language is
                    used for managing websites of companies that receive a lot
                    of traffic like Twitter, Netflix, and LinkedIn. Therefore,
                    if you wish to work as a developer or programmer at top
                    companies that process large amounts of data, it is
                    essential to learn Scala.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="price">$39</div>
                      {/* <i className="flaticon-people"></i> 145 Students */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <a className="d-block image">
                      <img
                        src="/images/courses/julia.png"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center"></div>

                  <h3>
                    <Link href="/single-courses-1">
                      <a>Julia Programing</a>
                    </Link>
                  </h3>

                  <p>
                    Overall, Julia is an excellent choice for those who want to
                    maximize the results of their machine learning and data
                    science projects. It is a language for a range of
                    applications because of its robust libraries, simple syntax,
                    and fast speeds.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="price">$49</div>
                      {/* <i className="flaticon-people"></i> 100 Students */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link href="/single-courses-1">
                    <a className="d-block image">
                      <img
                        src="/images/courses/java.jpg"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    {/* <img
                      src="/images/user4.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>James Anderson</span> */}
                  </div>

                  <h3>
                    <Link href="/single-courses-1">
                      <a>Java</a>
                    </Link>
                  </h3>

                  <p>
                    Having proficiency in major OOPs concepts like polymorphism,
                    inheritance, encapsulation and abstraction is beneficial for
                    this job role. Java build tools: A Java developer works with
                    various tools when completing software development tasks.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="price">$99</div>
                      {/* <i className="flaticon-people"></i> 440 Students */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CoursesGrid01;
