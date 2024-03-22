import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <a className="logo">
                <img src="/images/eLMS.png" alt="logo" />
              </a>

              <p>
                The e Learning Management System (eLMS) is the new home for your
                learning needs outside of the classroom. An interactive
                educational app, engaging social networking platform, and
                personal organizer all in one the eLMS has your student life
                covered!
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-1">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="contact">
                    <a>Contact us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Categories</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/courses-2">
                    <a>Web Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/courses-3">
                    <a>Game Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/courses-4">
                    <a>App Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/courses-5">
                    <a>Data Science</a>
                  </Link>
                </li>
                <li>
                  <Link href="/courses-6">
                    <a>Software Testing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/courses-7">
                    <a>No-Code Development</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>About</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  24x7 Developers, South bopal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
