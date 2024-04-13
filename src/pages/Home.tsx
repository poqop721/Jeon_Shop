import { useCallback, useEffect, useState } from "react";
import CardsWrapper from "../components/CardsWrapper";
import { useRecordScroll } from "../hooks/useRecordScroll";
import { keywordAtom, limitAtom } from "../atoms/prevPageAtom";
import { useAtom } from "jotai";
import CustomInput from "../components/CustomInput";
import SeeMoreButton from "../components/SeeMoreButton";
import { Container } from "../styleComponents/Container";
import NoResult from "../components/NoResult";
import CustomForm from "../components/CustomForm";
import CustomButton from "../components/CustomButton";
import { SubmitButton } from "../styleComponents/CustomButtons";

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

export default function Main() {
    const [keyword, setKeyword] = useAtom<string>(keywordAtom)
    const [inputText, setInputText] = useState<string>(keyword)
    const [limit, setLimit] = useAtom<number>(limitAtom)
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
            window.scrollTo(0,scrollY)
            console.log(1312312)
            })
            .catch(error => {
                alert('상품을 불러오는데 문제가 발생했습니다.')
                console.log(error)
            })
    }, [limit, keyword])

    const search = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setKeyword(inputText)
        setLimit(10)
    },[inputText])

    const onChangeInputText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    },[]);


    const seeMore = useCallback(() => {
        console.log(132)
        setLimit(limit + 10)
    },[limit])

    return (
        <Container>
            <CustomForm onSubmit={search}>
                <CustomInput placeholder={"상품 제목 입력"} value={inputText} onChange={onChangeInputText} />
                <CustomButton type={"submit"} value={"검색"} styleComponent={SubmitButton} onClick={null}/>
            </CustomForm>
            {products.length?<CardsWrapper products={products}/>:<NoResult/>}
            <SeeMoreButton onClick={seeMore} limit={limit} isEnd={isEnd} />
        </Container>
    )
}