import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

interface IModal{
    display: boolean;
}

export const FeedbackSectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 100px 0;
    
    background-color: ${COLORS.feedbackBlack};
`

export const FeedbackSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${COLORS.white};
    gap: 50px;
    
    p{
        text-align: center;
        width: 60%;
        font-size: 18px;
    }
`

export const FeedbackSectionTitle = styled.h2`
    font-size: 45px;
    font-family: "ManropeBold", serif;
`

export const FeedbackCardBlock = styled.div`
    display: flex;
    gap: 50px;
`

export const FeedbackCard = styled.div`
    width: 100%;
    max-width: 575px;
    padding: 50px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: ${COLORS.feedbackCardBlack};
    
    h3{
        font-weight: normal;
        font-family: "ManropeRegular", serif;
        font-size: 20px;
    }
`

export const FeedbackUserBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const FeedbackUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const FeedbackUserIcon = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 100%;
    background-color: red;
`

export const FeedbackUserName = styled.div`
    
`

export const FeedbackUserRate = styled.div`
    
`

export const FeedbackText = styled.h3`
    
`

export const ModalWrapper = styled.div<IModal>`
    display: ${({display}) => display ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`

export const ModalForm = styled.div`
`

export const ModalContent = styled.div`
    background-color: ${COLORS.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 500px;
    width: 800px;
    border-radius: 20px;
    
        input{
            font-size: 24px;
            width: 300px;
            border-radius: 10px;
            border: 2px solid ${COLORS.mainRed};
            padding-left: 10px;
        }
        
        .textarea{
            min-height: 200px;
            font-size: 16px;
            width: 300px;
            border-radius: 10px;
            border: 2px solid ${COLORS.mainRed};
            padding-top: 10px;
            padding-left: 10px;
            resize: none;
            text-wrap: wrap;
        }
    }
`

