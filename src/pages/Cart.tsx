import { useEffect, useState } from "react";
import { ContainerDiv } from "../components/sharedComponent/ContainerStyle"
import { Item } from "./Home";
import CardsWrapper from "../components/card/CardsWrapper";

function Cart(){
    const [products, setProducts] = useState<Item[]>([])
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

    return(
        <ContainerDiv>
            <CardsWrapper products={products}/>
        </ContainerDiv>
    )
}

export default Cart