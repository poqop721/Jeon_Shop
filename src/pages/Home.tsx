import { useEffect, useState } from "react";
import CardsWrapper from "../components/CardsWrapper";
import { useRecordScroll } from "../hooks/useRecordScroll";
import { keywordAtom, limitAtom } from "../atoms/prevPageAtom";
import { useAtom } from "jotai";
import CustomIpt from "../components/CustomInput";
import SeeMoreBtn from "../components/SeeMoreButton";
import { ContainerDiv } from "../components/Container";
import NoResult from "../components/NoResult";
import CustomForm from "../components/CustomForm";
import CustomBtn from "../components/CustomButton";
import { SubmitButton } from "../components/ButtonStyles";

export interface Item {
    id: number,
    title: string,
    price: number,
    brand: string,
    thumbnail: string,
    description?: string,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    category?: string,
    images?: Array<string>
}

function Home() {
    const [keyword, setKeyword] = useAtom<string>(keywordAtom)
    const [limit, setLimit] = useAtom<number>(limitAtom)
    const [inputText, setInputText] = useState<string>(keyword)
    const [products, setProducts] = useState<Item[]>([])
    const [isEnd, setIsEnd] = useState<boolean>(false)
    const scrollY = useRecordScroll()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/search?q=${keyword}&limit=${limit}&select=id,thumbnail,title,brand,price`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                if (data.total <= limit) {
                    setIsEnd(true)
                } else {
                    setIsEnd(false)
                }
                window.scrollTo(0, scrollY)
            })
            .catch(error => {
                alert('상품을 불러오는데 문제가 발생했습니다.')
                console.log(error)
            })
    }, [limit, keyword])

    const search = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setKeyword(inputText)
        setLimit(10)
    }

    const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }


    const seeMore = () => {
        console.log(132)
        setLimit(limit + 10)
    }

    return (
        <ContainerDiv>
            <CustomForm onSubmit={search}>
                <CustomIpt placeholder={"상품 제목 입력"} value={inputText} onChange={onChangeInputText} />
                <CustomBtn type={"submit"} value={"검색"} styleComponent={SubmitButton} onClick={null} />
            </CustomForm>
            {products.length ? <CardsWrapper products={products} /> : <NoResult />}
            <SeeMoreBtn onClick={seeMore} limit={limit} isEnd={isEnd} />
        </ContainerDiv>
    )
}

export default Home