import styled from "styled-components"

interface PriceProps {
    isDiscount: boolean,
    discountPrice: number,
    price: number,
    styleComponent: React.ComponentType<any>,
    page: string,
    quantity? : number,
}

function Price({ isDiscount, price, discountPrice, styleComponent, page , quantity}: PriceProps) {
    const StyleSpan = styleComponent
    return (
        <PriceSpan $page={page}>
            <StyleSpan className={isDiscount ? 'linethrough' : ''}>{quantity?price * quantity:price }$</StyleSpan>
            {isDiscount ? <StyleSpan>{quantity?discountPrice * quantity:discountPrice}$</StyleSpan> : ''}
        </PriceSpan>
    )
}

export default Price


export const PriceSpan = styled.span<{ $page: string }>`
${(prop) => prop.$page === 'product' ? `
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #e6e6e6;
    margin : 0.7em 0;
    padding : 1.2em 0;
    `: ''}
    color : #cb1400;
    & .linethrough{
        text-decoration : line-through;
        margin-right : 0.3em;
        color : grey;
    }
`