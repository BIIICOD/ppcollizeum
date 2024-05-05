import FirstSection from "../../components/FirstSection/FirstSection";
import WhySection from "../../components/WhySection/WhySection";
import {MainPageWrapper} from "./style";
import GamingServices from "../../components/GamingServices/GamingServices";

const MainPage = () => {
  return(
    <MainPageWrapper>
      <FirstSection/>
      <WhySection/>
        <GamingServices/>
    </MainPageWrapper>
  )
}

export default MainPage