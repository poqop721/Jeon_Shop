import { atom } from "jotai";

export const draggedItemsAtom = atom<string[]>([])
export const setDraggedItemsAtom = atom(
    null,
    (get, set, draggedItems: string) => {
        set(
            draggedItemsAtom,
            [draggedItems]
        )
    }
)