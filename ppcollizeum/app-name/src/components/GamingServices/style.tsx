import styled from "styled-components";

export const GamingServicesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
`

export const GamingServicesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
`

export const TopText = styled.span`
    font-size: 45px;
    font-family: "ManropeBold", serif;
    padding-bottom: 100px;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 385px;
    width: 300px;
    padding: 30px 20px;
    background-color: #f4f4f4;
    border-radius: 20px;
    gap: 20px;
    
    svg{
        height: 22px;
        width: 22px;
        background-color: #f5dfdc;
        border-radius: 100%;
        padding: 20px;
        box-sizing: content-box;
    }
`

export const CardBoldText = styled.div`
    font-size: 20px;
    font-family: "ManropeBold", serif;
`

export const CardText = styled.div`
    font-size: 16px;
`
