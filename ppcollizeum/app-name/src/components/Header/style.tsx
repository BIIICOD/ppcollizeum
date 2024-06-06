import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

interface IHeader {
  background?: string;
  height?: number;
}

export const HeaderWrapper = styled.header<IHeader>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({height}) => height}px;
  width: 100%;
  margin: auto;
  background-color: ${({background}) => background};
  padding: 32px 0;
  position: fixed;
  top: 0;
  left: 50%;
  
  transition: 0.2s;
  transition-property: background-color;
  
  z-index: 9999;
  
  transform: translateX(-50%);
  
  a{
    color: ${COLORS.white};
    text-decoration: none;
    font-size: 25px;
    font-family: "ManropeBold", serif;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.white};
  
  width: 100%;
  max-width: 1200px;
  
`

export const UserBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  
  button{
    display: none;
    position: absolute;
    top: calc(100%);
  }
  
  &:hover > button{
    display: flex;
  }
  
  a{
    font-size: 16px;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  gap: 15px;
  
  a{
    font-size: 16px;
    font-family: "ManropeRegular", serif;
  }
`