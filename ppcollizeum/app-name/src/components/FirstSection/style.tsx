import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const FirstSectionWrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.mainRed};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 35px;
  padding-top: 250px;
  padding-bottom: 100px;
  
  img{
    height: 500px;
    width: 1000px;
    object-fit: cover;
    border-radius: 10px;
    filter: brightness(60%)
}
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`

export const Text = styled.h1`
  font-size: 60px;
  color: ${COLORS.white};
  text-align: center;
`