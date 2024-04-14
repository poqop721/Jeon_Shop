import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Item } from "./Home"
import styled from "styled-components"
import { ContainerDiv } from "../components/ContainerStyle"
import CustomBtn from "../components/CustomButton"
import { ProductGoToListButton, ProductGoUpButton } from "../components/ButtonStyles"
import { ImageDiv, Image } from "../components/ImageDivStyle"
import Rating from "../components/Rating"
import Price from "../components/Price"


function Product() {
    const { id } = useParams()
    const [item, setItem] = useState<Item>()
    const isDiscount = item?.discountPercentage !== 0
    const discountPrice = item?.price && item?.discountPercentage ? ~~(item.price * ((100 - item.discountPercentage) / 100)) : 0;
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            fetch(`https://dummyjson.com/products/${id}`)
                .then(res => res.json())
                .then(data => { setItem(data) })
                .catch(error => {
                    alert('상품 정보를 갖고 오는데 문제가 발생했습니다.')
                    console.error("There was an error!", error)
                });
        }
        window.scrollTo(0, 0)
    }, [id])

    return (
        <ContainerDiv>
            <CustomBtn type={"button"} text={'목록으로 돌아가기'} styleComponent={ProductGoToListButton} onClick={() => navigate("/")} />
            <ProductContainerDiv>
                <InfoBoxDiv>
                    <ImageDiv style={{ backgroundImage: `url(${item?.thumbnail})` }} $page={'product'}>
                        <Image src={item?.thumbnail} alt={`thumbnail_${item?.id}`} />
                    </ImageDiv>
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
                </InfoBoxDiv>
                <DetailPageDiv>
                    {item?.images?.map((url, idx) => {
                        return (
                            <img key={idx} src={url} alt={`image_${idx}`} />
                        )
                    })}
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
                </DetailPageDiv>
            </ProductContainerDiv>
            <CustomBtn type={"button"} text={'맨 위로 올라가기'} styleComponent={ProductGoUpButton} onClick={() => window.scrollTo(0, 0)} />
        </ContainerDiv>
    )
}

export default Product


const ProductContainerDiv = styled(ContainerDiv)`
    width : 100%;
    background-color : white;
    padding : 4em;
`
const InfoBoxDiv = styled.div`
    width : 90%;
    display : flex;
    justify-content : flex-start;
    gap : 2em;
    padding-bottom : 5em;
    border-bottom : 1px solid #e6e6e6;
`

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

const DetailPageDiv = styled.div`
    margin-top : 6em;
    padding : 4em;
    display : flex;
    flex-direction : column;
    gap : 3em;
`
const DescTable = styled.table`
    margin-top : 3em;
    max-width : 100%;
    font-size : 1.4em;
    color : #03001d;
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
`