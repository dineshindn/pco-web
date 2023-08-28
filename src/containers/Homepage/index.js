import { Button, Col, Row } from "antd"
import styled from "styled-components"
import * as palette from '../../styles/variables';
import BannerImg from '../../images/HomeImg.png'
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

  let navigate = useNavigate();

  return (
    <Container>
      <ContentContainer>
        <h2>Your Professional Partner For Product Costing</h2>
        <p>Where accurate product pricing meets focused planning to deliver informed decision making</p>
        {/* <p>Where accurate product pricing meets <span>effortless</span> planning and informed <span>decision-making</span></p> */}
        <Button type="primary" className="primaryBtn" onClick={() => { sessionStorage.removeItem('token'); sessionStorage.removeItem('userId'); navigate('/signin') }}>Get Estimate Now</Button>
      </ContentContainer>
      <div>
        {/* <img src={BannerImg} alt="home" /> */}
      </div>
      {/* <Row>
        <Col span={11} style={{ display: "flex", alignItems: "center" }}>
          <ContentContainer>
            <h2>Your Professional Partner for Product Costing</h2>
            <p>Where accurate product pricing meets focused planning to deliver informed decision making</p>
            <Button type="primary" className="primaryBtn" onClick={() => { sessionStorage.removeItem('token'); sessionStorage.removeItem('userId'); navigate('/signin') }}>Get estimate now</Button>
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
  max-width: 875px;
  h2 {
    font-weight: 600;
    font-size: 62px;
    line-height: 80px;
    color: ${palette.WHITE_COLOR};
    margin-bottom: 16px;
  }
  p {
    max-width: 650px;
    margin-bottom: 50px;
    font-weight: 400;
    font-size: 22px;
    line-height: 34px;
    text-transform: capitalize;
    span {
    font-weight: 600;
    color: ${palette.WHITE_COLOR};
    }
  }
  .primaryBtn {
    padding: 12px 26px;
  }
`;
