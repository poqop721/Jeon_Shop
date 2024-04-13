import { Item } from "../pages/Home";
import ItemCard from "./ItemCard";
import { CardsWrapperDiv } from "../styleComponents/CardStyle";
import React from "react";

function CardsWrapper({products}:{products : Item[]}){
    return(
        <CardsWrapperDiv>
            {products.map((item: Item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </CardsWrapperDiv>
    )
}

export default React.memo(CardsWrapper)