import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Footer, Navbar, StickyNav } from './components/navigation';
import { Competency } from './containers/Competency';
import { HomePage } from './containers/Homepage';
import { Methodology } from './containers/Methodology';
import { PerksOfEstimation } from './containers/PerksOfEstimation';
import { Services } from './containers/Services';
import styled from "styled-components"
import * as palette from './styles/variables';
import { GetEstimatePage } from './containers/GetEstimate';
import { ContactPage } from './containers/Contact';
import { Tiers } from './containers/Tiers';
import { QuotulatorPage } from './containers/QuotulatorPage';
import { useEffect } from 'react';
import { Signin } from './containers/QuotulatorPage/SigninPage';
import { Signup } from './containers/QuotulatorPage/SignupPage';
import { UnprotectedRouteLayout } from './navigation/UnProtectedRouteLayout';
import { ProtectedRouteLayout } from './navigation/ProtectedRouteLayout';

import BannerImg from './images/HomeImg.png'
import ServicesImg from './images/Services.png'
import BenefitsImg from './images/benefits.png'
import WhyPcoImg from './images/whyPco.png'
import MethodologyImg from './images/MethodologyBanner.png'
import TiersImg from './images/tiers.png'

import ChevronRight from './images/ChevronRight.png'
import ChevronLeft from './images/ChevronLeft.png'
import { Button } from 'antd';

const App = () => {

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(location, "location")
    if (document.getElementById("root") && (location?.pathname?.includes("quotulator") || location?.pathname?.includes("signin") || location?.pathname?.includes("signup"))) {
      document.getElementById("root").style.padding = "0px";
    }
    if (document.getElementById("mainContainer") && location?.pathname?.includes("quotulator")) {
      document.getElementById("mainContainer").style.alignItems = "flex-start";
    }

    if (document.getElementById("mainContainer")) {
      if (location?.pathname?.includes("services")) {
        document.getElementById("mainContainer").style.background = `url(${ServicesImg})`;
      } else if (location?.pathname === "/") {
        document.getElementById("mainContainer").style.background = `url(${BannerImg})`;
      } else if (location?.pathname?.includes("benefits")) {
        document.getElementById("mainContainer").style.background = `url(${BenefitsImg})`;
      } else if (location?.pathname?.includes("why-pco")) {
        document.getElementById("mainContainer").style.background = `url(${WhyPcoImg})`;
      } else if (location?.pathname?.includes("methodology")) {
        document.getElementById("mainContainer").style.background = `url(${MethodologyImg})`;
      } else if (location?.pathname?.includes("tiers")) {
        document.getElementById("mainContainer").style.background = `url(${TiersImg})`;
      } else {
        document.getElementById("mainContainer").style.background = "none";
      }
    }
  }, [location])

  const gotoPrev = () => {
    if (location?.pathname?.includes("services")) {
      navigate("/")
    } else if (location?.pathname?.includes("benefits")) {
      navigate("/services")
    } else if (location?.pathname?.includes("why-pco")) {
      navigate("/benefits")
    } else if (location?.pathname?.includes("methodology")) {
      navigate("/why-pco")
    } else if (location?.pathname?.includes("tiers")) {
      navigate("/methodology")
    }
  }

  const gotoNext = () => {
    if (location?.pathname === "/") {
      navigate("/services")
    } else if (location?.pathname?.includes("services")) {
      navigate("/benefits")
    } else if (location?.pathname?.includes("benefits")) {
      navigate("/why-pco")
    } else if (location?.pathname?.includes("why-pco")) {
      navigate("/methodology")
    } else if (location?.pathname?.includes("methodology")) {
      navigate("/tiers")
    } else if (location?.pathname?.includes("tiers")) {
      navigate("/get-estimate")
    }
  }

  return (
    <>
      {(location?.pathname?.includes("signin") || location?.pathname?.includes("signup")) ?
        <Routes>
          <Route element={<UnprotectedRouteLayout />}>
            <Route element={<Signin />} path="/signin" />
            <Route element={<Signup />} path="/signup" />
          </Route>
          {/* <Route element={<ProtectedRouteLayout />}>
            <Route element={<QuotulatorPage />} path="/quotulator" />
          </Route> */}
        </Routes> :
        <AppWrapper>
          <Navbar />
          <main className='mainWrapper' id="mainContainer" style={{ paddingTop: "0px" }}>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<Services />} path="/services" />
              <Route element={<PerksOfEstimation />} path="/benefits" />
              <Route element={<Methodology />} path="/methodology" />
              <Route element={<Competency />} path="/why-pco" />
              <Route element={<Tiers />} path="/tiers" />
              <Route element={<GetEstimatePage />} path="/get-estimate" />
              <Route element={<ContactPage />} path="/contact-us" />
              <Route element={<ProtectedRouteLayout />}>
                <Route element={<QuotulatorPage />} path="/quotulator" />
              </Route>
            </Routes>
            {
              // !location?.pathname?.includes("quotulator") && <StickyNav />
            }
            {
              !location?.pathname?.includes("quotulator") &&
              <div className='bottomNavigator'>
                {
                  location?.pathname !== "/" &&
                  <Button onClick={gotoPrev}>
                    <img src={ChevronLeft} alt="chevronLeft" />
                  </Button>
                }
                <Button onClick={gotoNext}>
                  <img src={ChevronRight} alt="chevronRight" />
                </Button>
              </div>
            }

          </main>
          {
            location?.pathname?.includes("contactUs") && <Footer />
          }
        </AppWrapper>
      }
    </>
  );
}

export default App;

const AppWrapper = styled.div`
  border-radius: 8px;
  background: ${palette.APP_BACKGROUND_COLOR};
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .mainWrapper {
    position: relative;
    height: calc(100% + 102px);
    display: flex;
  }
`;
