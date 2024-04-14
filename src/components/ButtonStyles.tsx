import styled from "styled-components";

const DefaultButtonStyle = styled.button`
    border : 0px;
    border-radius : 10px;
    background-color : #4287f5;
    color : white;
    cursor : pointer;
    &:hover{
        background-color : #166bf5;
    }
`

export const SubmitButton = styled(DefaultButtonStyle)`
    padding : 0.3em 0.9em;
    font-size : 1.2rem;
    z-index : 1;
    margin-right : 0.6em;
`

export const GoToListButton = styled(SubmitButton)`
    width : 25em;
    height : 2.5em;
    font-size : 1.25em;
    font-weight : 500;
`