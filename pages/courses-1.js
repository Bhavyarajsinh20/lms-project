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
        pageTitle="All Courses"
        homePageUrl="/"
        homePageText="Home"
        activePageText="All Courses"
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
                        src="\images\courses\React(1).jpg"
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
                      <a>React+JS</a>
                    </Link>
                  </h3>

                  <p>
                    Powerful React JS UI — Enjoy smooth design-to-development
                    handoff with our ready-to-use Kendo UI kits for Figma. Take
                    full advantage of React's virtual DOM & enjoy the
                    performance perks of a native kit.
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
                        src="/images/courses/c.png"
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
                      <a>C Programing</a>
                    </Link>
                  </h3>

                  <p>
                    Keywords in C refer to a set of reserved words with
                    predefined meanings that are used to write programs in the C
                    programming language. These keywords cannot be used as
                    identifiers or variable names, as they have a specific
                    function within the language.
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
                        src="/images/courses/c++.jpeg"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="/single-courses-1">
                      <a>C++ Programing</a>
                    </Link>
                  </h3>

                  <p>
                    C++ is a powerful language. In C++, we can write structured
                    programs and object-oriented programs also. C++ is a
                    superset of C and therefore most constructs of C are legal
                    in C++ with their meaning unchanged. However, there are some
                    exceptions and additions.
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
                        src="/images/courses/8.jpeg"
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
                      <a>PHP</a>
                    </Link>
                  </h3>

                  <p>
                    LWhat is PHP (Hypertext Preprocessor)? PHP (Hypertext
                    Processor) is a general-purpose scripting language and
                    interpreter that is freely available and widely used for web
                    development.
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
                        src="/images/courses/laravel.png"
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
                      <a>Laravel</a>
                    </Link>
                  </h3>

                  <p>
                    Laravel has useful built-in features like the Artisan
                    command-line interface (CLI), native authentication and
                    model-view-controller (MVC) architecture. These features
                    make the framework easy to use and are the main reason for
                    its popularity.
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
                        src="/images/courses/4.jpeg"
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
                        src="/images/courses/5.jpeg"
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
                    <Link href="/single-courses-1 ">
                      <a>Node JS</a>
                    </Link>
                  </h3>

                  <p>
                    Node. js (Node) is an Open Source, cross-platform runtime
                    environment for executing JavaScript code. Node is used
                    extensively for server-side programming, making it possible
                    for developers to use JavaScript for client-side and
                    server-side code without needing to learn an additional
                    language.
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
                        src="/images/courses/6.png"
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
                      <a>Mongo DB</a>
                    </Link>
                  </h3>

                  <p>
                    MongoDB is a non-relational document database that provides
                    support for JSON-like storage. The MongoDB database has a
                    flexible data model that enables you to store unstructured
                    data, and it provides full indexing support, and replication
                    with rich and intuitive APIs.
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
                        src="/images/courses/9.jpeg"
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
                    <Link href="/courses-3">
                      <a>SQL</a>
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
