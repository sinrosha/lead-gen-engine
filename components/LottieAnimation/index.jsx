import React from "react";
import Lottie from "lottie-react";
import Link from "next/link"
import PropTypes from "prop-types";

const LottieAnimation = ({ animationJson }) => {
  return (
    <div className="mx-auto max-w-screen-md text-center h-screen flex items-center justify-center flex-col">
      <Lottie animationData={animationJson} />
      <Link href="/">
        <a  className="font-medium inline-block md:font-semibold md:font-base px-3 py-1 md:px-6 md:py-2 rounded-md bg-pink text-white font-sen">
          Go to Homepage
        </a>
      </Link>
    </div>
  );
};

LottieAnimation.propTypes = {
  heading: PropTypes.string,
  animationJson: PropTypes.object,
};

export default LottieAnimation;
