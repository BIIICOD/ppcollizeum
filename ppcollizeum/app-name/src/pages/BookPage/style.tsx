import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const BookPageWrapper = styled.div`
    height: 100vh;
    max-height: 1200px;
    padding: 250px 0 100px 0;
    background-color: ${COLORS.mainRed};
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BookPageContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    
    background-color: ${COLORS.white};
`

export const BookWindow = styled.div`
    height: 700px;
    width: 100%;
`

export const ClubPickerColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    width: 60px;
    
    padding: 10px;
    
    background-color: ${COLORS.black};
    transition: 0.4s ease-in-out;
    color: ${COLORS.white};
    
    p{
        position: absolute;
        font-size: 44px;
        text-wrap: nowrap;
        transform: rotate(-90deg);
        font-weight: bold;

        transition: 0.4s ease-in-out;
    }
    
    ul{
        list-style-type: none;  
        display: none;
        transition: 0.4s;
    }
    
    &:hover{
        p{  
            display: none;
        }
        
        ul{
            overflow: hidden;   
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            text-wrap: nowrap;
        }
        width: 350px;
    }
`

