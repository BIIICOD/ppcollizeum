import {Link, useNavigate} from "react-router-dom";
import {HeaderContent, HeaderWrapper, LinkWrapper, UserBlock} from "./style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import {useEffect, useRef, useState} from "react";
import {useAuth} from "../../context/AuthContext";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [color, setColor] = useState('transparent')
  const [height, setHeight] = useState(150)

  useEffect(() => {
    function listenScrollEvent() {
      if (window.scrollY < 100) {
        setColor('transparent')
        setHeight(150 - window.scrollY)
      } else {
        setColor('black')
        setHeight(50)
      }
    }
    window.addEventListener('scroll', listenScrollEvent)
  }, [])

  const { currentUser, logout} = useAuth()

  return (
    <HeaderWrapper background={color} height={height}>
      <HeaderContent>
        <HashLink to="/#main">GameZone</HashLink>
        <LinkWrapper>
          <HashLink smooth to="/#why">Почему GameZone?</HashLink>
          <HashLink smooth to="/#gameService">Наши игровые сервисы</HashLink>
          <HashLink smooth to='/#map' > Расположение </HashLink>
          <HashLink smooth to="/#contact">Отзывы</HashLink>
        </LinkWrapper>
            <UserBlock>
              <p>{currentUser?.email}</p>
              <ButtonCustom onClick={logout} color={"white"} text={'Выйти'}></ButtonCustom>
            </UserBlock>
        {currentUser ?
            <Link to={'/book'}>
              <ButtonCustom color={'white'} text={'Забронируйте сейчас!'}/>
            </Link>
            :
            <Link to={'/login'}>
              <ButtonCustom color={'transWhite'} text={'Присоединитесь сейчас!'}/>
            </Link>
        }
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header