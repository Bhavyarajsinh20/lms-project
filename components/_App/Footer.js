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
              <Link href="/">
                <a className="logo">
                  <img src="/images/eLMS.png" alt="logo" />
                </a>
              </Link>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
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
                  <Link href="/courses-1">
                    <a>Contact us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Resources</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="#">
                    <a>Demo Link</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Demo Link 1</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Demo Link 2</a>
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
