import { Button, Carousel, Col, Form, Modal, Radio, Row, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import { complexity, estimateLevel } from "../../data/quotulator";
import { FormContainer, SliderImg } from "./styles";
import { RightOutlined } from '@ant-design/icons';
import {ReactComponent as ConceptImg} from '../../images/quotulator/request_quote.svg'
import {ReactComponent as ConceptImg2} from '../../images/quotulator/ads_click.svg'
import {ReactComponent as ConceptImg3} from '../../images/quotulator/draw.svg'
import Icon from '@ant-design/icons';

export const InputLevel = (props) => {

  const [form] = Form.useForm();

  const carouselRef = useRef();

  const [estimateLevelValue, setEstimateLevelValue] = useState("");

  const [complexityObj, setComplexityObj] = useState(null);

  useEffect(() => {
    if(props.savedValues) {
      var elementPos = props.complexityData.findIndex(obj => obj.id === parseInt(props.savedValues.complexity))
      carouselRef.current.goTo(elementPos)
      const getObj = props.complexityData.find(item => item.id === parseInt(props.savedValues.complexity))
      if(getObj) {
        setComplexityObj(getObj ? getObj : null);
      }
      // if(props.onCalculate) {
      //   let obj = {
      //     level: props.savedValues.level,
      //     complexity: parseInt(props.savedValues.complexity)
      //   };
      //   props.onCalculate(obj);
      // }
    }
  }, [props.savedValues])

  const onChange = (e) => {
    form.setFieldsValue({ level: e.target.value });
    setEstimateLevelValue(e.target.value)

    const getObj = props.estimateLevelData.find(item => item.estimate_level === e.target.value)
    if(getObj) {
      if(getObj.response) {
        Modal.info({
          title: getObj.response,
          content: "gerard@productcostoptimisation.co.uk",
          onOk() {},
          className: "enquireModal",
          centered: true
        });
      }
    }

    // if(e.target.value === 3) {
    //   Modal.info({
    //     title: 'Please enquire directly',
    //     onOk() {},
    //     className: "enquireModal",
    //     centered: true
    //   });
    // }
  }

  const complexityChange = (e) => {
    console.log(e.target.value)
    form.setFieldsValue({ complexity: e.target.value });
    var elementPos = props.complexityData.findIndex(obj => obj.id === e.target.value)
    console.log(elementPos, "elementPos")
// var objectFound = array[elementPos];
    carouselRef.current.goTo(elementPos)
    const getObj = props.complexityData.find(item => item.id === e.target.value)
    if(getObj) {
      form.setFieldsValue({ assemblies: getObj.assemblies, sub_assemblies: getObj.sub_assemblies, parts: getObj.parts });
      setComplexityObj(getObj ? getObj : null);
      console.log(getObj, "bwejhewihf")
      if(getObj.response) {
        Modal.info({
          title: getObj.response,
          content: "gerard@productcostoptimisation.co.uk",
          onOk() {},
          className: "enquireModal",
          centered: true
        });
      }
    }
    // if(value === "complex_system") {
    //   form.setFieldsValue({ estimates: "", days: "", cost: "", assemblies: "", sub_assemblies: "", parts: "" });
    //   setComplexityObj(null)
    // }
  }

  const onFieldsChange = (changedField, allFields) => {
    console.log(form.getFieldValue('level'))

    if(props.onCalculate) {
      let obj = {
        level: form.getFieldValue('level'),
        complexity: form.getFieldValue('complexity'),
      };
      props.onCalculate(obj);
    }

    // if(changedField.length > 0) {
    //   console.log(changedField[0].name, "name")
    //   if(changedField[0].value === "") {
    //     let name = changedField[0].name[0];
    //     console.log(complexityObj[name], "complexityObj[name].value()")
    //     form.setFieldsValue({ [name]: complexityObj[name] });
    //   }
    //   calculateValues();
    // }
  };
 
  const onFinish = (values) => {
    console.log('Success:', values);
    if(props.onCalculate) {
      props.onCalculate(values);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <FormContainer>
      <Form
        name="basic"
        form={form}
        layout="vertical"
        style={{
          // margin: "30px auto 0px",
          width: "100%",
        }}
        initialValues={{
          level: props.savedValues ? props.savedValues.level : 0,
          complexity: props.savedValues ? parseInt(props.savedValues.complexity) : 0
        }}
        onFieldsChange={onFieldsChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          label="Required Estimate Level *"
          name="level"
          className="inputFormItem"
          rules={[
            {
              required: true,
              message: "Please select estimate level"
            }
          ]}>
          <Radio.Group onChange={onChange} className="radioLevelBtn">
            {
              props?.estimateLevelData.map((item, i) =>
                <Radio.Button value={item.estimate_level} key={i}>
                  <span style={{display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px"}}>
                    <Icon component={i === 0 ? ConceptImg : i === 1 ? ConceptImg2 : ConceptImg3} className="radioIcon" />
                    {item.name}
                  </span>
                </Radio.Button>
              )
            }
          </Radio.Group>
        </Form.Item>
        <Row style={{alignItems: "center"}}>
          <Col span={12}>
            <Form.Item label="Complexity & Scope *" name="complexity" className="inputFormItem" style={{marginTop: "30px"}}
              rules={[
                {
                  required: true,
                  message: "Please select complexity"
                }
              ]}
            >
              <Radio.Group onChange={complexityChange} className="radioGrpBtn">
                <Space direction="vertical" style={{gap: 0}}>
                  {
                    props?.complexityData.map((item, i) =>
                      <Radio value={item.id} key={i}>{item.complexity_name}</Radio>
                    )
                  }
                </Space>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <div>
              <Carousel ref={carouselRef} dots={false} draggable={false} swipe={false} style={{border: "1px solid #DBE2F1", borderRadius: "8px"}}>
                {
                  complexityObj && props?.complexityData.map((item, i) =>
                    <SliderImg key={i}>
                      {
                        item.s3_url && <span><img src={item.s3_url} alt={item.complexity_name} /></span>
                      }
                    </SliderImg>
                  )
                }
              </Carousel>
            </div>
          </Col>
        </Row>
        {/* <Form.Item className="calculateBtn">
          <Button htmlType="submit" icon={<RightOutlined />} disabled={!estimateLevelValue || complexityObj === null}>
            Calculate
          </Button>
        </Form.Item> */}
      </Form>
    </FormContainer>
  )
};