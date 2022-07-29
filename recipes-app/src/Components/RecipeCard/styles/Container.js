import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: transparent;
  width: 290px;
  height: 320px;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  align-items: center;
  text-decoration: none;

  :hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background: #f9f8fa;
  }
`;

export default Container;
