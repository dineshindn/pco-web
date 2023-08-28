import { Button, Col, Form, Input, Row } from "antd"
import { LeftSection } from "../LeftSection"
import styled from "styled-components"
import * as palette from '../../../styles/variables';
import { checkCustomer } from "../../../utils/services/customers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = ({getUserData}) => {
  console.log(getUserData, "getUserData")

  let navigate = useNavigate();

  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sessionStorage.removeItem('loggedin')
    sessionStorage.removeItem('userId')
  }, [])

  const onFinish = (values) => {
    console.log(values)
    var data = {
      email: values.email
    }
    setLoading(true);
    checkCustomer(
      data,
      (res) => {
        if(res.data) {
          // sessionStorage.setItem('loggedin', true)
          sessionStorage.setItem('user', JSON.stringify(res.data))
        }
        navigate('/signup', {state: {email: data.email}})
        setLoading(false);
      },
      (err) => {
        setLoading(false);
      }
    );
  }

  return(
    <Row>
      <Col span={12}>
        <LeftSection />
      </Col>
      <Col span={12} style={{display: "flex", alignItems: "center"}}>
        <FormWrapper>
          <h2 className="heading">Quotation Generator</h2>
          <p className="helpText">Enter your details below</p>
          <Form
            name="signin"
            form={form}
            onFinish={onFinish}
            requiredMark={false}
            colon={false}
            labelCol={{ span: 24 }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: 'Please enter valid email!',
                },
              ]}
            >
              <Input className="inputField" placeholder="Enter your Email address" />
            </Form.Item>
            <Form.Item style={{marginTop: "48px"}}>
              <Button type="primary" className="primaryBtn" htmlType="submit" style={{height: "46px", width: "160px"}} disabled={loading}>
                Sign-in
              </Button>
            </Form.Item>
          </Form>
        </FormWrapper>
      </Col>
    </Row>
  )
}

const FormWrapper = styled.div`
  padding: 30px 30px 30px 80px;
  width: 100%;
  .ant-form {
    margin-top: 24px;
    max-width: 390px;
  }
  .ant-form-item-label label {
    height: auto;
    font-weight: 700;
    font-size: 16px;
    font-family: ${palette.FONT_FAMILY};
  }
  .heading {
    font-weight: 700;
    font-size: 32px;
    line-height: 45px;
    color: ${palette.PRIMARY_BLUE};
    margin-bottom: 4px;
  }
  .helpText {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: ${palette.PRIMARY_BLUE};
  }
`;
