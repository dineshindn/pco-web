import { Col, Row } from "antd"
import styled from "styled-components"
import * as palette from '../../styles/variables';
import accurate from '../../images/accurate.png'
import rapid from '../../images/rapid.png'
import costEffective from '../../images/costeffective.png'
import freeup from '../../images/freeup.png'
import ideal from '../../images/ideal.png'
import formalprocess from '../../images/formalprocess.png'

export const Competency = () => {
  return (
    <Container>
      <ContentContainer>
        <h2>Why PCO</h2>
        <p>Our Cost Estimates are delivered by a dedicated team of professional cost engineers, each with extensive experience of most major manufacturing industries</p>
        <ul className="listWrapper">
          <li>
            <img src={accurate} alt="accurate" />
            Accurate and detailed breakdown of costs
          </li>
          <li>
            <img src={rapid} alt="rapid" />
            Rapid turnaround
          </li>
          <li>
            <img src={costEffective} alt="costEffective" />
            More cost effective than in-house estimation
          </li>
          <li>
            <img src={freeup} alt="freeup" />
            Free up scarce internal resource
          </li>
          <li>
            <img src={ideal} alt="ideal" />
            Ideal for project work
          </li>
          <li>
            <img src={formalprocess} alt="formalprocess" />
            Formal process for consistent quality
          </li>
        </ul>
      </ContentContainer>
      {/* <Row>
        <Col span={11} style={{ display: "flex", alignItems: "center" }}>
          <ContentContainer>
            <h2>Why PCO Cost Estimation</h2>
            <p>Our Cost Estimates are delivered by a dedicated team of professional cost engineers, each with extensive experience of most major manufacturing industries</p>
            <ul className="listWrapper">
              <li>Accurate and detailed breakdown of costs</li>
              <li>Rapid turnaround</li>
              <li>More cost effective than in-house estimation</li>
              <li>Free up scarce internal resource</li>
              <li>Ideal for project work</li>
              <li>Formal process for consistent quality</li>
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
  margin-right: 3%;
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 640px;
  margin-left: auto;
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: ${palette.WHITE_COLOR};
    margin-bottom: 16px;
  }
  p {
    font-family: ${palette.FONT_FAMILY};
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: ${palette.WHITE_COLOR};
  }
  .listWrapper {
    margin-top: 20px;
    li {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-bottom: 10px;
      font-family: ${palette.FONT_FAMILY};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 38px;
      color: ${palette.WHITE_COLOR};
    }
    li img {
      width: 42px;
      height: 42px;
    }
  }
`;
