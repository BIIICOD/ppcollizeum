import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

interface IHeader {
  background?: number;
  height?: number;
}

export const HeaderWrapper = styled.header<IHeader>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(150px - ${({height}) => height}px);
  width: 100%;
  margin: auto;
  background-color: rgba(0,0,0,${({background}) => background});
  padding: 32px 64px;
  position: fixed;
  top: 0;
  left: 50%;
  transition: 0.1s;

  z-index: 9999;
  
  transform: translateX(-50%);
  
  a{
    color: ${COLORS.white};
    text-decoration: none;
    font-size: 25px;
    font-family: "ManropeBold", serif;
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