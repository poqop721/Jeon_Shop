import { useEffect, useState } from "react";
import { ContainerDiv } from "../components/sharedComponent/ContainerStyle"
import { Item } from "./Home";
import { DndContext } from "@dnd-kit/core";
import { useAtom } from "jotai";
import { draggedItemsAtom } from "../atoms/dragDropAtom";
import CardsWrapper from "../components/card/CardsWrapper";
import styled from "styled-components";

function Cart(){
    const [products, setProducts] = useState<Item[]>([])
    const [draggedItems, setDraggedItems] = useAtom(draggedItemsAtom)
    const id = 5
    
    useEffect(() => {
        if (id) {
            fetch(`https://dummyjson.com/carts/user/${id}`)
                .then(res => res.json())
                .then(data => { setProducts(data.carts[0].products)
                 })
                .catch(error => {
                    alert('상품 정보를 갖고 오는데 문제가 발생했습니다.')
                    console.error("There was an error!", error)
                });
        } else {
            alert('먼저 로그인 해주세요.')
        }
        window.scrollTo(0, 0)
    }, [id])

    function handleDragEnd(event : any) {
        console.log(event)
        if(event.over) setDraggedItems((prev)=>[...prev, event.active.id.toString()]);
        else setDraggedItems(draggedItems.filter((item) => item !== event.active.id.toString()));
      }

    return(
        <ContainerDiv>
            <DndContext onDragEnd={handleDragEnd}>
            <CardsWrapper products={products} dragged={false}/>
            <PayDiv>
                <PayTitleSpan>결제창 - 아래로 결제할 상품을 끌고 와주세요.</PayTitleSpan>
                <HrDiv></HrDiv>
                <CardsWrapper products={products} dragged={true}/>
            </PayDiv>
            </DndContext>
        </ContainerDiv>
    )
}

export default Cart

const PayDiv = styled.div`
    width : 100%;
    border-radius : 10px;
    background-color : white;
    display : flex;
    flex-direction : column;
    align-items : center;
`

const PayTitleSpan = styled.span`
    font-size : 1.5em;
    font-weight : 700;
    margin-top : 1.5em;
    color : gray;
`

const HrDiv = styled.div`
    background-color : #bfbfbf;
    width : 90%;
    height : 1px;
    margin-top : 1.5em;
`