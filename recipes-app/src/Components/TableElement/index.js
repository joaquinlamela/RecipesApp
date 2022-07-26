import React from "react";
import PropTypes from "prop-types";

import Container from "./styles/Container";
import Variable from "./styles/Variable";
import Value from "./styles/Value";

const TableElement = ({ item }) => {
  return (
    <Container>
      <Variable>{item.variable}</Variable>
      <Value>{item.value}</Value>
    </Container>
  );
};

TableElement.propTypes = {
  item: PropTypes.object,
};

export default TableElement;
