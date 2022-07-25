import React from "react";
import PropTypes from "prop-types";

import { HiClock } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { GiForkKnifeSpoon } from "react-icons/gi";

import Container from "./styles/Container";
import DetailContainer from "./styles/DetailContainer";
import Value from "./styles/Value";
import Title from "./styles/Title";

import { ICONS_TYPES } from "../../utils/constants";

const Toggle = ({ icon, title, value }) => {
  const getIcon = () => {
    if (icon === ICONS_TYPES.like) return <AiFillLike />;

    if (icon === ICONS_TYPES.cook) return <GiForkKnifeSpoon />;

    return <HiClock />;
  };

  return (
    <Container>
      {getIcon()}
      <DetailContainer>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </DetailContainer>
    </Container>
  );
};

Toggle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};

export default Toggle;
