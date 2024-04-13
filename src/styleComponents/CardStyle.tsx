import styled from "styled-components";

export const CardsWrapper = styled.div`
    width: 90%;
    height : 100%;
    padding: 0 4rem;
    display : grid;
    grid-template-columns : repeat(2,1fr);
    gap : 2em 1.5em;
    margin: 50px 0;
    `

export const CardsItem = styled.li`
    display: flex;
    flex-direction : column;
    border-radius: 10px;
    border : 1px solid gray;
    padding : 10px;
    gap : 15px;
    cursor : pointer;
    box-shadow : 0px 8px 23px #b0b0b0;
    background-color : white;
    border : 0px;
    &:hover .title {
        color : blue;
    }
    &:hover .imgDiv {
        transform: scale(1.1);
        transition: transform 0.3s;
    }
    `

export const CardInfo = styled.div`
    padding : 2em;
    display:flex;
    flex-direction : column;
    justify-contents:center;
    align-items:center;
    gap : 1em;
    `