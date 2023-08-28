import { Button, Col, Form, Input, Row } from "antd"
import styled from "styled-components"
import * as palette from '../../styles/variables';

export const ContactPage = () => {

  const [form] = Form.useForm();

  const { TextArea } = Input;

  return(
    <Container>
      <Row>
        <Col span={12} style={{display: "flex", alignItems: "center"}}>
          <ContentContainer>
            <h2>Contact Us</h2>
            <Form
              form={form}
              initialValues={{
                
              }}
              labelCol={{ span: 24 }}
              // wrapperCol={{xs: { span: 20},}}
              className="contactForm"
              requiredMark={false}
            >
              <FormItems>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter name!',
                    },
                  ]}>
                  <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item
                  label="Company Name"
                  name="company"
                >
                  <Input placeholder="Enter your company name" />
                </Form.Item>
              </FormItems>
              <FormItems>
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      // pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                      // message: 'Please enter correct phone number!',
                    },
                  ]}>
                  <Input placeholder="Enter your phone number" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your email!',
                      type: "email"
                    },
                  ]}>
                  <Input placeholder="Enter your email" />
                </Form.Item>
              </FormItems>
              <FormItemsSubmit>
                <Form.Item label="Message (Optional)" style={{flex: 2}}>
                  <TextArea rows={4} placeholder="Enter your message" style={{height: "auto", resize: "none"}} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" className="primaryBtn" htmlType="submit">
                    Send
                  </Button>
                </Form.Item>
              </FormItemsSubmit>
            </Form>
          </ContentContainer>
        </Col>
        <Col span={12} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <MapSection>
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.673949582022!2d-3.171928484426213!3d51.482498879631045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1dec40d8271b%3A0x76edb0038413ac31!2sBrunel%20House!5e0!3m2!1sen!2sin!4v1678855506735!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </MapSection>
        </Col>
      </Row>
    </Container>
  )
}

const Container = styled.section`
  padding: 20px 20px 40px 40px;
  margin-right: 8%;
  flex: 1;
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 518px;
  margin-right: 20px;
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 45px;
    color: ${palette.PRIMARY_BLUE};
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 28px;
    span {
    font-weight: 600;
    color: ${palette.PRIMARY_BLUE};
    }
  }
  .primaryBtn {
    padding: 8px 50px;
    height: 48px;
  }
  .contactForm {
    .ant-form-item .ant-form-item-label >label {
      font-size: 16px;
      font-weight: 600;
      color: ${palette.PRIMARY_BLUE};
    }
    .ant-input {
      height: 46px;
      background: ${palette.GREY_COLOR};
      border: 1px solid rgba(0, 0, 0, 0.16);
      border-radius: 12px;
      color: ${palette.PRIMARY_BLUE};
      padding: 12px 16px;
      &:focus {
        border: 1px solid ${palette.PRIMARY_COLOR};
      }
    }
  }
`;

const FormItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .ant-form-item {
    width: 50%;
  }
`;

const FormItemsSubmit = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
`;

const MapSection = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
