import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAtom } from 'jotai'
import { scrollYAtom } from "../atoms/prevPageAtom";

export const useRecordScroll = () => {
    const { pathname } = useLocation()
    const [scrollY,setScrollY] = useAtom<number>(scrollYAtom)

    const handleScroll = () => {
        if(pathname === '/'){
            throttle(()=>{
                setScrollY(window.scrollY)
            },300)()
        }
    }

    // useEffect(()=>{
    //     console.log(curScroll)
    // },[curScroll])

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