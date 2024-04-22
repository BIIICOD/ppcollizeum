import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const RedButton = styled.button`
  padding: 10px 30px;
  border-radius: 100px;
  outline: none;
  border: none;
  background-color: ${COLORS.mainRed};;
  color: ${COLORS.white};
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover{
    transition: 0.2s;
    background-color: ${COLORS.redHover};
  }
`

export const WhiteButton = styled.button`
  padding: 10px 30px;
  border-radius: 100px;
  outline: none;
  border: none;
  color: ${COLORS.black};
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover{
    transition: 0.2s;
    background-color: ${COLORS.whiteHover};
  }
`

export const TransWhiteButton = styled.button`
  padding: 10px 30px;
  border-radius: 100px;
  outline: none;
  background-color: transparent;
  border: 1px solid ${COLORS.white};
  color: ${COLORS.white};
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
  
  &:hover{
    transition: 0.2s;
    background-color: ${COLORS.black};
    border: 1px solid ${COLORS.black};
  }
`
export const TransBlackButton = styled.button`
  padding: 10px 30px;
  border-radius: 100px;
  outline: none;
  background-color: transparent;
  border: 1px solid ${COLORS.black};
  color: ${COLORS.black};
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;

  &:hover{
    transition: 0.2s;
    background-color: ${COLORS.black};
    border: 1px solid ${COLORS.black};
    color: ${COLORS.white};
  }
`