import React from "react";

import PropTypes from "prop-types";

import TextArea from "../TextArea";

import Container from "../InputWithLabel/styles/Container";
import Label from "../InputWithLabel/styles/Label";

const TextAreaWithLabel = ({ label, placeholder, onChange, value }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextArea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

TextAreaWithLabel.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextAreaWithLabel;
