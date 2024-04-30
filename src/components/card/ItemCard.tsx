import styled from "styled-components"
import { Item } from "../../pages/Home"
import { useLocation, useNavigate } from "react-router-dom"
import { ImageDiv, Image } from "../sharedComponent/ImageDivStyle"
import Rating from "../sharedComponent/Rating"
import Price from "../sharedComponent/Price"
import getDiscountInfo from "../sharedFunction/getDiscountInfo"
import TotalInfo from "../cart/TotalInfo"
import { SlTrash } from "react-icons/sl";

interface ItemCardProps {
    item: Item,
}

function ItemCard({ item }: ItemCardProps) {
    const navigate = useNavigate()
    const location = useLocation()
    const [isDiscount, discountPrice] = getDiscountInfo(item)

    const goToProduct = (activate: boolean) => {
        if (activate) navigate(`/product/${item.id}`)
    }

    const Info = () => {
        if (location.pathname === '/') {
            return (
                <InfoDiv $page="/">
                    <BrandTitleDiv className="title">{item.brand} - {item.title}</BrandTitleDiv>
                    <Rating rate={item.rating} showRateStr={false} />
                    <div><Price isDiscount={isDiscount} discountPrice={discountPrice} price={item.price} styleComponent={PriceSpan} page="home" /></div>
                </InfoDiv>
            )
        } else {
            return (
                <>
                <InfoDiv $page="cart">
                    <div>
                        <BrandTitleDiv className="title" onClick={() => { goToProduct(location.pathname === '/' ? false : true) }}>{item.title}</BrandTitleDiv>
                        <div><Price isDiscount={isDiscount} discountPrice={discountPrice} price={item.price} styleComponent={PriceSpan} page="cart" /></div>
                    </div>
                    <TotalInfo item={item} isDiscount={isDiscount} discountPrice={discountPrice} PriceSpan={PriceSpan}/>
                </InfoDiv>
                <TrashBtn onClick={()=>alert('구현중 입니다')}><SlTrash/></TrashBtn>
                </>
            )
        }
    }

    return (
        <CardsItemLi onClick={() => { goToProduct(location.pathname === '/' ? true : false) }} $page={location.pathname}>
            <ImageContainerDiv $page={location.pathname}>
                <ImageDiv className="imgDiv" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                    <Image src={item.thumbnail} alt={item.title} />
                </ImageDiv>
            </ImageContainerDiv>
            <Info />
        </CardsItemLi>
    )
}

export default ItemCard


const CardsItemLi = styled.li<{ $page: string }>`
    min-width : 0;
    min-height : 0;
    display: flex;
    ${(props) => props.$page === '/' ? `
        flex-direction : column;    
        cursor : pointer;
    ` : `
        flex-direction : row;    
        cursor : initial;
    `}
    border-radius: 10px;
    border : 1px solid gray;
    padding : 10px;
    gap : 1em;
    box-shadow : 0px 8px 23px #b0b0b0;
    background-color : white;
    border : 0px;
    &:hover .title {
        color : blue;
    }
    @media (hover: hover) {
        &:hover .imgDiv {
            transform: scale(1.1);
            transition: transform 0.3s;
        }
    }
    @media only screen and (max-width: 480px) {
        padding : 7px;
        gap : 10px;
    }
`

const ImageContainerDiv = styled.div<{ $page: string }>`
    ${(props) => props.$page === '/' ? `
        width : 100%;
        height : 250px;
    `: `
        width : 4em;
        height : 4em;
    `}
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
        ${(props) => props.$page === '/' ? `
            width : 100%;
            height : 120px;
        `: `
        
        `}
            width : 9em;
            height : 7em;
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

const InfoDiv = styled.div<{ $page: string }>`
    padding : 0 0.7em;
    line-height : 1.9em;
    margin: auto 0;
    ${(props) => props.$page === '/' ? `
    ` : `
    width : 100%;
    display : flex;
    justify-content : space-between;
    `}
    @media only screen and (max-width: 480px) {
        padding : 0 0.3em;
        line-height : 1.5em;
        flex-direction : column;
    }
`

const BrandTitleDiv = styled.div`
    font-size : 1.2em;
    font-weight : 700;
    cursor : pointer;
    @media only screen and (max-width: 480px) {
        font-size : 1em;
        font-weight : 600;
    }
`

const TrashBtn = styled.span`
    font-size : 1.2em;
    display : flex;
    padding : 0.3em 0em;
    cursor : pointer;
    align-self : center;
    margin-right : 0.5em;
`