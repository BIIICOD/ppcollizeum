import styled from "styled-components";
import {COLORS} from "../../constants/Colors";

export const SeatRowWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;

    background-color: #cacaca;
    border-radius: 20px;
    padding: 50px;
`

export const SeatRowBlock = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-basis: 20%;
    
    section{
        display: none;
    }

    img{
        filter: drop-shadow(1px 1px 1px #222);
    }

    img:hover{
        cursor: pointer;
        opacity: .6;
    }

    &:hover{
        section{
            padding: 10px;
            border-radius: 10px;
            z-index: 999;
            background-color: ${COLORS.black};
            color: white;
            position: absolute;
            top: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            text-transform: uppercase;
            font-weight: bold;

            p{
                text-wrap: nowrap;
            }
        }
    }
`