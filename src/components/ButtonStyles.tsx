import { styled, css } from "styled-components";

const DefaultButtonStyle = css`
    border : 0px;
    border-radius : 10px;
    cursor : pointer;
`

const BlueButtonStyle = styled.button`
    ${DefaultButtonStyle}
    background-color : #4287f5;
    color : white;
    &:hover{
        background-color : #166bf5;
    }
`

const GrayButtonStyle = styled.button`
    ${DefaultButtonStyle}
    background-color : #cfcfcf;
    color : black;
    &:hover{
        background-color : #b5b5b5;
    }
`

const HomeButtonStyle = css`
    width : 50%;
    height : 50px;
    border-radius : 20px;
    border : 0.1px solid #bdbdbd;
    font-size : 1.15em;
    font-weight:600;
    cursor : pointer;
`

export const HomeSeeMoreButton = styled(BlueButtonStyle)`
    ${HomeButtonStyle}
`

export const HomeGoUpButton = styled(GrayButtonStyle) <{ $display: boolean }>`
    ${HomeButtonStyle}
    display : ${(props) => (props.$display ? 'block' : 'none')};
`

const ProductButtonStyle = css`
    padding : 0.3em 0.9em;
    width : 25em;
    height : 2.5em;
    font-size : 1.25em;
    font-weight : 600;
`

export const SubmitButton = styled(BlueButtonStyle)`
    padding : 0.3em 0.9em;
    font-size : 1.2rem;
    z-index : 1;
    margin-right : 0.6em;
`

export const ProductGoToListButton = styled(BlueButtonStyle)`
    ${ProductButtonStyle}
`

export const ProductGoUpButton = styled(GrayButtonStyle)`
    ${ProductButtonStyle}
`