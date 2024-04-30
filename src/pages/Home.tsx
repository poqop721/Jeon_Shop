import { useEffect, useState } from "react";
import CardsWrapper from "../components/card/CardsWrapper";
import { useRecordScroll } from "../hooks/useRecordScroll";
import { keywordAtom, limitAtom } from "../atoms/prevPageAtom";
import { useAtom } from "jotai";
import CustomIpt from "../components/home/CustomInput";
import SeeMoreBtn from "../components/home/SeeMoreButton";
import { ContainerDiv } from "../components/sharedComponent/ContainerStyle";
import NoResult from "../components/home/NoResult";
import CustomForm from "../components/home/CustomForm";
import CustomBtn from "../components/sharedComponent/CustomButton";
import { SubmitButton } from "../components/sharedComponent/ButtonStyles";
import styled from "styled-components";


export interface Item {
    id: number,
    title: string,
    price: number,
    brand: string,
    thumbnail: string,
    description: string,
    discountPercentage: number,
    rating: number,
    stock: number,
    category: string,
    images: Array<string>,
    quantity : number,
}


function Home() {
    const [keyword, setKeyword] = useAtom<string>(keywordAtom)
    const [limit, setLimit] = useAtom<number>(limitAtom)
    const [inputText, setInputText] = useState<string>(keyword)
    const [products, setProducts] = useState<Item[]>([])
    const [isEnd, setIsEnd] = useState<boolean>(false)
    const [seeMoreBtnDisabled,setSeeMoreBtnDisabled] = useState<boolean>(false)
    const [total, setTotal] = useState<number>(0)
    const scrollY = useRecordScroll()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/search?q=${keyword}&limit=${limit}&select=id,thumbnail,title,brand,price,rating,discountPercentage`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setTotal(data.total)
                if (data.total <= limit) {
                    setIsEnd(true)
                } else {
                    setIsEnd(false)
                }
                setSeeMoreBtnDisabled(false)
                setTimeout(() => {
                    window.scrollTo(0, scrollY);
                }, 300);
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
        setTotal(0)
    }

    const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }


    const seeMore = () => {
        setLimit(limit + 10)
        setSeeMoreBtnDisabled(true)
    }

    return (
        <ContainerDiv>
            <CustomForm onSubmit={search}>
                <CustomIpt placeholder={"상품 제목 입력"} value={inputText} onChange={onChangeInputText} />
                {keyword === '' ? '' : <SearchResultDiv>검색 결과 : {total}</SearchResultDiv>}
                <CustomBtn type={"submit"} text={"검색"} styleComponent={SubmitButton} onClick={null} />
            </CustomForm>
            {products.length ? <CardsWrapper products={products} dragged={false}/> : <NoResult />}
            <SeeMoreBtn onClick={seeMore} limit={limit} isEnd={isEnd} totalPage={Math.ceil(total / 10)} curPage={limit / 10} disabled={seeMoreBtnDisabled}/>
        </ContainerDiv>
    )
}

export default Home


const SearchResultDiv = styled.span`
    font-size : 1.2em;
    font-weight : 600;
    color : grey;
    margin-right : 0.8em;
    border-left : 1px solid grey;
    padding-left : 0.5em; 
    @media only screen and (max-width: 480px) {
        font-size : 0.75em;
        padding : 0.4em 0.3em;
        margin-right : 0.3em;
    }
`