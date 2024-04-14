import styled from "styled-components"

export const ImageDiv = styled.div<{$page : string}>`
    ${(prop)=>prop.$page==='home'?'width: 100%;':''}
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    transform: scale(1.015);
    transition: transform 0.3s;
`

export const Image = styled.img`
    opacity: 0;
`