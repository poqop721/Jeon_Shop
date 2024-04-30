import styled from "styled-components";
import { Item } from "../../pages/Home";
import ItemCard from "./ItemCard";
import React from "react";
import { useLocation } from "react-router-dom";
import { Droppable } from "../cart/Droppable";
import { useAtom } from "jotai";
import { draggedItemsAtom } from "../../atoms/dragDropAtom";

interface CardsWrapperProps {
    products: Item[],
    dragged : boolean
}

function CardsWrapper({ products, dragged }: CardsWrapperProps) {
    const location = useLocation()
    const [draggedItems,] = useAtom(draggedItemsAtom)

    const CardsWrapperOrigin = () => {
        return(
            <>
            {products.map((item: Item) => {
                if(!draggedItems.includes(item.id.toString()))
                    return <ItemCard key={item.id} item={item}/>
            })}
            </>
        )
    }
    const CardsWrapperDropped = () => {
        return(
            <>
            <DropDiv>
            {products.map((item: Item) => {
                if(draggedItems.includes(item.id.toString()))
                    return <ItemCard key={item.id} item={item}/>
            })}
            </DropDiv>
            </>
        )
    }

    return (
        <CardsWrapperDiv $page={location.pathname}>
            {location.pathname === '/' ? <CardsWrapperOrigin/> : 
            dragged?<Droppable id='droppedDiv'><CardsWrapperDropped/></Droppable>:<CardsWrapperOrigin/>}
        </CardsWrapperDiv>
    )
}

export default React.memo(CardsWrapper)


const CardsWrapperDiv = styled.div<{ $page: string }>`
    ${(props) => (props.$page === '/' ? `
    display : grid;
    grid-template-columns : repeat(2,1fr);
    margin: 3em 0;
    ` : `
    width : 90%;
    display : flex;
    flex-direction : column;
    padding : 2em;
    `)}
    gap : 2em 1.5em;
    @media only screen and (max-width: 480px) {
        gap : 1em 1em;
        ${(props) => props.$page === '/' ? `
        margin: 1.5em 0 2em 0;
        `:`
        margin: 0;
        `}
    }
`

const DropDiv = styled.div`
    display : flex;
    flex-direction : column;
    gap : 2em 1.5em;
    min-height : 3em;
`