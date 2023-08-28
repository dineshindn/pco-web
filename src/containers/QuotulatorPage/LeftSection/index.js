import { Link } from "react-router-dom"
import Logo from '../../../images/quotulator/Logo.svg'
import BgImage from '../../../images/quotulator/BgImage.png'
import styled from "styled-components"
import * as palette from '../../../styles/variables';
import { Carousel } from 'antd';

export const LeftSection = () => {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return(
    <Container>
      <LogoWrapper>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </LogoWrapper>
      <CarouselContainer>
        <Carousel afterChange={onChange} autoplay>
          <CarouselContent>
            <h3>Concept Target Setting</h3>
            <p>In the absence of a finalised design, we make informed assumptions on materials and manufacturing processes to generate the cost estimates against limited data.</p>
          </CarouselContent>
          <CarouselContent>
            <h3>Final Design Estimation</h3>
            <p>We capture the design at production intent and generate an accurate estimation of the “Should Cost”. This represents the anticipated supply price.</p>
          </CarouselContent>
          <CarouselContent>
            <h3>Cost At Supplier Condition</h3>
            <p>We undertake a thorough examination, in detail, of the supplier facility and costs. We establish the true supplier cost to help deliver the best possible purchase price.</p>
          </CarouselContent>
        </Carousel>
      </CarouselContainer>
      <BackgroundImg>
        <img src={BgImage} alt="background" />
      </BackgroundImg>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  padding: 40px 70px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  a {
    display: block;
    img {
      width: 280px;
    }
  }
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const CarouselContainer = styled.div`
  padding-bottom: 40px;
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  .slick-slide > div {
    margin: 30px 70px 50px;
  }
  .slick-dots {
    justify-content: flex-start;
    left: 70px;
    li.slick-active {
      width: 16px;
    }
    li button {
      width: 7px;
      height: 7px;
      border-radius: 100%;
    }
  }
`;

const CarouselContent = styled.div`
  h3 {
    font-family: ${palette.FONT_FAMILY};
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 45px;
    color: ${palette.WHITE_COLOR};
  }
  p {
    font-family: ${palette.FONT_FAMILY};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${palette.WHITE_COLOR};
  }
`;
