import styled from "styled-components"
import { Item } from "../../pages/Home"
import DetailPage from "./detailpage/DetailPage"
import InfoBox from "./infobox/InfoBox"
import { ContainerDiv } from "../shared/ContainerStyle"

interface ProductContainerProps {
    item: Item | undefined,
}

function ProductContainer({ item }: ProductContainerProps) {
    return (
        <ProductContainerDiv>
            <InfoBox item={item}/>
            <DetailPage item={item}/>
        </ProductContainerDiv>
    )
}

export default ProductContainer


const ProductContainerDiv = styled(ContainerDiv)`
    width : 100%;
    background-color : white;
    padding : 4em 0;
    @media only screen and (max-width: 480px) {
        padding : 1.5em 0em;
    }
`
