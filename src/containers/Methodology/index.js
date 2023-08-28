import { Col, Row } from "antd"
import styled from "styled-components"
import * as palette from '../../styles/variables';
import SampleComponentFile from "../../files/Sample_Component_Estimate.xlsx"
import SampleAssemblyFile from "../../files/Sample_Assembly_Estimate.zip"
import DownloadIcon from '../../images/downloadicon.png'
import DownloadDarkIcon from '../../images/downloadblack.png'
import TickIcon from '../../images/tick.png'

export const Methodology = () => {
  return (
    <Container>
      <ContentContainer>
        <h2>Methodology & Tools</h2>
        <p>
          The PCO “tool of choice” is Costing 360. This is a cloud based platform for both creating detailed component cost estimates and managing the cost data.
        </p>
        <div className="listCont">
          <h4>The system provides</h4>
          <ul className="listWrapper">
            <li>
              <img src={TickIcon} alt="tick" />
              Component costs
            </li>
            <li>
              <img src={TickIcon} alt="tick" />
              Assembly & Sub Assembly costs
            </li>
            <li>
              <img src={TickIcon} alt="tick" />
              Structured costed bills of materials
            </li>
            <li>
              <img src={TickIcon} alt="tick" />
              Estimates can readily be switched between multiple country locations and multiple supply sources
            </li>
            <li>
              <img src={TickIcon} alt="tick" />
              Output in standard QAF Format
            </li>
          </ul>
          <DownloadButtons>
            <a href={SampleComponentFile} download className="bgButton">
              <img src={DownloadIcon} alt="download" />
              <span>Download a sample Component estimate</span>
            </a>
            <a href={SampleAssemblyFile} download className="outButton">
              <img src={DownloadDarkIcon} alt="download" />
              <span>Download a sample Assembly estimate</span>
            </a>
          </DownloadButtons>
        </div>
      </ContentContainer>
      {/* <Row>
        <Col span={11} style={{display: "flex", alignItems: "center"}}>
          <ContentContainer>
            <h2>Methodology & Tools</h2>
            <p style={{textAlign: "justify"}}>
              The PCO “tool of choice” is Costing 360. This is a cloud based platform for both creating detailed component cost estimates and managing the cost data.
            </p>
            <div>
              <h4>The system provides;</h4>
              <ul className="listWrapper">
                <li>Component costs</li>
                <li>Assembly & Sub Assembly costs</li>
                <li>Structured costed bills of materials</li>
                <li>Estimates can readily be switched between multiple country locations and multiple supply sources</li>
                <li>Output in standard QAF Format</li>
              </ul>
            </div>
          </ContentContainer>
        </Col>
        <Col span={13} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div>
            <img src={BannerImg} alt="home" />
            <DownloadButtons>
              <a href={SampleComponentFile} download>
                <img src={DownloadIcon} alt="download" />
                <span>Download a sample Component estimate</span>
              </a>
              <a href={SampleAssemblyFile} download>
                <img src={DownloadIcon} alt="download" />
                <span>Download a sample Assembly estimate</span>
              </a>
            </DownloadButtons>
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
  max-width: 820px;
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: ${palette.WHITE_COLOR};
    margin-bottom: 20px;
  }
  h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: ${palette.WHITE_COLOR};
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: ${palette.WHITE_COLOR};
  }
  .listCont {
    border: 1px solid #D9D9D9;
    padding: 20px 24px;
    border-radius: 5px;
    margin-top: 30px;
  }
  .listWrapper {
    margin-top: 14px;
    li {
      font-family: ${palette.FONT_FAMILY};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${palette.WHITE_COLOR};
      display: flex;
      gap: 12px;
      padding-bottom: 12px;
      img {
        width: 18px;
        height: 16px;
        margin-top: 4px;
      }
    }
  }
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin: 16px 0px 0px;
  a {
    text-decoration: none;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    text-align: center;
    font-family: ${palette.FONT_FAMILY} !important;
    font-weight: 500 !important;
    font-size: 14px !important;
    line-height: 18px;
    flex: 1;
    height: 49px;
    text-transform: capitalize;
    img {
      width: 14px;
      height: 12px;
      margin-right: 16px;
    }
  }
  .bgButton {
    border: 1px solid ${palette.PRIMARY_COLOR};
    color: ${palette.WHITE_COLOR} !important;
    background: ${palette.PRIMARY_COLOR};
    &:hover, &:active, &:focus {
      color: ${palette.WHITE_COLOR} !important;
    }
  }
  .outButton {
    border: 1px solid ${palette.WHITE_COLOR};
    color: ${palette.DARK_BLUE} !important;
    background: ${palette.WHITE_COLOR};
    &:hover, &:active, &:focus {
      color: ${palette.DARK_BLUE} !important;
    }
  }
`;
