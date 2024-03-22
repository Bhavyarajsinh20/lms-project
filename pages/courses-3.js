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
        pageTitle="Game Development Courses"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Game Development Courses"
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
                        src="\images\courses\unity.jpg"
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
                      <a>Unity</a>
                    </Link>
                  </h3>

                  <p>
                    Created in 2005 by the American company Unity Technologies,
                    the Unity game engine allows you to create applications that
                    run on more than 25 different platforms: PCs, consoles,
                    smartphones, and others. When discussing the best game
                    engine, it's important to consider accessibility for all
                    levels of developers and users.
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
                        src="/images/courses/gm.png"
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
                      <a>GameMaker Studio-2</a>
                    </Link>
                  </h3>

                  <p>
                    GameMaker Studio is relatively easy to learn compared to
                    other game engiens like Unity or Unreal, as you can make a
                    game without very much code or scripting. However, the games
                    made in GameMaker are geneallly not as complex as with other
                    game engines.
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
                        src="/images/courses/vr.jpg"
                        alt="image"
                        style={{ width: "450px", height: "260px" }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="/single-courses-1">
                      <a>VR Game</a>
                    </Link>
                  </h3>

                  <p>
                    VR game development is the creation of games played using
                    virtual reality hardware. Most VR games require a headset,
                    which simulates three-dimensional reality through
                    stereoscopic displays. Through sensors, these headsets can
                    track players' positions and eye movements.
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
                        src="/images/courses/gd.jpg"
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
                      <a>GDevlop</a>
                    </Link>
                  </h3>

                  <p>
                    It will provide you with knowledge about programming,
                    algorithms and software creation processes. These game
                    development courses offer you the technical abilities
                    required for the creation of in-game features. They also
                    give you the opportunity to specialise in related courses or
                    subjects.
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
                        src="/images/courses/ue.png"
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
                      <a>Unreal Engine</a>
                    </Link>
                  </h3>

                  <p>
                    The Unreal Engine is a powerful game engine that is widely
                    used for developing video games of all sizes and genres. It
                    is known for its high-fidelity graphics and is also used in
                    various industries for real-time 3D visualization, virtual
                    production, and simulation.
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
                        src="/images/courses/coco.jpg"
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
                      <a>cocos2d-x </a>
                    </Link>
                  </h3>

                  <p>
                    It is written in C++ and provides bindings for various
                    programming languages, including C++, C#, Lua, and
                    JavaScript. The framework offers a wide range of features,
                    including physics, particle systems, skeletal animations,
                    tile maps, and others. Cocos2d was first released in 2008,
                    and was originally written in Python.
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
