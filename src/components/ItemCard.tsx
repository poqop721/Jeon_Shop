import styled from "styled-components"
import { Item } from "../pages/Home"
import { CardsItem } from "../styleComponents/CardStyle"
import { useNavigate } from "react-router-dom"
import React from "react"


function ItemCard({item} : {item : Item}){
    const navigate = useNavigate()

    return(
        <CardsItem onClick={()=>{navigate(`/product/${item.id}`)}}>
            <img src={item.thumbnail} alt={item.title} />
            <p className="title">{item.brand} - {item.title}</p>
            <p>{item.price}$</p>
        </CardsItem>
    )
}

export default React.memo(ItemCard)