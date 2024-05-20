import {ButtonWrapper, FirstSectionWrapper, Text} from "./style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import MainPhoto from "../../images/MainPhoto.jpg";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";


const FirstSection = () => {

  return(
    <FirstSectionWrapper id={'main'}>
      <Text>
        Добро пожаловать в GameZone - Ваше<br/> Идеальное место для игр
      </Text>
      <ButtonWrapper>
          <Link to={'book'}>
              <ButtonCustom color={'white'} text={'Забронируйте сейчас!'}/>
          </Link>
      </ButtonWrapper>
      <img src={MainPhoto} alt={'Тут должна быть картинка'}/>
    </FirstSectionWrapper>
  )
}

export default FirstSection