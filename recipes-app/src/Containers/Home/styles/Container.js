import styled from "styled-components";
import { MEDIA } from "../../../layout";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow-y: hidden;
  padding-top: 40px;

  .swiper {
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
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    border-radius: 48px;
  }

  .swiper-slide {
    background-color: #e7fafe;
  }
`;

export default Container;
