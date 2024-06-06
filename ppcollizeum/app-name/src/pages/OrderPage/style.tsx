import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const OrderPageWrapper = styled.div`
    padding: 150px 0 100px 0;
    width: 100%;
    background-color: ${COLORS.feedbackCardBlack};
    margin: auto;
    display: flex;
    justify-content: center;
`

export const OrderPageContent = styled.div`
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
`

export const OrderPageTitle = styled.h2`
    width: 100%;
    text-align: center;
`

export const OrderPageWindow = styled.div`  
    height: 600px;
    border-radius: 5px;
    background-color: ${COLORS.feedbackCardBlack};
    display: flex;
    padding: 25px;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 25px;
    overflow: auto;
    
    &::-webkit-scrollbar-thumb {
        background-color: #FC4B37;    /* цвет плашки */
        border-radius: 10px;       /* закругления плашки */
        border: 3px solid #222629ff;  /* padding вокруг плашки */
    }
    &::-webkit-scrollbar {
        width: 12px;               /* ширина scrollbar */
    }
    &::-webkit-scrollbar-track {
        background: #222629ff;        /* цвет дорожки */
    }
`

export const OrderPageCard = styled.div`
    width: 250px;
    border-radius: 5px;
    padding: 8px;
    background-color: ${COLORS.white};
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    transition: 0.4s;
    user-select: none;
    cursor: pointer;
    text-align: center;
    position: relative;
    
    button{
    }
    
    img{
        height: 150px;
        width: 150px;
        background-size: contain;
    }
`