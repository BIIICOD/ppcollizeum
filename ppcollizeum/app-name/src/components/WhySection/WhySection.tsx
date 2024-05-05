import {
  LeftImage,
  MiniText,
  RedText,
  RightImage,
  SecondSectionWrapper,
  Text,
  WhyCardWrapper,
  WhyTextWrapper
} from "./style";
import WhyFirstPhoto from '../../images/DevicePhoto.png'
import WhySecondPhoto from '../../images/OurFamilyPhoto.png'
import WhyThirdPhoto from '../../images/GamingEventPhoto.png'
import {ReactComponent as WhyIcon} from "../../icons/WhyIcon.svg";

const WhySection = () => {
  return(
    <SecondSectionWrapper>
      <Text>
        Why GameZone?
      </Text>
      <MiniText>
        GameZone offers an exclusive gaming experience with top-tier
        equipment and a friendly, competitive environment. Perfect for gamers
        of all levels.
      </MiniText>

      <WhyCardWrapper>
        <LeftImage src={WhyFirstPhoto} alt={'Изображения нет'}/>
        <WhyTextWrapper>
          <RedText>
            Top Equipment
          </RedText>
          <Text>
            Advanced Gaming Gear
          </Text>
          <MiniText>
            State-of-the-art PCs, high-speed internet, and comfortable gaming chairs. Experience gaming at its best.
          </MiniText>

          <WhyTextWrapper>
            <div><WhyIcon/> High-speed internet</div>
            <div><WhyIcon/> State-of-the-art PCs</div>
            <div><WhyIcon/> Comfortable chairs</div>
          </WhyTextWrapper>
        </WhyTextWrapper>
      </WhyCardWrapper>

      <WhyCardWrapper>
        <WhyTextWrapper>
          <RedText>
            Gamer Community
          </RedText>
          <Text>
            Join Our Gaming Family
          </Text>
          <MiniText>
            Be part of a vibrant gaming community. Regular
            tournaments, events, and the chance to meet fellow gamers
            make GameZone more than just a place to play.
          </MiniText>
          <WhyTextWrapper>
            <div><WhyIcon/> Regular tournaments</div>
            <div><WhyIcon/> Vibrant community</div>
            <div><WhyIcon/> Meet fellow gamers</div>
          </WhyTextWrapper>
        </WhyTextWrapper>
        <RightImage src={WhySecondPhoto} alt={'Изображения нет'}/>
      </WhyCardWrapper>

      <WhyCardWrapper>
        <LeftImage src={WhyThirdPhoto} alt={'Изображения нет'}/>
        <WhyTextWrapper>
          <RedText>
            Esports Arena
          </RedText>
          <Text>
            Competitive Gaming Events
          </Text>
          <MiniText>
            Host and participate in esports events. A state-of-the-art arena<br/> for competitive gaming at its best.
          </MiniText>
          <WhyTextWrapper>
            <div><WhyIcon/> Host esports events</div>
            <div><WhyIcon/> Participate in events</div>
            <div><WhyIcon/> State-of-the-art arena</div>
          </WhyTextWrapper>
        </WhyTextWrapper>
      </WhyCardWrapper>


    </SecondSectionWrapper>
  )
}

export default WhySection