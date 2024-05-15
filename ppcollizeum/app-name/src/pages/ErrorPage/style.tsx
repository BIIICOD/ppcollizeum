import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const ErrorPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;

    background-color: ${COLORS.mainRed};
    padding-top: 350px;
    padding-bottom: 250px;
    
    color: ${COLORS.white};
`

export const ErrorPageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 20px;
    
    height: 100%;
    width: 100%;
    max-width: 1200px;

`

export const ErrorPageText = styled.div`
    font-size: 45px;
    font-weight: bold;
`