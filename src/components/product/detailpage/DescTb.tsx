import styled from "styled-components"
import { Item } from "../../../pages/Home"

interface DescProps {
    item: Item | undefined,
}

function DescTb({ item }: DescProps) {
    return (
        <DescTable>
            <tbody>
                <Tr>
                    <Td>상품번호</Td>
                    <Td>{item?.id}</Td>
                </Tr>
                <Tr>
                    <Td>브랜드</Td>
                    <Td>{item?.brand}</Td>
                </Tr>
                <Tr>
                    <Td>상품명</Td>
                    <Td>{item?.title}</Td>
                </Tr>
                <Tr>
                    <Td>상품 카테고리</Td>
                    <Td>{item?.category}</Td>
                </Tr>
                <Tr>
                    <Td>상품 설명</Td>
                    <Td>{item?.description}</Td>
                </Tr>
            </tbody>
        </DescTable>
    )
}

export default DescTb


const DescTable = styled.table`
    margin-top : 3em;
    max-width : 100%;
    font-size : 1.4em;
    color : #03001d;
    @media only screen and (max-width: 480px) {
        margin-top : 1em;
        font-size : 1em;
    }
`

const Tr = styled.tr`
border-top : 2px solid #353247;
&:first-child{
    border-top : 0px;
}
`
const Td = styled.td`
padding : 1em;
&:first-child{
    width : 6em;
    font-weight : 800;
}
@media only screen and (max-width: 480px) {
    padding : 0.3em;
    &:first-child{
        width : 6em;
        font-weight : 700;
    }
}
`