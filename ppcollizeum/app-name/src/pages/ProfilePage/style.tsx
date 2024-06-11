import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const ProfilePageWrapper = styled.div`
    padding: 150px 0 100px 0;
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
    min-height: 700px;
    gap: 25px;
    color: white;
    font-size: 25px;
    background-color: ${COLORS.feedbackBlack};
    border-radius: 15px;
    display: flex;
`

export const ProfilePageUnlogin = styled.div`
    min-height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`

export const SideContent = styled.div`
    max-width: 500px;
    min-width: 370px;
    min-height: 700px;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    gap: 20px;
    background-color: rgba(39, 39, 39, 0.83);
    backdrop-filter: blur(5px);
`
export const SideContentHeader = styled.div`
   
`

export const SideContentBody = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: left;
    margin-top: 100px;
    padding: 0 10px;
    
    ul li {
        list-style-type: none;
    }
    
    div {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`

export const OrderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
`

export const ProfilePageOrderWindow = styled.div`  
    height: 600px;
    width: 100%;
    border-radius: 5px;
    background-color: ${COLORS.feedbackCardBlack};
    display: flex;
    padding: 25px;
    margin-right: 20px;
    justify-content: flex-start;
    flex-direction: column;
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

export const ProfilePageOrderCard = styled.div`
    width: 100%;
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
    text-align: center;
    position: relative;
`