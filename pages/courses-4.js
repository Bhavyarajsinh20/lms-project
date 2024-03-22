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
        pageTitle="App Development Courses"
        homePageUrl="/"
        homePageText="Home"
        activePageText="App Development Courses"
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
                        src="\images\courses\iosd.jpg"
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
                      <a>IOS</a>
                    </Link>
                  </h3>

                  <p>
                    Objective C and Swift are well-famous for meeting the
                    minimum expectations for quality iOS applications. Objective
                    C is an age-old language, and Swift is an around
                    2-decade-old language known for safe and modern app
                    development with several features.
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
                        src="/images/courses/kotlin.png"
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
                      <a>Css-3</a>
                    </Link>
                  </h3>

                  <p>
                    Kotlin is already used by over 60% of professional Android
                    developers, and 95% of the top 1,000 Android apps contain
                    Kotlin code. We provide first-class support for Kotlin
                    across our tools and resources
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
                        src="/images/courses/react.jpg"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="/single-courses-1">
                      <a>React Native framework</a>
                    </Link>
                  </h3>

                  <p>
                    With the React Native framework, developers don't need to
                    write different codes for iOS and Android platforms. It uses
                    JavaScript, which is compatible with both platforms. This
                    unique feature of code reuse can improve efficiency and make
                    the app development process faster and easier. It can also
                    help reduce costs.
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
                        src="/images/courses/Df.png"
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
                      <a>Google Flutter & Dart</a>
                    </Link>
                  </h3>

                  <p>
                    Dart is a general-purpose programming language that can be
                    used for a wide range of applications, including web
                    development, server-side programming, and mobile app
                    development. Flutter, on the other hand, is a UI SDK
                    specifically designed for building high-performance,
                    cross-platform mobile apps.
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
                        src="/images/courses/sul.jpg"
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
                      <a>SwiftUI</a>
                    </Link>
                  </h3>

                  <p>
                    SwiftUI helps you build great-looking apps across all Apple
                    platforms with the power of Swift — and surprisingly little
                    code. You can bring even better experiences to everyone, on
                    any Apple device, using just one set of tools and APIs.
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
