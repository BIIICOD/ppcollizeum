import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const CartPageWrapper = styled.div`
    padding: 150px 0 100px 0;
    width: 100%;
    background-color: ${COLORS.feedbackCardBlack};
    margin: auto;
    display: flex;
    justify-content: center;
`

export const CartPageContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    min-height: 700px;
    gap: 25px;
    color: white;
    font-size: 25px;
    background-color: ${COLORS.feedbackBlack};
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`