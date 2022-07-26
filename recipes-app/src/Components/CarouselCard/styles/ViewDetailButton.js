import styled from "styled-components";
import { MEDIA } from "../../../layout";
import { Link } from "react-router-dom";

const ViewDetailButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  border-radius: 16px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #ffffff;
  border: none;
  text-decoration: none;
  svg {
    font-size: 17px;
    margin-left: 20px;
  }
  margin-left: auto;
  cursor: pointer;
  :hover {
    background: #ff7426;
  }

  ${MEDIA.xs`
    width: 140px;
    height: 50px;
  `}

  ${MEDIA.tb`
    width: 140px;
    height: 50px;
  `}

  ${MEDIA.lg`
    width: 160px;
  `}

  ${MEDIA.xxl`
    width: 180px;
    height: 60px;
  `}
`;

export default ViewDetailButton;
