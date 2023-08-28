import { useEffect, useState } from 'react';
import { Button, Col, Input, InputNumber, Modal, Row, Steps } from 'antd';
import styledComponents from 'styled-components';
import { InputLevel } from './inputLevel';
import { ResultsForm } from './results';
import Logo from "../../images/TextLogo.svg"
import { Link, useNavigate } from 'react-router-dom';
import { getAllSettingsValues, getComplexity, getEstimateLevel, requestQuotation } from '../../utils/services/quotulator';
import { UploadFiles } from './uploadFiles';
import DomainImg from "../../images/quotulator/domain_verification.svg"
import * as palette from '../../styles/variables';
import { useImmer } from 'use-immer';
import { Loader } from '../../components/Loader';
import { FormWrapper, ResultsFormContainer, ResultsList, TotalCostWrapper } from './styles';
import PaymentImg from '../../images/quotulator/payments.svg'

export const Quotulator = () => {

  let navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const [formData, setFormData] = useState(null)

  const [estLevelData, setEstLevelData] = useState([]);

  const [complexityData, setComplexityData] = useState([]);

  const [settingsData, setSettingsData] = useState(null);

  const [savedValues, setSavedValues] = useState(null);

  const [prevStateValues, setPrevStateValues] = useState(null);

  const [loaders, updateLoaders] = useImmer({
    levelLoading: false,
    compLoading: false,
    settLoading: false
  });

  const [complexityObj, setComplexityObj] = useState(null);

  const [estimateLevelObj, setEstimateLevelObj] = useState(null);
  
  const [state, updateState] = useImmer({
    level: 0,
    assemblies: 0,
    sub_assemblies: 0,
    parts: 0,
    estimates: 0,
    cost: 0,
    days: 0
  });

  const [productState, updateProductState] = useImmer({
    description: "",
    part_number: ""
  });

  const [apiLoading, setApiLoading] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    updateLoaders(draft => {
      draft.levelLoading = true
      draft.compLoading = true
      draft.settLoading = true
    });
    getEstimateLevel(
      (successdata) => {
        if(successdata.data) {
          setEstLevelData(successdata.data)
        }
        updateLoaders(draft => {
          draft.levelLoading = false
        });
      },
      error => {
        updateLoaders(draft => {
          draft.levelLoading = false
        });
      }
    )

    getComplexity(
      (successdata) => {
        if(successdata.data) {
          setComplexityData(successdata.data)
        }
        updateLoaders(draft => {
          draft.compLoading = false
        });
      },
      error => {
        updateLoaders(draft => {
          draft.compLoading = false
        });
      }
    )

    getAllSettingsValues(
      (successdata) => {
        if(successdata?.data.length > 0) {
          setSettingsData(successdata.data[0])
        }
        updateLoaders(draft => {
          draft.settLoading = false
        });
      },
      error => {
        updateLoaders(draft => {
          draft.settLoading = false
        });
      }
    )
  }, [])

  const onCalculate = values => {
    const getObj = complexityData.find(item => item.id === parseInt(values.complexity))
    if(getObj) {
      setComplexityObj(getObj ? getObj : null);
      updateState(draft => {
        draft.assemblies = getObj.assemblies
        draft.sub_assemblies = getObj.sub_assemblies
        draft.parts = getObj.no_parts
      });
    }
    setFormData(values)
    setSavedValues(values)
  }

  useEffect(() => {
    if(formData || formData?.level) {
      updateState(draft => {
        draft.level = formData.level;
      });

      const getLevelObj = estLevelData.find(item => item.estimate_level === formData.level)
      if(getLevelObj) {
        setEstimateLevelObj(getLevelObj)
      }

      const getObj = complexityData.find(item => item.id === parseInt(formData.complexity))
      if(getObj) {
        setComplexityObj(getObj ? getObj : null);
        updateState(draft => {
          draft.assemblies = getObj.assemblies
          draft.sub_assemblies = getObj.sub_assemblies
          draft.parts = getObj.no_parts
        });
        let statObj = {
          assemblies: getObj.assemblies,
          sub_assemblies: getObj.sub_assemblies,
          parts: getObj.no_parts
        };
        calculateValues(statObj);
      }
    }
  }, [formData])
  useEffect(() => {
    calculateValues(state)
  }, [state])

  const calculateValues = (paramObj) => {
    if(paramObj && !complexityObj?.response && !estimateLevelObj?.response) {
      let total = 0;
      if(parseInt(paramObj?.assemblies) === 0 && parseInt(paramObj?.sub_assemblies) === 0) {
        total = parseInt(paramObj.parts)
      } else if(parseInt(paramObj?.assemblies) === 0 && parseInt(paramObj?.sub_assemblies) !== 0) {
        total = parseInt(paramObj?.sub_assemblies) + parseInt(paramObj.parts)
      } else {
        total = (parseInt(paramObj.assemblies) + parseInt(paramObj.sub_assemblies)) + (parseInt(paramObj.assemblies) * parseInt(paramObj.sub_assemblies) * parseInt(paramObj.parts))
      }
      console.log(total, "total")

      let totalProcesses  = total * settingsData?.process_component;
      console.log(totalProcesses, "totalProcesses")

      let totalMins = (settingsData?.job_setup * complexityObj?.bom_build_multiplier) + (settingsData?.report_to_client * complexityObj?.bom_build_multiplier) + (settingsData?.build_bom * complexityObj?.bom_build_multiplier) + (total * settingsData?.estimate_setup) + (totalProcesses * settingsData?.estimate_time);

      console.log(totalMins, "totalMins")

      let totalHours = totalMins / 60;
      console.log(totalHours, "totalHours", settingsData)

      let contigencyVal = totalHours * settingsData?.contingency;
      console.log(contigencyVal, 'contigencyVal')

      let subTotal = totalHours + contigencyVal;
      console.log(subTotal, 'subTotal')

      let efficiencyVal = subTotal / settingsData?.efficiency;
      console.log(efficiencyVal, 'efficiencyVal')

      let getLevelObj = estLevelData.find(item => item.estimate_level === formData?.level)
      console.log(estLevelData, formData, "getLevelObj")

      let sellHours = efficiencyVal * getLevelObj?.multiplier;
      console.log(sellHours, 'sellHours')

      let sellPrice = sellHours * settingsData?.rate;
      console.log(sellPrice, 'sellPrice')

      let totalDays = sellHours / 7;
      console.log(totalDays, 'totalDays')

      updateState(draft => {
        draft.estimates = total
        draft.days = Math.ceil(totalDays)
        draft.cost = sellPrice.toFixed(2)
      });

      setPrevStateValues({
        assemblies: paramObj.assemblies,
        sub_assemblies: paramObj.sub_assemblies,
        parts: paramObj.parts,
        estimates: total,
        days: totalDays.toFixed(),
        cost: sellPrice.toFixed(2)
      })

    } else {
      updateState(draft => {
        draft.assemblies = 0
        draft.sub_assemblies = 0
        draft.parts = 0
        draft.estimates = 0
        draft.days = 0
        draft.cost = 0
      });
    }
  }


  const [allFiles, setAllFiles] = useState([])
  const getDocs = (docs) => {
    setAllFiles(docs)
  }

  const [allFileDrawings, setAllFileDrawings] = useState([])
  const getDrawings = (docs) => {
    setAllFileDrawings(docs)
  }

  const reqQuotation = () => {
    const formData1 = new FormData();

    allFiles.length > 0 && allFiles.map((file, index) => {
      formData1.append(`uploadFile`, file.originFileObj);
    });

    allFileDrawings.length > 0 && allFileDrawings.map((file, index) => {
      formData1.append(`drawingFile`, file.originFileObj);
    });

    formData1.append('customer_id', sessionStorage.getItem("userId"));
    formData1.append('estimate_level', formData.level);
    formData1.append('complexity', formData.complexity);
    formData1.append('assemblies', prevStateValues.assemblies);
    formData1.append('sub_assemblies', prevStateValues.sub_assemblies);
    formData1.append('parts', prevStateValues.parts);
    formData1.append('total_work_package', parseInt(prevStateValues.estimates));
    formData1.append('package_cost', parseInt(prevStateValues.cost));
    formData1.append('days', parseInt(prevStateValues.days));
    if(productState.description) {
      formData1.append('description', productState.description);
    }
    if(productState.part_number) {
      formData1.append('part_number', productState.part_number);
    }
  
    setApiLoading(true)

    requestQuotation(
      formData1,
      success => {
        setApiLoading(false)
        showModal();
      },
      errorMessages => {
        setApiLoading(false)
      }
    );
  }

  return(
    <>
      {
        (loaders.levelLoading && loaders.compLoading && loaders.settLoading) ? <Loader /> :
        <div style={{padding: "40px"}}>
          {
            current === 0 &&
            <>
              <Row>
                <Col span={12}>
                  <div className="productInput">
                    <label>Product Description</label>
                    <Input placeholder="Enter product description" value={productState.description}
                      onChange={(e) => {
                        updateProductState(draft => {
                          draft.description = e.target.value
                        });
                      }}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="productInput">
                    <label>Product Number</label>
                    <Input placeholder="Enter product number" value={productState.part_number}
                      onChange={(e) => {
                        updateProductState(draft => {
                          draft.part_number = e.target.value
                        });
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <InputLevel savedValues={savedValues} onCalculate={onCalculate} estimateLevelData={estLevelData} complexityData={complexityData} />
                </Col>
                <Col span={12}>
                  <ResultsFormContainer>
                    <Row className="headerRow">
                      <Col span={10}>
                        <h2>Your Results</h2>
                      </Col>
                      <Col span={14} style={{display: "flex"}}>
                        <h3>Default</h3>
                        <h3 style={{flex: 2}}>Modify</h3>
                        <h3>Result</h3>
                      </Col>
                    </Row>
                    <FormWrapper>
                      <Row>
                        <Col span={10}>
                          <label>Number of Assemblies Per Item</label>
                        </Col>
                        <Col span={14}>
                          <ResultsList>
                            <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                              <InputNumber disabled value={complexityObj?.assemblies} />
                            </div>
                            
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flex: 2}}>
                              <Button shape="circle" className="circleBtn"
                                onClick={() => {
                                  if(state.assemblies > 0) {
                                    updateState(draft => {
                                      draft.assemblies = state.assemblies - 1
                                    });
                                  }
                                }}
                              >-</Button>
                              <span>{state.assemblies}</span>
                              <Button shape="circle" className="circleBtn"
                                onClick={() => {
                                  updateState(draft => {
                                    draft.assemblies = state.assemblies + 1
                                  });
                                }}
                              >+</Button>
                            </div>
                            <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                              <InputNumber
                                min={0}
                                value={state.assemblies}
                                onChange={(val) => {
                                  updateState(draft => {
                                    draft.assemblies = val
                                  });
                                }} />
                            </div>
                          </ResultsList>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={10}>
                          <label>Number of  Sub - Assemblies Per Item</label>
                        </Col>
                        <Col span={14}>
                          <ResultsList>
                            <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                              <InputNumber disabled value={complexityObj?.sub_assemblies} />
                            </div>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flex: 2}}>
                              <Button shape="circle" className="circleBtn"
                                onClick={() => {
                                  if(state.sub_assemblies > 0) {
                                    updateState(draft => {
                                      draft.sub_assemblies = state.sub_assemblies - 1
                                    });
                                  }
                                }}
                              >-</Button>
                              <span>{state.sub_assemblies}</span>
                              <Button shape="circle" className="circleBtn"
                                onClick={() => {
                                  updateState(draft => {
                                    draft.sub_assemblies = state.sub_assemblies + 1
                                  });
                                }}
                              >+</Button>
                            </div>
                            <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                              <InputNumber value={state.sub_assemblies} min={0}
                                onChange={(val) => {
                                  updateState(draft => {
                                    draft.sub_assemblies = val
                                  });
                                }}
                              />
                            </div>
                          </ResultsList>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={10}>
                          <label>Number of Parts Per Sub - Assembly</label>
                        </Col>
                        <Col span={14}>
                          <ResultsList>
                            <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                              <InputNumber disabled value={complexityObj?.no_parts} />
                            </div>
                            
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flex: 2}}>
                              <Button shape="circle" className="circleBtn"
                                onClick={() => {
                                  if(state.parts > 0) {
                                    updateState(draft => {
                                      draft.parts = state.parts - 1
                                    });
                                  }
                                }}
                              >-</Button>
                              <span>{state.parts}</span>
                              <Button shape="circle" className="circleBtn"
                                onClick={() => {
                                  updateState(draft => {
                                    draft.parts = state.parts + 1
                                  });
                                }}
                              >+</Button>
                            </div>
                            <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                              <InputNumber value={state.parts} min={0}
                                onChange={(val) => {
                                  updateState(draft => {
                                    draft.parts = val
                                  });
                                }}
                              />
                            </div>
                          </ResultsList>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={10}>
                          <label>Number of estimates in Work Package</label>
                        </Col>
                        <Col span={14}>
                          <ResultsList>
                            <div style={{flex: 1, visibility: "hidden"}}>
                              <Input disabled />
                            </div>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flex: 2, visibility: "hidden"}}>
                              <Button shape="circle" className="circleBtn">-</Button>
                              <span>0</span>
                              <Button shape="circle" className="circleBtn">+</Button>
                            </div>
                            <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                              <InputNumber disabled value={state.estimates} />
                            </div>
                          </ResultsList>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={10}>
                          <label>Expected work package delivery ( Days )</label>
                        </Col>
                        <Col span={14}>
                          <ResultsList>
                            <div style={{flex: 1, visibility: "hidden"}}>
                              <Input disabled />
                            </div>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flex: 2, visibility: "hidden"}}>
                              <Button shape="circle" className="circleBtn">-</Button>
                              <span>0</span>
                              <Button shape="circle" className="circleBtn">+</Button>
                            </div>
                            <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                              <InputNumber disabled value={state.days} />
                            </div>
                          </ResultsList>
                        </Col>
                      </Row>
                    </FormWrapper>
                    <TotalCostWrapper>
                      <img src={PaymentImg} alt="cost" />
                      <h5>Work package cost</h5>
                      <h4>€ {state.cost !== "NaN" ? state.cost : 0}</h4>
                    </TotalCostWrapper>
                  </ResultsFormContainer>
                  {/* <ResultsForm formData={savedValues} estimateLevelData={estLevelData} complexityData={complexityData} settingsData={settingsData} prevValues={prevStateValues} getOutput={(data) => setPrevStateValues(data)} /> */}
                </Col>
              </Row>
            </>
          }
          {
            current === 1 && <UploadFiles getDocs={getDocs} getDrawings={getDrawings} />
          }
          <BottomContainer>
            {/* <Link to="/" className="logoWrapper">
              <img src={Logo} alt="logo" />
            </Link> */}
            <div className='buttonNext'>
              {
                current === 0 &&
                <Button type="primary" className='primaryBtn' style={{height: "46px", padding: "0px 40px"}} onClick={() => setCurrent(current+1)} disabled={!formData?.level || !formData?.complexity || complexityObj?.response || estimateLevelObj?.response}>Next</Button>
              }
              {
                current === 1 &&
                <div style={{display: "flex", alignItems: "center", gap: "12px", justifyContent: "center"}}>
                  <Button className="outlinedBtn" style={{height: "46px", padding: "0px 40px"}} onClick={() => setCurrent(current-1)}>Back</Button>
                  <Button type="primary" className='primaryBtn' style={{height: "46px", padding: "0px 40px"}} onClick={reqQuotation} disabled={apiLoading}>Request Quotation</Button>
                </div>
              }
            </div>
            <div style={{flex: 1, position: "absolute", right: 10}}>
              <Steps
                className='estimateSteps'
                current={current}
                items={[
                  {
                    title: '',
                    icon: <span>1</span>
                  },
                  {
                    title: '',
                    icon: <span>2</span>
                  }
                ]}
              />
            </div>
          </BottomContainer>
          <Modal
            title=""
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            closable={false}
            centered
            maskClosable={false}
            width="578px"
          >
            <ModalContentWrapper>
              <img src={DomainImg} alt="thanks" />
              <h2>Thanks for sharing the information</h2>
              <p>We will get back to you as soon as possible with your quotation</p>
              <Button type="primary" className='primaryBtn' onClick={() => {sessionStorage.removeItem('token'); sessionStorage.removeItem('userId'); navigate("/")}}>Home</Button>
            </ModalContentWrapper>
          </Modal>
        </div>
      }
    </>
  )
}

const DefaultValue = styledComponents.span`
padding: 4px 11px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
color: rgba(0, 0, 0, 0.5);
background-color: rgba(0, 0, 0, 0.04);
border: 1px solid #d9d9d9;
box-shadow: none;
cursor: not-allowed;
min-width: 50px;
`;

const BottomContainer = styledComponents.div`
  display: flex;
  align-items: center;
  padding: 40px 28px 16px;
  width: 100%;
  position: relative;
  .logoWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    flex: 1;
    img {
      width: 280px;
    }
  }
  .buttonNext {
    flex: 1;
    text-align: center;
  }
`;

const ModalContentWrapper = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  img {
    width: 100px;
    height: 100px;
  }
  h2 {
    font-family: ${palette.FONT_FAMILY};
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #1D273E;
    text-align: center;
    margin-bottom: 12px;
  }
  p {
    font-family: ${palette.FONT_FAMILY};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #949494;
    text-align: center;
    margin-bottom: 30px;
  }
  .ant-btn {
    width: 166px;
    height: 47px;
  }
`;
