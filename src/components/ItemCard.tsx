import styled from "styled-components"
import { Item } from "../pages/Home"
import { useNavigate } from "react-router-dom"
import { ImageDiv, Image } from "./ImageDivStyle"

const CardsItemLi = styled.li`
    min-width : 0;
    min-height : 0;
    display: flex;
    flex-direction : column;
    border-radius: 10px;
    border : 1px solid gray;
    padding : 10px;
    gap : 15px;
    cursor : pointer;
    box-shadow : 0px 8px 23px #b0b0b0;
    background-color : white;
    border : 0px;
    &:hover .title {
        color : blue;
    }
    &:hover .imgDiv {
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`

const ImageContainerDiv = styled.div`
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

const PriceP = styled.span`
    font-size : 1.2em;
    font-weight : 700;
`

const InfoDiv = styled.div`
    padding : 0 0.7em;
    line-height : 1.7em;
`

interface ItemCardProps {
    item: Item,
}

function ItemCard({ item }: ItemCardProps) {
    const navigate = useNavigate()

    return (
        <CardsItemLi onClick={() => { navigate(`/product/${item.id}`) }}>
            <ImageContainerDiv>
                <ImageDiv className="imgDiv" style={{ backgroundImage: `url(${item.thumbnail})` }} $page={'home'}>
                    <Image src={item.thumbnail} alt={item.title} />
                </ImageDiv>
            </ImageContainerDiv>
            <InfoDiv>
                <p className="title">{item.brand} - {item.title}</p>
                <p><PriceP>{item.price}</PriceP>$</p>
            </InfoDiv>
        </CardsItemLi>
    )
}

export default ItemCard