import { useEffect, useState } from "react"
import { QuotulatorFlowPage } from "./Quotulator";
import { Signin } from "./SigninPage"
import { Signup } from "./SignupPage";

export const QuotulatorPage = () => {

  const[userDetails, setUserDetails] = useState(null);

  const[showQuotulator, setShowQuotulator] = useState(false)

  const getUserData = (data) => {
    setUserDetails(data)
  }

  const completeSignup = (param) => {
    if(param) {
      setShowQuotulator(true)
    }
  }

  return(
    <div style={{width: "100%", background: "#FFFFFF"}}>
      {
        sessionStorage.getItem('token') ? <QuotulatorFlowPage /> :
        userDetails ? <Signup userDetails={userDetails} completeSignup={completeSignup} /> : <Signin getUserData={getUserData} />
      }
    </div>
  )
}