/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

import PropTypes from "prop-types";

import Container from "./styles/Container";
import FlexContainer from "../FlexContainer";

import { BsPersonCircle } from "react-icons/bs";
import Text from "./styles/Text";
import MessageContainer from "./styles/MessageContainer";
import Button from "../Button";

const CommentCard = ({ name, message, show, email }) => {
  const [showMessage, setShowMessage] = useState(show.show);

  return (
    <Container>
      {showMessage ? (
        <>
          <FlexContainer gap="10px">
            <BsPersonCircle size={45} />
            <FlexContainer column gap="5px">
              <Text dark>{name}</Text>
              <Text>{email}</Text>
            </FlexContainer>
          </FlexContainer>

          <MessageContainer>
            <Text dark>{message}</Text>
          </MessageContainer>
        </>
      ) : (
        <>
          <FlexContainer gap="10px">
            <BsPersonCircle size={45} />
            <FlexContainer column gap="5px">
              <Text dark>{name}</Text>
              <Text>{email}</Text>
            </FlexContainer>
          </FlexContainer>

          <Text alignSelf dark>
            Hurtful comment, to view press the button
          </Text>

          <Button
            onClick={() => {
              setShowMessage(!showMessage);
            }}
            alignSelf
          >
            Show
          </Button>
        </>
      )}
    </Container>
  );
};

CommentCard.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string.isRequired,
  show: PropTypes.object.isRequired,
  email: PropTypes.string,
};

CommentCard.defaultProps = {
  name: "Pepito Lamela",
  email: "pepito.lamela@gmail.com",
};

export default CommentCard;
