import styled from "styled-components"
import { Item } from "../../../pages/Home"
import { useNavigate } from "react-router-dom"
import { ImageDiv, Image } from "../../shared/ImageDivStyle"
import Rating from "../../shared/Rating"
import Price from "../../shared/Price"

interface ItemCardProps {
    item: Item,
}

function ItemCard({ item }: ItemCardProps) {
    const navigate = useNavigate()
    const isDiscount = item.discountPercentage !== 0
    const discountPrice = ~~(item.price * ((100 - item.discountPercentage) / 100))

    return (
        <CardsItemLi onClick={() => { navigate(`/product/${item.id}`) }}>
            <ImageContainerDiv>
                <ImageDiv className="imgDiv" style={{ backgroundImage: `url(${item.thumbnail})` }} $page={'home'}>
                    <Image src={item.thumbnail} alt={item.title} />
                </ImageDiv>
            </ImageContainerDiv>
            <InfoDiv>
                <BrandTitleDiv className="title">{item.brand} - {item.title}</BrandTitleDiv>
                <Rating rate={item.rating} showRateStr={false} />
                <div><Price isDiscount={isDiscount} discountPrice={discountPrice} price={item.price} styleComponent={PriceSpan} page="home" /></div>
            </InfoDiv>
        </CardsItemLi>
    )
}

export default ItemCard


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
    @media only screen and (max-width: 480px) {
        padding : 7px;
        gap : 10px;
        &:hover .imgDiv {
            transform: none;
            transition: none;
        }
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
    @media only screen and (max-width: 480px) {
        width : 100%;
        height : 120px;
      }
`

const PriceSpan = styled.span`
    font-size : 1.2em;
    font-weight : 700;
    @media only screen and (max-width: 480px) {
        font-size : 1em;
        font-weight : 600;
    }
`

const InfoDiv = styled.div`
    padding : 0 0.7em;
    line-height : 1.9em;
    margin: auto 0;
    @media only screen and (max-width: 480px) {
        padding : 0 0.3em;
        line-height : 1.5em;
    }
`

const BrandTitleDiv = styled.div`
    font-size : 1.2em;
    font-weight : 700;
    @media only screen and (max-width: 480px) {
        font-size : 1em;
        font-weight : 600;
    }
`