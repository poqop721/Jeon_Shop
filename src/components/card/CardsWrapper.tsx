import styled from "styled-components";
import { Item } from "../../pages/Home";
import ItemCard from "./ItemCard";
import React from "react";
import { useLocation } from "react-router-dom";

interface CardsWrapperProps {
    products: Item[],
    dragged : boolean
}

function CardsWrapper({ products, dragged }: CardsWrapperProps) {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <CardsWrapperDiv $page={location.pathname}>
            {products.map((item: Item) => (
                <ItemCard key={item.id} item={item} dragged={dragged}/>
            ))}
        </CardsWrapperDiv>
    )
}

export default React.memo(CardsWrapper)


const CardsWrapperDiv = styled.div<{ $page: string }>`
    width: 90%;
    ${(props) => (props.$page === '/' ? `
    display : grid;
    grid-template-columns : repeat(2,1fr);
    margin: 3em 0;
    ` : `
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
