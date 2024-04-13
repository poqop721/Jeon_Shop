import styled from "styled-components"
import { Item } from "../pages/Home"
import { CardsItem } from "../styleComponents/CardStyle"
import { useNavigate } from "react-router-dom"
import React from "react"

const ImageDivContainer = styled.div`
    width : 100%;
    height : 250px;
    border-radius:10px;
    overflow : hidden;
    position : relative;
    &::after{
        content: "";
        position: absolute;
        inset: 0;
        box-shadow:inset 0px 1px 13px #bdbdbd;
    }
    `
    
    const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    transform: scale(1.015);
    transition: transform 0.3s;
`

const Image = styled.img`
    opacity: 0;
`

const Price = styled.span`
    font-size : 1.2em;
    font-weight : 700;
`

const InfoDiv = styled.div`
    padding : 0 0.7em;
    line-height : 1.7em;
`

function ItemCard({item} : {item : Item}){
    const navigate = useNavigate()

    return(
        <CardsItem onClick={()=>{navigate(`/product/${item.id}`)}}>
            <ImageDivContainer>
                <ImageDiv className="imgDiv" style={{backgroundImage:`url(${item.thumbnail})`}}>
                    <Image src={item.thumbnail} alt={item.title} />
                </ImageDiv>
            </ImageDivContainer>
            <InfoDiv>
                <p className="title">{item.brand} - {item.title}</p>
                <p><Price>{item.price}</Price>$</p>
            </InfoDiv>
        </CardsItem>
    )
}

export default ItemCard