import React, { useEffect } from "react";
import Lottie from "lottie-web";
import PropTypes from "prop-types";
import FlexContainer from "../FlexContainer";

import Data from "../../Images/lottie/loading.json";

import LoadingIcon from "./styles/LoadingIcon";

export default function Loading({ id }) {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById(id),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Data,
    });
  }, []);

  return (
    <FlexContainer
      middle="xs"
      center="xs"
      grow="xs"
      aria-live="polite"
      aria-busy="true"
      vSpread
    >
      <LoadingIcon id={id} />
    </FlexContainer>
  );
}

Loading.propTypes = {
  id: PropTypes.string.isRequired,
};
