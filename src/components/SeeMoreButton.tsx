import { useEffect, useRef, useState } from "react";
import { MoreButton } from "../styleComponents/CustomButtons"
import React from "react";

interface SeeMoreButtonProps{
    onClick : React.MouseEventHandler<HTMLButtonElement>,
    limit : number,
    isEnd : boolean,
}

function SeeMoreButton({onClick, limit, isEnd} : SeeMoreButtonProps){
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [isGreyBtn, setIsGreyBtn] = useState<boolean>(false)
    const [isDisplay, setIsDisplay] = useState<boolean>(true)

    useEffect(()=>{
        if(buttonRef.current){
            if(isEnd){
                if(limit <= 10){
                    setIsDisplay(false)
                } else{
                    buttonRef.current.innerText = '맨 위로 올라가기'
                    setIsGreyBtn(true)
                    setIsDisplay(true)
                }
            } else {
                buttonRef.current.innerText = '더보기'
                setIsGreyBtn(false)
                setIsDisplay(true)
            }
        }

    },[limit,isEnd])

    return(
        <MoreButton onClick={isEnd?()=>window.scrollTo(0,0):onClick} ref={buttonRef} $grey={isGreyBtn} $display={isDisplay}/>
    )
}

export default SeeMoreButton