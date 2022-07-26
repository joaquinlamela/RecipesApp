import React from "react";
import PropTypes from "prop-types";

import Container from "./styles/Container";
import Title from "./styles/Title";
import Footer from "./styles/Footer";
import TableElement from "../TableElement";

const Table = ({ items, tableTitle, tableFooter }) => {
  return (
    <Container>
      <Title>{tableTitle}</Title>

      {items.map((item) => (
        <TableElement item={item} />
      ))}

      <Footer>{tableFooter}</Footer>
    </Container>
  );
};

Table.propTypes = {
  items: PropTypes.array,
  tableTitle: PropTypes.string,
  tableFooter: PropTypes.string,
};

export default Table;
