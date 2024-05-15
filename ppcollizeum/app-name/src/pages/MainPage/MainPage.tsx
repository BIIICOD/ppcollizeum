import FirstSection from "../../components/FirstSection/FirstSection";
import WhySection from "../../components/WhySection/WhySection";
import {MainPageWrapper} from "./style";
import GamingServices from "../../components/GamingServices/GamingServices";
import MapSection from "../../components/MapSection/MapSection";
import FeedbackSection from "../../components/FeedbackSection/FeedbackSection";

const MainPage = () => {
  return(
    <MainPageWrapper>
      <FirstSection/>
      <WhySection/>
        <GamingServices/>
        <MapSection/>
        <FeedbackSection/>
    </MainPageWrapper>
  )
}

export default MainPage