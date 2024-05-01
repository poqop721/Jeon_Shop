import styled from "styled-components";
import { Item } from "../../pages/Home";
import ItemCard from "./ItemCard";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Droppable } from "../cart/Droppable";
import { useAtom } from "jotai";
import { draggedItemsAtom } from "../../atoms/dragDropAtom";
import getDiscountInfo from "../sharedFunction/getDiscountInfo";
import CustomBtn from "../sharedComponent/CustomButton";

interface CardsWrapperProps {
    products: Item[],
    dragged : boolean
}

function CardsWrapper({ products, dragged }: CardsWrapperProps) {
    const location = useLocation()
    const [draggedItems,] = useAtom(draggedItemsAtom)

    const CardsWrapperOrigin = () => {
        let count = 0
        return(
            <>
            {products.map((item: Item) => {
                if(!draggedItems.includes(item.id.toString())){
                    count++
                    return <ItemCard key={item.id} item={item}/>
                }
            })}
            {!count ? <PayTitleSpan>
                장바구니가 비어있습니다.
            </PayTitleSpan> : <></>}
            </>
        )
    }
    const CardsWrapperDropped = () => {
        if(!draggedItems.length){
            return <PayTitleSpan>
                여기로 결제할 상품을 끌고 와주세요
            </PayTitleSpan>
        }
        else {
            let totalSum = 0
            return(
            <>
            {products.map((item: Item) => {
                if(draggedItems.includes(item.id.toString())){
                    let [,discountPrice] = getDiscountInfo(item)
                    totalSum += discountPrice * item.quantity
                    return <ItemCard key={item.id} item={item}/>
                }
            })}
            <TotalPriceDiv>총 결제 금액 <PriceTitleSpan>{totalSum} $</PriceTitleSpan> <CustomBtn type="button" text="결제하기" styleComponent={payBtn} onClick={()=>alert('구현중입니다')}/></TotalPriceDiv>
            </>
        )
    }
    }

    return (
        <CardsWrapperDiv $page={location.pathname}>
            {location.pathname === '/' ? <CardsWrapperOrigin/> : 
            dragged?<Droppable id='droppedDiv'><CardsWrapperDropped/></Droppable>:<CardsWrapperOrigin/>}
        </CardsWrapperDiv>
    )
}

export default React.memo(CardsWrapper)


const CardsWrapperDiv = styled.div<{ $page: string }>`
    ${(props) => (props.$page === '/' ? `
    display : grid;
    grid-template-columns : repeat(2,1fr);
    margin: 3em 0;
    ` : `
    width : -webkit-fill-available;
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

const PayTitleSpan = styled.span`
    font-size : 1.5em;
    font-weight : 700;
    color : gray;
    align-self : center;
`

const TotalPriceDiv = styled.div`
    width : 100%;
    margin : 0.5em 0 0.2em 0;
    font-size : 1.5em;
    font-weight : 600;
    color : #5c5c5c;
    display : flex;
    flex-direction : row;
    align-items:center;
    justify-content : flex-end;
    gap : 0.5em;
    margin-right : 0.5em;
`

const PriceTitleSpan = styled.span`
font-weight : 800;
background-color : #dbdbdb;
border-radius : 5px;
padding : 0.3em;
color : #2d59fa;
`

const payBtn = styled.button`
    font-size : 0.88em;
    font-weight : 800;
    border : 0px;
    border-radius : 5px;
    padding : 0.3em;
    cursor : pointer;
    background-color : #4287f5;
    color : white;
    &:hover{
        background-color : #166bf5;
    }

`