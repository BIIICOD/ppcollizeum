import {Link} from "react-router-dom";
import {HeaderContent, HeaderWrapper, LinkWrapper, UserBlock} from "./style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import {useEffect, useRef, useState} from "react";
import {useAuth} from "../../context/AuthContext";

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
        <Link to="/">GameZone</Link>
        <LinkWrapper>
          <Link to="/one">Placement</Link>
          <Link to="/two">Why GameZone?</Link>
          <Link to="/one">Our Gaming Services</Link>
          <Link to="/two">Contact us</Link>
        </LinkWrapper>
        {currentUser ?
            <UserBlock>
              <p>{currentUser.email}</p>
              <ButtonCustom onClick={logout} color={"white"} text={'Logout'}></ButtonCustom>
            </UserBlock>
            :
            ''}
        {currentUser ?
            <Link to={'/book'}>
              <ButtonCustom color={'white'} text={'Book Now!'}/>
            </Link>
            :
            <Link to={'/login'}>
              <ButtonCustom color={'transWhite'} text={'Join Now!'}/>
            </Link>
        }
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header