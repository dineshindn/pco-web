import { Button, Col, Form, Input, Row } from "antd"
import { LeftSection } from "../LeftSection"
import styled from "styled-components"
import * as palette from '../../../styles/variables';
import { createCustomer, getCustomerById } from "../../../utils/services/customers";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Signup = ({completeSignup}) => {

  const navigate = useNavigate();

  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const [userDetails, setUserDetails] = useState(null);

  const location = useLocation();
  console.log(location.state, "location")

  useEffect(() => {
    if(sessionStorage.getItem('user')) {
      let userData = JSON.parse(sessionStorage.getItem('user'));
      console.log(userData, "user data")
      setUserDetails(userData)
      form.setFieldsValue({
        name: userData.name,
        email: userData.email,
        company_name: userData.company_name,
        mobile: userData.mobile
      });
      // let userId = sessionStorage.getItem('userId');
      // getCustomerById(
      //   userId,
      //   (res) => {
      //     if(res?.data?.data) {
      //       setUserDetails(res.data.data[0])
      //       let userData = res.data.data[0];
      //       form.setFieldsValue({
      //         name: userData.name,
      //         email: userData.email,
      //         company_name: userData.company_name,
      //         mobile: userData.mobile
      //       });
      //     }
      //   },
      //   (err) => {
      //   }
      // );
    }
  }, [])

  useEffect(() => {
    if(location?.state?.email) {
      form.setFieldsValue({
        email: location?.state?.email,
      });
    }
  }, [location])

  const onFinish = (values) => {
    console.log(values)
    // completeSignup(true)
    var data = {
      email: values.email,
      name: values.name,
      company_name: values.company_name,
      mobile: values.mobile
    }
    setLoading(true);
    createCustomer(
      data,
      (res) => {
        console.log(res, "res")
        sessionStorage.setItem('token', res?.token?.accessToken)
        sessionStorage.setItem('userId', res.data?.id)
        setLoading(false);
        sessionStorage.removeItem("user")
        navigate('/quotulator')
        
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
            initialValues={{
              email: userDetails?.email,
              name: userDetails?.name,
              company_name: userDetails?.company_name,
              mobile: userDetails?.mobile
            }}
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
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter your name!',
                },
              ]}
            >
              <Input className="inputField" placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="Company Name"
              name="company_name"
              rules={[
                {
                  required: true,
                  message: 'Please enter your company name!',
                },
              ]}
            >
              <Input className="inputField" placeholder="Enter your company name" />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="mobile"
              rules={[
                {
                  required: true,
                  pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                  message: 'Please enter valid phone number!',
                },
              ]}
            >
              <Input className="inputField" autocomplete="off" placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item style={{marginTop: "48px"}}>
              <Button type="primary" className="primaryBtn" htmlType="submit" style={{height: "46px", width: "160px"}} disabled={loading}>
                Next
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
