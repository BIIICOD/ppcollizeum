import {ButtonWrapper, FirstSectionWrapper, Text} from "./style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import MainPhoto from "../../images/MainPhoto.jpg";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";


const FirstSection = () => {

  return(
    <FirstSectionWrapper>
      <Text>
        Welcome to GameZone - Your<br/> Ultimate Gaming Destination
      </Text>
      <ButtonWrapper>
          <Link to={'book'}>
              <ButtonCustom color={'white'} text={'Book Now!'}/>
          </Link>
      </ButtonWrapper>
      <img src={MainPhoto} alt={'Тут должна быть картинка'}/>
    </FirstSectionWrapper>
  )
}

export default FirstSection