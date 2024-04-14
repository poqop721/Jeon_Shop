import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Item } from "./Home"
import styled from "styled-components"

const CardInfoDiv = styled.div`
    padding : 2em;
    display:flex;
    flex-direction : column;
    justify-contents:center;
    align-items:center;
    gap : 1em;
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
        <CardInfoDiv>
            <button onClick={() => { navigate("/") }}>목록으로 돌아가기</button>
            <img src={item?.thumbnail} alt="thumbnail" />
            <p>brand : {item?.brand}</p>
            <p>title : {item?.title}</p>
            <p>price : {item?.price}</p>
            <p>description : {item?.description}</p>
            {item?.images?.map((url, idx) => {
                return (<img key={idx} src={url} alt="images" />)
            })}
        </CardInfoDiv>
    )
}

export default Product