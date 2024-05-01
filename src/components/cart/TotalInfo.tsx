import { SlArrowUp,SlArrowDown } from "react-icons/sl";
import styled from "styled-components";
import Price from "../sharedComponent/Price";
import { Item } from "../../pages/Home";

interface TotalInfoProps{
    item : Item,
    isDiscount : boolean,
    discountPrice : number,
    PriceSpan: React.ComponentType<any>,
}

function TotalInfo({item, isDiscount, discountPrice, PriceSpan} : TotalInfoProps){
    return(
        <TotalInfoDiv>
            <InfoSpan>수량 : {item.quantity}<FixQuantDiv><FixInfoBtn onClick={()=>alert('구현중 입니다')}><SlArrowUp/></FixInfoBtn><FixInfoBtn onClick={()=>alert('구현중 입니다')}><SlArrowDown/></FixInfoBtn></FixQuantDiv></InfoSpan>
            <InfoPriceSpan>총 금액 : &nbsp;<Price isDiscount={isDiscount} discountPrice={discountPrice} price={item.price} styleComponent={PriceSpan} page="cart" quantity={item.quantity} /></InfoPriceSpan>
        </TotalInfoDiv>
    )
}

export default TotalInfo


const TotalInfoDiv = styled.div`
    display : flex;
    align-items : center;
    gap : 1em;
    font-size : 1.1em;
    font-weight : 600;
    @media only screen and (max-width: 480px) {
        align-items : flex-start;
        flex-direction : column;
        gap : 0.2em;
        font-size : 0.8em;
    }
    `
    
const InfoSpan = styled.span`    
    display : flex;
    flex-direction : row;
    align-items : center;
`

const InfoPriceSpan = styled.span`
    background-color : #dbdbdb;
    border-radius : 5px;
    padding : 0.1em 0.35em;
    margin-right : 0.5em;
    display : flex;
    flex-direction : row;
    align-items : center;
    @media only screen and (max-width: 480px) {
        padding : 0 0.3em;
        margin-right : 0em;
    }
`

const FixQuantDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-left : 0.3em;
    @media only screen and (max-width: 480px) {
        flex-direction : row;
    }
`

const FixInfoBtn = styled.button`
    display : flex;
    align-items : center;
    background-color : transparent;
    border : 1px solid transparent;
    cursor : pointer;
    @media (hover: hover) {
        &:hover {
            border : 1px solid #9e9e9e;
            border-radius : 5px;
        }
    }
    @media only screen and (max-width: 480px) {
        transform: rotate(-90deg);
        font-size : 0.75rem;
    }
`