import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const SecondSectionWrapper = styled.div`
  min-height: 800px;
  margin-top: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  font-size: 50px;
  color: ${COLORS.black};
  text-align: center;
  font-family: "ManropeBold", serif;
`

export const MiniText = styled.p`
  font-size: 18px;
  color: ${COLORS.black};
  text-align: center;
  font-family: "ManropeRegular", serif;
  max-width: 600px;
  margin-top: 20px;
`

export const RedText = styled.p`
  font-size: 16px;
  color: ${COLORS.mainRed};
`

export const WhyCardWrapper = styled.div`
  margin: 100px 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  
  img{
    height: 500px;
    width: 500px;
    object-fit: cover;
    
  }
`

export const LeftImage = styled.img`
  border-radius: 20px;
  box-shadow: 15px 0 0 15px #F4F4F4;
`

export const RightImage = styled.img`
  border-radius: 20px;
  box-shadow: -15px 0 0 15px #F4F4F4;
`

export const WhyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 575px;
  gap: 30px;
  
  div{
    display: flex;
    gap: 10px;
  }

  p{
    margin-top: 0;
    text-align: left;
  }
`