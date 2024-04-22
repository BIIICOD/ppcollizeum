import {Link} from "react-router-dom";
import {HeaderWrapper, LinkWrapper} from "./style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import {useEffect, useRef, useState} from "react";

const Header = () => {
  const [color, setColor] = useState('transparent')
  const [height, setHeight] = useState('150px')

  useEffect(() => {
    function listenScrollEvent() {
      if (window.scrollY < 100) {
        setColor('transparent')
        setHeight('150px')
      } else {
        setColor('black')
        setHeight('50px')
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