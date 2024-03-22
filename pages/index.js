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

      <div className="courses-details-image mt-3">
        <img
          src="images\events\events-details.jpg"
          alt="image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <section class="jumbotron text-center p-10" style={{ padding: "100px" }}>
        <div class="container">
          <h1 class="jumbotron-heading">Welcome to eLMS</h1>
          <p class="lead text-muted">
            Unlock Your Potential with Our Diverse Range of Courses Join a
            Vibrant Community of Learners and Experts Experience Interactive and
            Engaging Online Education Empower Yourself with Flexible Learning
            Options Explore Cutting-Edge Resources and Technologies Benefit from
            Personalized Support and Guidance Transform Your Career or Expand
            Your Knowledge Base Embark on a Journey of Lifelong Learning with
            ELMS Welcome to a World of Endless Possibilities in Education
          </p>
          <p>
            <a href="courses-1" class="default-btn my-2">
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
