import styled from "styled-components";

export const MapSectionWrapper = styled.div`
    display: flex;
    justify-content: center;

    padding: 100px 0;
`

export const MapSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
    
    iframe{
        width: 50%;
        border-radius: 20px;
    }
`

export const MapSectionTitle = styled.h2`
    font-size: 45px;
    font-family: "ManropeBold", serif;
`

export const MapBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    gap: 50px;
`

export const MapSectionText = styled.div`
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    
    h3{
        font-size: 25px;
    }
    
    ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }
    }
`