import { useEffect, useRef } from "react";
import { MoreButton } from "../styleComponents/CustomButtons"

interface SeeMoreButtonProps{
    onClick : React.MouseEventHandler<HTMLButtonElement>,
    limit : number,
    isEnd : boolean,
}

function SeeMoreButton({onClick, limit, isEnd} : SeeMoreButtonProps){
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(()=>{
        if(buttonRef.current){
            if(isEnd){
                if(limit <= 10){
                    buttonRef.current.style.display = 'none'
                } else{
                    buttonRef.current.style.display = 'block'
                    buttonRef.current.innerText = '맨 위로 올라가기'
                    buttonRef.current.onclick = ()=>window.scrollTo(0,0)
                }
            } else {
                buttonRef.current.style.display = 'block'
                buttonRef.current.innerText = '더보기'
                buttonRef.current.onclick = ()=>onClick
            }
        }

    },[limit,isEnd])

    return(
        <MoreButton onClick={onClick} ref={buttonRef} />
    )
}

export default SeeMoreButton