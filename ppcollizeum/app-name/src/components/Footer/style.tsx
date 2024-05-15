import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding-top: 100px;
`

export const FooterContent = styled.div`
    width: 100%;
    max-width: 1200px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FooterContentTop = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    
    padding-bottom: 50px;
    
    border-bottom: 1px solid ${COLORS.black};
`

export const FooterContentTopBlock = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
    gap: 20px;
    
    max-width: 300px;
    
    p{
        font-size: 18px;
        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    }

    &:nth-child(1){
        h3{
            font-size: 22px;
            color: ${COLORS.mainRed};
        }
    }
`

export const FooterContentTopTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
`

export const FooterContentBottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
`

