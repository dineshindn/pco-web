import { Col, Row, Collapse } from "antd"
import styled from "styled-components"
import * as palette from '../../styles/variables';
import BannerImg from '../../images/ServicesBanner.png'
import { ReactComponent as ArrowDown } from '../../images/ArrowDown.svg'
import CostEstimationImg from '../../images/costEstimation.png'
import PurchaseSupportImg from '../../images/purchaseSupport.png'
import CostConsultancyImg from '../../images/costConsultancy.png'

export const Services = () => {

  const { Panel } = Collapse;

  return (
    <Container>
      <ContentContainer>
        <h2>PCO Services</h2>
        <ServicesList>
          <ServicesListItem>
            <span className="icon">
              <img src={CostEstimationImg} alt="Product Cost Estimation" />
            </span>
            <div>
              <h3>Product Cost Estimation</h3>
              <p className="content">Using a worldwide database of costs combined with the latest software tools, we produce detailed estimates of the cost of production for a vast range of manufactured items.</p>
            </div>
          </ServicesListItem>
          <ServicesListItem>
            <span className="icon">
              <img src={PurchaseSupportImg} alt="Product Purchasing Support" />
            </span>
            <div>
              <h3>Product Purchasing Support</h3>
              <p className="content">The cost estimate is the starting point for purchasing your components. We support the buyer throughout the price negotiations to obtain the best outcome for our clients.</p>
            </div>
          </ServicesListItem>
          <ServicesListItem>
            <span className="icon">
              <img src={CostConsultancyImg} alt="Cost Consultancy" />
            </span>
            <div>
              <h3>Cost Consultancy</h3>
              <p className="content">We offer full BOM Cost Management. From the component cost estimate, through engineering design optimisation and supplier negotiations to a final costed BOM meeting the business case.</p>
            </div>
          </ServicesListItem>
        </ServicesList>
      </ContentContainer>
      {/* <Row>
        <Col span={11} style={{display: "flex", alignItems: "center"}}>
          <ContentContainer>
            <h2>PCO Services</h2>
            <Collapse
              accordion
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => <ArrowDown style={{transition: "transform .3s", transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }} />}
              style={{
                background: "transparent"
              }}
              expandIconPosition="end"
            >
              <Panel header="Product Cost Estimation" key="1" className="collapsePanel">
                <p className="content">Using a worldwide database of costs combined with the latest software tools, we produce detailed estimates of the cost of production for a vast range of manufactured items.</p>
              </Panel>
              <Panel header="Product Purchasing Support" key="2" className="collapsePanel">
                <p className="content">The cost estimate is the starting point for purchasing your components. We support the buyer throughout the price negotiations to obtain the best outcome for our clients</p>
              </Panel>
              <Panel header="Cost Consultancy" key="3" className="collapsePanel">
                <p className="content">We offer full BOM Cost Management. From the component cost estimate, through engineering design optimisation and supplier negotiations to a final costed BOM meeting the business case.</p>
              </Panel>
            </Collapse>
          </ContentContainer>
        </Col>
        <Col span={13} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
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
  max-width: 620px;
  width: 100%;
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: ${palette.DARK_BLUE};
    margin-bottom: 28px;
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

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const ServicesListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  h3 {
    font-family: ${palette.FONT_FAMILY};
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${palette.DARK_BLUE};
    margin-bottom: 4px;
  }
  .content {
    font-family: ${palette.FONT_FAMILY};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${palette.DARK_BLUE};
  }
  .icon img {
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
