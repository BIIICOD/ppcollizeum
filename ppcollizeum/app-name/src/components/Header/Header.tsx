import {Link} from "react-router-dom";
import {HeaderWrapper, LinkWrapper} from "./style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import {useEffect, useRef, useState} from "react";

const Header = () => {
  const [color, setColor] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    function listenScrollEvent() {
      if (window.scrollY < 100) {
        setColor(0)
        setHeight(window.scrollY)
      } else {
        setColor(100)
        setHeight(window.scrollY)
      }
    }
    window.addEventListener('scroll', listenScrollEvent)
  }, [])

  return (
    <HeaderWrapper background={color} height={height}>
      <Link to="/">GameZone</Link>
      <LinkWrapper>
        <Link to="/one">Placement</Link>
        <Link to="/two">Why GameZone?</Link>
        <Link to="/one">Our Gaming Services</Link>
        <Link to="/two">Contact us</Link>
      </LinkWrapper>
      <Link to={'/book'}>
        <ButtonCustom color={'white'} text={'Book Now!'}/>
      </Link>
    </HeaderWrapper>
  )
}

export default Header