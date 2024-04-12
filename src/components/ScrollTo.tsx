import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAtom } from 'jotai'
import { scrollYAtom } from "../atoms/prevPageAtom";
import { render } from "@testing-library/react";

export default function ScrollTo(){
    const { pathname } = useLocation()
    const [curScroll, setCurScroll] = useState<number>(0)
    const [scrollY,setScrollY] = useAtom<number>(scrollYAtom)

    useEffect(()=>{
        if(pathname === '/'){
            console.log(scrollY)
            window.scrollTo(0,scrollY)
        } else {
            setScrollY(curScroll)
            window.scrollTo(0,0)
        }
    }, [pathname])

    // useEffect(()=>{
    //     console.log(curScroll)
    // },[curScroll])

    const handleScroll = () => {
        if(pathname === '/'){
            throttle(()=>{
                setCurScroll(window.scrollY)
            },300)()
        }
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

    return null;
}