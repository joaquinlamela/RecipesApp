import React, { useState } from "react";

import PropTypes from "prop-types";

import TextArea from "../TextArea";

import Container from "../InputWithLabel/styles/Container";
import Label from "../InputWithLabel/styles/Label";
import { isEmpty } from "lodash";
import ErrorMessage from "../InputWithLabel/styles/ErrorMessage";

const TextAreaWithLabel = ({ label, placeholder, onChange, value }) => {
  const [hasError, setHasError] = useState(false);

  const validateField = (e) => {
    const { value } = e.target;
    if (isEmpty(value.trim())) {
      setHasError(true);
      onChange("");
    } else {
      onChange(value);
      setHasError(false);
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <TextArea
        placeholder={placeholder}
        value={value}
        onChange={validateField}
        onBlur={validateField}
        error={hasError}
      />
      {hasError && <ErrorMessage>This field is required.</ErrorMessage>}
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
