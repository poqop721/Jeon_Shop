import { useEffect, useMemo } from "react";
import { useAtom } from 'jotai'
import { scrollYAtom } from "../atoms/prevPageAtom";

export const useRecordScroll = () => {
    const [scrollY, setScrollY] = useAtom<number>(scrollYAtom)

    const throttle = (callback: () => void, delay: number) => {
        let timerId: NodeJS.Timeout | null = null
        return () => {
            if (timerId) return;
            timerId = setTimeout(() => {
                callback()
                timerId = null
            }, delay)
        }
    }

    const handleScroll = useMemo(() =>
        throttle(() => {
            console.log('th')
            setScrollY(window.scrollY)
        }, 400), [])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollY;
}