import styled from "styled-components";
import { Item } from "../../pages/Home";
import ItemCard from "./ItemCard";
import React from "react";
import { useLocation } from "react-router-dom";
import { Droppable } from "../cart/Droppable";
import { useAtom } from "jotai";
import { draggedItemsAtom } from "../../atoms/dragDropAtom";
import getDiscountInfo from "../sharedFunction/getDiscountInfo";
import CustomBtn from "../sharedComponent/CustomButton";

interface CardsWrapperProps {
    products: Item[],
    dragged: boolean
}

function CardsWrapper({ products, dragged }: CardsWrapperProps) {
    const location = useLocation()
    const [draggedItems, setDraggedItems] = useAtom(draggedItemsAtom)

    const CardsWrapperOrigin = () => {
        let count = 0
        return (
            <>
                {products.map((item: Item) => {
                    if (!draggedItems.includes(item.id.toString())) {
                        count++
                        if (location.pathname === '/') return <ItemCard key={item.id} item={item} />
                        else return <><ItemCard key={item.id} item={item} /><LineDiv className="line" /></>
                    }
                })}
                {!count ? <PayTitleSpan>
                    장바구니가 비어있습니다.
                </PayTitleSpan> : <></>}
            </>
        )
    }
    const CardsWrapperDropped = () => {
        if (!draggedItems.length) {
            return <PayTitleSpan>
                여기로 결제할 상품을 끌고 와주세요
            </PayTitleSpan>
        }
        else {
            let totalSum = 0
            return (
                <>
                    {products.map((item: Item) => {
                        if (draggedItems.includes(item.id.toString())) {
                            let [, discountPrice] = getDiscountInfo(item)
                            totalSum += discountPrice * item.quantity
                            return <><ItemCard key={item.id} item={item} /><LineDiv className="line" /></>
                        }
                    })}
                    <DroppableControlDiv>
                        <CustomBtn type="button" text="비우기" styleComponent={DropBtn} onClick={() => setDraggedItems([])} styleProps={'empty'}/>
                        <TotalPriceDiv>
                            총 결제 금액 
                            <PriceTitleSpan>{totalSum} $</PriceTitleSpan> 
                            <CustomBtn type="button" text="결제하기" styleComponent={DropBtn} onClick={() => alert('구현중입니다')} styleProps={'pay'}/>
                        </TotalPriceDiv>
                    </DroppableControlDiv>
                </>
            )
        }
    }

    return (
        <CardsWrapperDiv $page={location.pathname}>
            {location.pathname === '/' ? <CardsWrapperOrigin /> :
                dragged ? <Droppable id='droppedDiv'><CardsWrapperDropped /></Droppable> : <CardsWrapperOrigin />}
        </CardsWrapperDiv>
    )
}

export default React.memo(CardsWrapper)


const CardsWrapperDiv = styled.div<{ $page: string }>`
    ${(props) => (props.$page === '/' ? `
    display : grid;
    grid-template-columns : repeat(2,1fr);
    margin: 3em 0;
    gap : 2em 1.5em;
    ` : `
    width : -webkit-fill-available;
    display : flex;
    flex-direction : column;
    padding : 2em;
    gap : 0.5em 1.5em;
    border : 1px solid transparent;
    `)}
    @media only screen and (max-width: 480px) {
        gap : 1em 1em;
        ${(props) => props.$page === '/' ? `
        width : 90%;
        margin: 1.5em 0 2em 0;
        `: `
        padding : 0.3em;
        margin: 0;
        `}
    }
    & .line:last-child{
        display : none;
    }
`

const PayTitleSpan = styled.span`
    font-size : 1.5em;
    font-weight : 700;
    color : gray;
    align-self : center;
    @media only screen and (max-width: 480px) {
        font-size : 1.1em;
    }
`

const PriceTitleSpan = styled.span`
font-weight : 800;
background-color : #dbdbdb;
border-radius : 5px;
padding : 0.3em;
color : #2d59fa;
`

const DropBtn = styled.button<{ $styleProps : string }>`
    font-size : ${(props)=>props.$styleProps === 'pay' ? '0.88em' : '0.7em'};
    font-weight : 800;
    border : 0px;
    border-radius : 5px;
    padding : ${(props)=>props.$styleProps === 'pay' ? '0.3em' : '0.3em'};
    cursor : pointer;
    background-color :  ${(props)=>props.$styleProps === 'pay' ? '#4287f5' : '#de5b5b'} ;
    color : white;
    &:hover{
        background-color : ${(props)=>props.$styleProps === 'pay' ? '#166bf5' : '#db3030'};
    }
`

const LineDiv = styled.div`
    align-self : center;
    width : 98%;
    height : 1px;
    background-color : #dedede;
    @media only screen and (max-width: 480px) {
        width : 93%;
    }
`


const DroppableControlDiv = styled.div`
    width : 98%;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    gap : 0.5em;
    margin : 1em 0 0;
    font-size : 1.5em;
    @media only screen and (max-width: 480px) {
        font-size : 1em;
        margin : 0.5em 0;
    }
`

const TotalPriceDiv = styled.div`
    font-weight : 600;
    color : #5c5c5c;
    display : flex;
    flex-direction : row;
    align-items:center;
    gap : 0.5em;
`
