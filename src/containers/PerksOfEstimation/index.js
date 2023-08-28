import { Col, Row } from "antd"
import styled from "styled-components"
import * as palette from '../../styles/variables';
import BannerImg from '../../images/perksOfEst.png'

export const PerksOfEstimation = () => {
  return (
    <Container>
      <ContentContainer>
        <h2>Benefits of Cost Estimation</h2>
        <BenefitsList>
          <BenefitsListItem>
            <h3>01</h3>
            <p>Understand exactly what your purchased components should cost</p>
          </BenefitsListItem>
          <BenefitsListItem>
            <h3>02</h3>
            <p>Understand what your own products should cost… at each stage of the design</p>
          </BenefitsListItem>
          <BenefitsListItem>
            <h3>03</h3>
            <p>Compare the cost of each design option… Select the most cost effective solution</p>
          </BenefitsListItem>
          <BenefitsListItem>
            <h3>04</h3>
            <p>Design your new products to budget</p>
          </BenefitsListItem>
          <BenefitsListItem>
            <h3>05</h3>
            <p>Get the facts for Value Based price negotiations</p>
          </BenefitsListItem>
        </BenefitsList>
      </ContentContainer>
      {/* <Row>
        <Col span={11} style={{ display: "flex", alignItems: "center" }}>
          <ContentContainer>
            <h2>Benefits of Cost Estimation</h2>
            <ul className="listWrapper">
              <li>Understand exactly what your purchased components should cost</li>
              <li>Understand what your own products should cost…… at each stage of the design</li>
              <li>Compare the cost of each design option …. Select the most cost effective solution</li>
              <li>Design your new products to budget</li>
              <li>Get the facts for Value Based price negotiations</li>
            </ul>
          </ContentContainer>
        </Col>
        <Col span={13} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div>
            <img src={BannerImg} alt="home" />
          </div>
        </Col>
      </Row> */}
    </Container>
  )
}

const Container = styled.section`
  padding: 60px 20px 40px 66px;
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: ${palette.WHITE_COLOR};
    margin-bottom: 16px;
  }
  .listWrapper {
    font-family: ${palette.FONT_FAMILY};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 34px;
    color: ${palette.TEXT_COLOR};
    margin-left: 24px;
    list-style: inherit;
    li {
      padding: 3px 0px;
    }
  }
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  grid-auto-rows: 1fr;
`;

const BenefitsListItem = styled.div`
  border: 1px solid #DEDEDE;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(9px);
  padding: 30px 25px;
  h3 {
    color: #DE4949;
    font-size: 60px;
    line-height: 70px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
    color: #2B3038;
  }
`;
