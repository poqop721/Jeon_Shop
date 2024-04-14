import React, {useEffect, useState } from "react";
import { HomeSeeMoreButton, HomeGoUpButton } from "./ButtonStyles";

interface SeeMoreBtnProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    limit: number,
    isEnd: boolean,
    totalPage : number,
    curPage : number,
}

function SeeMoreBtn({ onClick, limit, isEnd ,totalPage, curPage}: SeeMoreBtnProps) {
    const [isDisplay, setIsDisplay] = useState<boolean>(true)
    const [StyleButton,setStyleButton] = useState<React.ComponentType<any>>(HomeSeeMoreButton)

    useEffect(() => {
        if (isEnd) {
            if (limit <= 10) {
                setIsDisplay(false)
            } else {
                setStyleButton(HomeGoUpButton)
                setIsDisplay(true)
            }
        } else {
            setStyleButton(HomeSeeMoreButton)
            setIsDisplay(true)
        }

    }, [limit, isEnd])

    return (
        <StyleButton onClick={isEnd ? () => window.scrollTo(0, 0) : onClick} $display={isDisplay} >{isEnd ? '맨 위로 올라가기' : `더보기 (${curPage} / ${totalPage})`}</StyleButton>
    )
}

export default SeeMoreBtn