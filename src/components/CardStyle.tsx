import styled from "styled-components";

export const CardsWrapper = styled.div`
    width: 90%;
    padding: 4rem;
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
    &:hover .title {
        color : blue;
    }
    cursor : pointer;
    `

export const CardInfo = styled.div`
    padding : 2em;
    display:flex;
    flex-direction : column;
    justify-contents:center;
    align-items:center;
    gap : 1em;
    `