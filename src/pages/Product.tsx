import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Item } from "./Home"
import styled from "styled-components"
import { ContainerDiv } from "../components/ContainerStyle"
import CustomBtn from "../components/CustomButton"
import { GoToListButton } from "../components/ButtonStyles"
import { ImageDiv, Image } from "../components/ImageDivStyle"

const ProductContainerDiv = styled(ContainerDiv)`
    width : 100%;
    background-color : white;
    padding : 4em;
    gap : 2em;
`
const InfoBoxDiv = styled.div`
    width : 90%;
    display : flex;
    justify-content : flex-start;
    gap : 2em;
`

// const Image = styled.img`
//     // width : 70%;
// `

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
`

const BrandSpan = styled.span`
    background-color : #bdbdbd;
    border-radius : 10px;
    padding : 0.1em 0.35em;
    color : #3068b8;
    margin-right : 0.5em;
    font-size: 0.9em;
`

const PriceDiv = styled.div`
    font-size : 2em;
    font-weight : 700;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #e6e6e6;
    margin : 0.7em 0;
    padding : 0.5em 0;
    color : #cb1400;
`

function Product() {
    const { id } = useParams()
    const [item, setItem] = useState<Item>()
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
            <CustomBtn type={"button"} text={'목록으로 돌아가기'} styleComponent={GoToListButton} onClick={()=>navigate("/")} />
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
                        <PriceDiv>{item?.price} $</PriceDiv>
                        <span>{item?.description}</span>
                    </InfoDiv>
                </InfoBoxDiv>
                {item?.images?.map((url, idx) => {
                    return (
                    <ImageDiv key={idx} style={{ backgroundImage: `url(${url})` }} $page={'product'}>
                        <Image src={url} alt={`image_${idx}`} />
                    </ImageDiv>
                )
                })}
            </ProductContainerDiv>
        </ContainerDiv>
    )
}

export default Product