import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const LoginWrapper = styled.div`
    padding: 250px 0 200px 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${COLORS.mainRed};
    
    p{
        font-size: 28px;
        color: ${COLORS.white};
        text-transform: uppercase;
        font-weight: bold;
    }
    
    input{
        height: 50px;
        width: 250px;
        border: none;
        padding: 10px;
        border-radius: 100px;
    }
`

export const LoginContent = styled.div`
    width: 100%;
    max-width: 1200px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`