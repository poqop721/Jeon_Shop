import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

const MoreButton = styled.button<{ $grey: boolean, $display: boolean }>`
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

interface SeeMoreBtnProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    limit: number,
    isEnd: boolean,
    totalPage : number,
    curPage : number,
}

function SeeMoreBtn({ onClick, limit, isEnd ,totalPage, curPage}: SeeMoreBtnProps) {
    const [isGreyBtn, setIsGreyBtn] = useState<boolean>(false)
    const [isDisplay, setIsDisplay] = useState<boolean>(true)

    useEffect(() => {
        if (isEnd) {
            if (limit <= 10) {
                setIsDisplay(false)
            } else {
                setIsGreyBtn(true)
                setIsDisplay(true)
            }
        } else {
            setIsGreyBtn(false)
            setIsDisplay(true)
        }

    }, [limit, isEnd])

    return (
        <MoreButton onClick={isEnd ? () => window.scrollTo(0, 0) : onClick} $grey={isGreyBtn} $display={isDisplay} >{isEnd ? '맨 위로 올라가기' : `더보기 ( ${curPage} / ${totalPage} )`}</MoreButton>
    )
}

export default SeeMoreBtn