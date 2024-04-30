import styled from "styled-components";

export const ContainerDiv = styled.div`
    width : 100%;
    height : 100%;
    max-width : 1200px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items:center;
    margin : 2em;
    @media only screen and (max-width: 480px) {
        margin : 0em;
    }
`