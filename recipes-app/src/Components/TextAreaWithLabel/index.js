import React from "react";

import PropTypes from "prop-types";

import TextArea from "../TextArea";

import Container from "../InputWithLabel/styles/Container";
import Label from "../InputWithLabel/styles/Label";

const TextAreaWithLabel = ({ label, placeholder }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextArea placeholder={placeholder} />
    </Container>
  );
};

TextAreaWithLabel.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default TextAreaWithLabel;
