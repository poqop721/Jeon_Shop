import styled from "styled-components";
import { Item } from "../../../pages/Home";
import Rating from "../../sharedComponent/Rating";
import Price from "../../sharedComponent/Price";
import getDiscountInfo from "../../sharedFunction/getDiscountInfo";

interface InfoProps {
    item: Item | undefined,
}

function Info({ item }: InfoProps) {
    const [isDiscount, discountPrice] = getDiscountInfo(item)
    
    return (
        <InfoDiv>
            <BrandTitleDiv>
                <BrandSpan>{item?.brand}</BrandSpan>
                <span>{item?.title}</span>
            </BrandTitleDiv>
            <Rating rate={item ? item.rating : 0} showRateStr={true} />
            <Price isDiscount={isDiscount} discountPrice={discountPrice} price={item ? item.price : 0} styleComponent={PriceSpan} page="product" />
            <StockDiv>현재 재고 : {item?.stock}개</StockDiv>
            <DescSpan>{item?.description}</DescSpan>
        </InfoDiv>
    )
}

export default Info


const InfoDiv = styled.div`
    height : 100%;
    display : flex;
    flex-direction : column;
    flex-grow:1;
`

const BrandTitleDiv = styled.div`
    font-size : 1.7em;
    font-weight : 700;
    line-height : 1.3em;
    margin-bottom : 0.5em;
`

const PriceSpan = styled.span`
    font-size : 2em;
    font-weight : 700;
`

const BrandSpan = styled.span`
    background-color : #d1cfcf;
    border-radius : 10px;
    padding : 0.1em 0.35em;
    color : #1674f7;
    margin-right : 0.5em;
    font-size: 0.9em;
`

const StockDiv = styled.div`
    border-bottom : 1px solid #e6e6e6;
    margin-bottom : 0.7em;
    padding : 0.3em 0 1em 0;
    font-size : 1.1em;
    font-weight : 500;
    color : #595959;
`

const DescSpan = styled.span`
    line-height : 1.3em;
`