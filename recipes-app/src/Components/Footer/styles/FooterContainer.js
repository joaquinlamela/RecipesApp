import styled from "styled-components";

const FooterContainer = styled.footer`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 80px 60px;

  a::after {
    content: attr(data-end);
    color: #ff7426;
  }

  a:hover::after {
    content: attr(data-end);
    color: #000000;
  }
`;

export default FooterContainer;
