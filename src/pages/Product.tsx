import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Item } from "./Home"
import { ContainerDiv } from "../components/sharedComponent/ContainerStyle"
import CustomBtn from "../components/sharedComponent/CustomButton"
import { ProductGoToListButton, ProductGoUpButton } from "../components/sharedComponent/ButtonStyles"
import ProductContainer from "../components/product/ProductContainer"


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
            <CustomBtn type={"button"} text={'목록으로 돌아가기'} styleComponent={ProductGoToListButton} onClick={() => navigate("/")} />
            <ProductContainer item={item}/>
            <CustomBtn type={"button"} text={'맨 위로 올라가기'} styleComponent={ProductGoUpButton} onClick={() => window.scrollTo(0, 0)} />
        </ContainerDiv>
    )
}

export default Product