import { Button, Col, Input, InputNumber, Row } from "antd"
import { FormWrapper, ResultsFormContainer, ResultsList, TotalCostWrapper } from "./styles"
import PaymentImg from '../../images/quotulator/payments.svg'
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export const ResultsForm = ({formData, estimateLevelData, complexityData, settingsData, prevValues, getOutput}) => {

  const [complexityObj, setComplexityObj] = useState(null);
  
  const [state, updateState] = useImmer({
    level: 0,
    assemblies: 0,
    sub_assemblies: 0,
    parts: 0,
    estimates: 0,
    cost: 0,
    days: 0
  });

  useEffect(() => {
    if(formData || formData?.level) {
      updateState(draft => {
        draft.level = formData.level;
      });
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
    if(paramObj && (formData?.complexity !== "complex_system" && formData?.level !== 3)) {
      let total = (parseInt(paramObj.assemblies) + parseInt(paramObj.sub_assemblies)) + (parseInt(paramObj.assemblies) * parseInt(paramObj.sub_assemblies) * parseInt(paramObj.parts))
      console.log(total, "total")

      let totalProcesses  = total * settingsData?.process_component;
      console.log(totalProcesses, "totalProcesses")

      let totalMins = (settingsData?.job_setup * 0) + (settingsData?.report_to_client * 0) + (settingsData?.build_bom * 0) + (total * settingsData?.estimate_setup) + (totalProcesses * settingsData?.estimate_time);
      console.log(totalMins, "totalMins")

      let totalHours = totalMins / 60;
      console.log(totalHours, "totalHours", settingsData)

      let contigencyVal = totalHours * parseInt(settingsData?.contingency);
      console.log(contigencyVal, 'contigencyVal')

      let subTotal = totalHours + contigencyVal;
      console.log(subTotal, 'subTotal')

      let efficiencyVal = subTotal / settingsData?.efficiency;
      console.log(efficiencyVal, 'efficiencyVal')

      let getLevelObj = estimateLevelData.find(item => item.id === formData?.level)
      console.log(estimateLevelData, formData, "getLevelObj")

      let sellHours = efficiencyVal * parseInt(getLevelObj?.multiplier);
      console.log(sellHours, 'sellHours')

      let sellPrice = sellHours * settingsData?.rate;
      console.log(sellPrice, 'sellPrice')

      let totalDays = sellHours / 7;
      console.log(totalDays, 'totalDays')

      updateState(draft => {
        draft.estimates = total
        draft.days = totalDays.toFixed()
        draft.cost = sellPrice.toFixed(2)
      });

      getOutput({
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

  return(
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
            <label>Number of Assemblies Per item</label>
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
            <label>Tell number of estimates work package</label>
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
  )
}