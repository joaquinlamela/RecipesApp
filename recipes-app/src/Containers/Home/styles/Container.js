import styled from "styled-components";
import { MEDIA } from "../../../layout";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: hidden;
  padding-top: 40px;

  ${(props) => props.isSmallScreen && `flex-direction: column; gap: 20px;`}

  .swiper {
    ${MEDIA.tb`
      width: 380px;
      height: 880px;
    `}

    ${MEDIA.md`
      width: 510px;
      height: 880px;
    `}

    ${MEDIA.lg`
      width: 725px;
      height: 800px;
    `}

    ${MEDIA.xl`
      width: 1000px;
      height: 570px;
    `}

    ${MEDIA.xxl`
      width: 1200px;
      height: 640px;
    `}
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    border-radius: 48px;

    ${MEDIA.xl`
      flex-direction: row;
    `}
  }

  .swiper-slide {
    background-color: #e7fafe;
  }
`;

export default Container;
