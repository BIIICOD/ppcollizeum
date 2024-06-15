import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  gap: 50px;

  padding: 200px 0;

  background-color: ${COLORS.feedbackBlack};
`

export const FeedbackContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};

  p{
    text-align: center;
    width: 60%;
    font-size: 18px;
  }
`
