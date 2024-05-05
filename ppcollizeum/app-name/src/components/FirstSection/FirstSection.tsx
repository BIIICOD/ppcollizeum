import {ButtonWrapper, FirstSectionWrapper, Text} from "./style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import MainPhoto from "../../images/MainPhoto.jpg";


const FirstSection = () => {
  return(
    <FirstSectionWrapper>
      <Text>
        Welcome to GameZone - Your<br/> Ultimate Gaming Destination
      </Text>
      <ButtonWrapper>
        <ButtonCustom color={'white'} text={'Book Now!'}/>
        <ButtonCustom color={'transWhite'} text={'Join Now'}/>
      </ButtonWrapper>

      <img src={MainPhoto} alt={'Тут должна быть картинка'}/>
    </FirstSectionWrapper>
  )
}

export default FirstSection