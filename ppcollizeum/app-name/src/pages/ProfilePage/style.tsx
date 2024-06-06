import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const ProfilePageWrapper = styled.div`
    padding: 250px 0 150px 0;
    width: 100%;
    background-color: ${COLORS.feedbackCardBlack};
    margin: auto;
    display: flex;
    justify-content: center;
`

export const ProfilePageContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    color: white;
    font-size: 25px;
`

export const SideContent = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    gap: 20px;
`