import React from "react";

import PropTypes from "prop-types";

import Input from "../Input";

import Container from "./styles/Container";
import Label from "./styles/Label";

const InputWithLabel = ({ label, inputType, placeholder, onChange, value }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

InputWithLabel.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default InputWithLabel;
