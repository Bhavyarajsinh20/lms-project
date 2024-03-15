import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/eLearningSchool/MainBanner";
import Partner from "../components/eLearningSchool/Partner";
import Features from "../components/eLearningSchool/Features";
import AboutUs from "../components/eLearningSchool/AboutUs";
import PopularCourses from "../components/eLearningSchool/PopularCourses";
import FeedbackSliderWithFunFacts from "../components/eLearningSchool/FeedbackSliderWithFunFacts";
import GetInstantCourses from "../components/eLearningSchool/GetInstantCourses";
import LatestNews from "../components/Common/LatestNews";
import ViewAllCourses from "../components/eLearningSchool/ViewAllCourses";
import AffordableCertification from "../components/eLearningSchool/AffordableCertification";
import Footer from "../components/_App/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <section class="jumbotron text-center p-10" style={{ padding: "100px" }}>
        <div class="container">
          <h1 class="jumbotron-heading">Welcome to eLMS</h1>
          <p class="lead text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>
            <a href="#" class="default-btn my-2">
              Explore courses
            </a>
          </p>
        </div>
      </section>
      {/* <MainBanner />
			<Partner />
			<Features />
			<AboutUs />
			<PopularCourses />
			<FeedbackSliderWithFunFacts />
			<GetInstantCourses />
			<LatestNews />
			<ViewAllCourses />
			<AffordableCertification /> */}
      <Footer />
    </>
  );
};

export default Index;
