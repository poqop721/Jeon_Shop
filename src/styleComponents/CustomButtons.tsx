import styled from "styled-components";

export const MoreButton = styled.button`
    width : 50%;
    height : 50px;
    border-radius : 20px;
    border : 0.1px solid #bdbdbd;
    background-color : #cfcfcf;
    font-size : 1.1em;
    cursor : pointer;
    &:hover{
        background-color : #b5b5b5;
    }
`

export const SubmitButton = styled.input`
flex : 0;
    width : 70px;
    height : 32px;
    border-radius : 20px;
    border : 0px;
    background-color : #4287f5;
    color : white;
    display:flex;
    justify-content : center;
    align-items : center;
    font-size : 1.2em;
    z-index : 1;
    cursor : pointer;
    margin-right : 1em;
    padding : 0 1em;
    &:hover{
        background-color : #166bf5;
    }
`