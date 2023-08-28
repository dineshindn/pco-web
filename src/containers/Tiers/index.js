import { Col, Row, Collapse } from "antd"
import styled from "styled-components"
import * as palette from '../../styles/variables';
import BannerImg from '../../images/TiersBanner.png'
import { ReactComponent as ArrowDown } from '../../images/ArrowDown.svg'
import CTSImg from '../../images/cts.png'
import FDEImg from '../../images/fde.png'
import CASImg from '../../images/costatsupplier.png'

export const Tiers = () => {

  const { Panel } = Collapse;

  return (
    <Container>
      <ContentContainer>
        <h2>3 Tiers of Cost Estimation</h2>
        <p>PCO Offers 3 Tiers of Cost Estimate, depending on the intended use</p>
        <TiersList>
          <TiersListItem>
            <img src={CTSImg} alt="Concept Target Setting" />
            <h3>Concept Target Setting</h3>
            <p>In the absence of a finalised design, we make informed assumptions on materials and manufacturing processes to generate the cost estimates against limited data.</p>
          </TiersListItem>
          <TiersListItem>
            <img src={FDEImg} alt="Final Design Estimation" />
            <h3>Final Design Estimation</h3>
            <p>We capture the design at production intent and generate an accurate estimation of the “Should Cost”. This represents the anticipated supply price.</p>
          </TiersListItem>
          <TiersListItem>
            <img src={CASImg} alt="Cost at Supplier Condition" />
            <h3>Cost at Supplier Condition</h3>
            <p>We undertake a thorough examination, in detail, of the supplier facility and costs. We establish the true supplier cost to help deliver the best possible purchase price.</p>
          </TiersListItem>
        </TiersList>
      </ContentContainer>
      {/* <Row>
        <Col span={11} style={{ display: "flex", alignItems: "center" }}>
          <ContentContainer>
            <h2>PCO Offers 3 Tiers of Cost Estimate, depending on the intended use</h2>
            <Collapse
              accordion
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => <ArrowDown style={{ transition: "transform .3s", transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }} />}
              style={{
                background: "transparent"
              }}
              expandIconPosition="end"
            >
              <Panel header="Concept Target Setting" key="1" className="collapsePanel">
                <p className="content">In the absence of a finalised design, we make informed assumptions on materials and manufacturing processes to generate the cost estimates against limited data.</p>
              </Panel>
              <Panel header="Final Design Estimation" key="2" className="collapsePanel">
                <p className="content">We capture the design at production intent and generate an accurate estimation of the “Should Cost”. This represents the anticipated supply price.</p>
              </Panel>
              <Panel header="Cost at Supplier Condition" key="3" className="collapsePanel">
                <p className="content">We undertake a thorough examination, in detail, of the supplier facility and costs. We establish the true supplier cost to help deliver the best possible purchase price.</p>
              </Panel>
            </Collapse>
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
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: ${palette.WHITE_COLOR};
    margin-bottom: 24px;
    text-align: center;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: ${palette.WHITE_COLOR};
    margin-bottom: 20px;
    text-align: center;
  }
  .ant-collapse-item-active {
    .ant-collapse-header {
      padding-bottom: 10px !important;
    }
  }
  .collapsePanel {
    margin-bottom: 16px;
    background: ${palette.WHITE_COLOR};
    border-radius: 12px !important;
    border: none;
    .ant-collapse-header {
      padding: 24px 28px;
      font-family: ${palette.FONT_FAMILY};
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      color: ${palette.COD_GRAY};
    }
    .ant-collapse-content-box {
      padding-left: 28px;
      padding-right: 28px;
      padding-bottom: 24px;
    }
    .content {
      font-family: ${palette.FONT_FAMILY};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${palette.TEXT_COLOR};
      text-align: justify;
    }
  }
`;

const TiersList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  grid-auto-rows: 1fr;
  padding-top: 8px;
`;

const TiersListItem = styled.div`
  border: 1px solid DEDEDE;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #2B3038;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 12px;
    text-align: center;
  }
  p {
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
    color: #2B3038;
    text-align: center;
  }
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
`;
