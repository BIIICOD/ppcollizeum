import FirstSection from "../../components/FirstSection/FirstSection";
import WhySection from "../../components/WhySection/WhySection";
import {MainPageWrapper} from "./style";

const MainPage = () => {
  return(
    <MainPageWrapper>
      <FirstSection/>
      <WhySection/>
    </MainPageWrapper>
  )
}

export default MainPage