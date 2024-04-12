import { atom } from "jotai";

export const keywordAtom = atom<string>('')

export const setKeywordAtom = atom(
    null,
    (get,set,keyword : string) => {
        set(
            keywordAtom,
            keyword
        )
    }
)


export const scrollYAtom = atom<number>(0)

export const setScrollY = atom(
    null,
    (get,set,scrollY : number) => {
        set(
            scrollYAtom,
            scrollY
        )
    }
)