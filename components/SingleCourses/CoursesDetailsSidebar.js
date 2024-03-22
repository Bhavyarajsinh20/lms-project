import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const CoursesDetailsSidebar = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      {/* If you want to change the video need to update videoID */}
      {/* <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      /> */}

      <div className="courses-details-info mt-5">
        <div className="image">
          <Link href="#play-video">
            <a
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
              className="link-btn popup-youtube"
            ></a>
          </Link>
        </div>

        <ul className="info">
          <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-tag"></i> Price
              </span>
              $49
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-teacher"></i> Instructor
              </span>
              Sarah Taylor
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-time"></i> Duration
              </span>
              7 weeks
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-distance-learning"></i> Videos
              </span>
              25
            </div>
          </li>

          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-lock"></i> Access
              </span>
              Lifetime
            </div>
          </li>
        </ul>

        <div className="btn-box">
          <Link href="/cart">
            <a className="default-btn" href="LoginForm">
              Add to Cart
            </a>
          </Link>
          <Link href="#">
            <a className="default-btn">Buy Now</a>
          </Link>
        </div>

        <div className="courses-share">
          <div className="share-info">
            <span>
              Share This Course <i className="flaticon-share"></i>
            </span>

            <ul className="social-link">
              <li>
                <a
                  href="https://www.facebook.com/login/"
                  className="d-block"
                  target="_blank"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/i/flow/login"
                  className="d-block"
                  target="_blank"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  className="d-block"
                  target="_blank"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/login"
                  className="d-block"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoursesDetailsSidebar;
