import styled from "styled-components";

export const MoreButton = styled.button<{ $grey : boolean , $display : boolean}>`
    width : 50%;
    height : 50px;
    border-radius : 20px;
    border : 0.1px solid #bdbdbd;
    display : ${(props) => (props.$display ? 'block' : 'none')};
    background-color : ${(props) => (props.$grey ? '#cfcfcf' : '#4287f5')};
    font-size : 1.15em;
    font-weight:600;
    cursor : pointer;
    color : ${(props) => (props.$grey ? 'black' : 'white')};
    &:hover{
        background-color : ${(props) => (props.$grey ? '#b5b5b5' : '#166bf5')};
        color : ${(props) => (props.$grey ? 'black' : 'white')};
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