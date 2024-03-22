import React from "react";
import Link from "next/link";

const PremiumAccess = () => {
  return (
    <div className="premium-access-area bg-fef8ef ptb-100">
      <div className="container">
        <div className="premium-access-content">
          <span className="sub-title">Go at your own pace</span>
          <h2>Give their limitless potential unlimited access</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link href="/membership-levels">
            <a className="default-btn">
              <i className="flaticon-user"></i> Give Premium Access
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumAccess;
