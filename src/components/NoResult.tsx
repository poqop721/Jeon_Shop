import styled from "styled-components"

export default function NoResult(){
    
    const NoResultDiv = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        width: 90%;
        height : 100%;
        margin: 50px 0;
        font-size : 2em;
        font-weight : 600;
        color : gray;
        
    `

    return(
        <NoResultDiv>
            검색 결과가 없습니다.
        </NoResultDiv>
    )
}