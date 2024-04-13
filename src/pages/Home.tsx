import { useEffect, useState } from "react";
import CardsWrapper from "../components/CardsWrapper";
import { useRecordScroll } from "../hooks/useRecordScroll";
import { keywordAtom, limitAtom } from "../atoms/prevPageAtom";
import { useAtom } from "jotai";
import CustomInput from "../components/CustomInput";
import { Form } from "../styleComponents/CustomForms";
import { SubmitButton } from "../styleComponents/CustomButtons";
import SeeMoreButton from "../components/SeeMoreButton";
import { Container } from "../styleComponents/Container";
import NoResult from "../components/NoResult";

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
    };


    const seeMore = () => {
        setLimit(limit + 10)
    }

    return (
        <Container>
            <Form
                onSubmit={search}>
                <CustomInput placeholder={"상품 제목 입력"} value={inputText} onChange={onChangeInputText} />
                <SubmitButton type="submit" value="검색" />
            </Form>
            {products.length?<CardsWrapper products={products}/>:<NoResult/>}
            <SeeMoreButton onClick={isEnd?()=>{window.scrollTo(0,0)}:seeMore} limit={limit} isEnd={isEnd} />
        </Container>
    )
}