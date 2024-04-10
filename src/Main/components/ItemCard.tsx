import styled from "styled-components"
import { Product } from ".."

export default function ItemCard({item} : {item : Product}){

    const CardsItem = styled.li`
    display: flex;
    flex-direction : column;
    border-radius: 10px;
    border : 1px solid gray;
    padding : 10px;
    gap : 15px;
    `

    return(
        <CardsItem>
            <img src={item.thumbnail} alt={item.title} />
            <li>{item.brand} - {item.title}</li>
            <li>{item.price}$</li>
        </CardsItem>
    )
}