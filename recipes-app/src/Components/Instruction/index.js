import React from "react";
import PropTypes from "prop-types";

import Container from "./styles/Container";
import StepNumber from "./styles/StepNumber";
import StepDescription from "./styles/StepDescription";

const Instruction = ({ instruction }) => {
  return (
    <Container>
      <StepNumber>{instruction.number}</StepNumber>
      <StepDescription>{instruction.step}</StepDescription>
    </Container>
  );
};

Instruction.propTypes = {
  instruction: PropTypes.object,
};

export default Instruction;
