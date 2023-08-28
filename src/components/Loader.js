import styled from "styled-components"
import * as palette from '../styles/variables';
import LoaderImg from "../images/loader.svg"

export const Loader = () => {
  return(
    <LoaderWrapper>
      <img src={LoaderImg} alt="loader" />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 50px;
    height: 50px;
  }
`;
