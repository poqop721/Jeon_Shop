import styled from "styled-components";
import { Item } from "../pages/Home";
import ItemCard from "./ItemCard";
import React from "react";

const CardsWrapperDiv = styled.div`
    width: 90%;
    height : 100%;
    display : grid;
    grid-template-columns : repeat(2,1fr);
    gap : 2em 1.5em;
    margin: 50px 0;
`

interface CardsWrapperProps {
    products: Item[],
}

function CardsWrapper({ products }: CardsWrapperProps) {
    return (
        <CardsWrapperDiv>
            {products.map((item: Item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </CardsWrapperDiv>
    )
}

export default React.memo(CardsWrapper)