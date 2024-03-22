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
        pageTitle="No-Code Development"
        homePageUrl="/"
        homePageText="Home"
        activePageText="No-Code Development"
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
                        src="\images\courses\vp.jpg"
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
                      <a>Visual programming</a>
                    </Link>
                  </h3>

                  <p>
                    Visual programming revolutionizes software development by
                    offering a graphical, code-free approach to creating
                    applications. This method simplifies the development
                    process, making it accessible and efficient for both
                    seasoned developers and newcomers.
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
                        src="/images/courses/figma.png"
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
                      <a>Figma</a>
                    </Link>
                  </h3>

                  <p>
                    The design tool for frontend developers. Figma is a modern,
                    streamlined design tool that makes the developer handoff
                    process smooth and seamless. Developers now have better
                    access to the designs and have the ability to extract
                    information about typography, redlines, colors, measurement
                    and more.
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
                        src="/images/courses/xl.jpg"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="/single-courses-1">
                      <a>Spreadsheet</a>
                    </Link>
                  </h3>

                  <p>
                    Excel formulas enable you to perform calculations such as
                    addition, subtraction, multiplication, and division. In
                    addition to these, you can find out averages and calculate
                    percentages in excel for a range of cells, manipulate date
                    and time values, and do a lot more
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
                        src="\images\courses\HTML.jpg"
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
                      <a>HTML-5</a>
                    </Link>
                  </h3>

                  <p>
                    PowHTML5 elements are the building blocks of a webpage. Each
                    element is represented by a tag. An opening tag marks the
                    start of an element, and a closing tag marks its end. Most
                    elements have both opening and closing tags, while some
                    elements are self-closing.
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
                        src="/images/courses/css.jpg"
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
                    CSS3, also known as Cascading Style Sheets Level 3, is a
                    more advanced version of CSS and the successor of CSS2. CSS3
                    is used for the same thing as CSS, namely to style web pages
                    and make them more attractive and user-friendly.
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
                        src="/images/courses/js.png"
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
                      <a>Java Script</a>
                    </Link>
                  </h3>

                  <p>
                    JavaScript (JS) is a cross-platform, object-oriented
                    programming language used by developers to make web pages
                    interactive. It allows developers to create dynamically
                    updating content, use animations, pop-up menus, clickable
                    buttons, control multimedia, etc
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
