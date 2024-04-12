import { useEffect, useMemo } from "react";
import { useAtom } from 'jotai'
import { scrollYAtom } from "../atoms/prevPageAtom";

export const useRecordScroll = () => {
    const [scrollY,setScrollY] = useAtom<number>(scrollYAtom)

    const handleScroll = () => {
        throttle(()=>{
            setScrollY(window.scrollY)
        },300)()
    }

    const throttle = (callback : Function, delay : number) => {
        let timerId : NodeJS.Timeout | null
        return () => {
            if(timerId) return;
            timerId = setTimeout(()=>{
                callback()
                timerId = null
            }, delay)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    return scrollY;
}