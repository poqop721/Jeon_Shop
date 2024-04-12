import { useEffect, useRef, useState } from "react";
import ItemCard from "../components/ItemCard";
import { CardsWrapper } from "../components/CardStyle";
import { useRecordScroll } from "../hooks/useRecordScroll";

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
    const [inputText, setInputText] = useState<string>('')
    const [products, setProducts] = useState<Item[]>([])
    const [limit, setLimit] = useState<number>(10)
    const [keyword, setKeyword] = useState<string>('')
    const moreButton = useRef<HTMLButtonElement>(null)
    const scrollY = useRecordScroll()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/search?q=${keyword}&limit=${limit}&select=id,thumbnail,title,brand,price`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                if (moreButton.current) {
                    if (data.total <= limit) {
                        moreButton.current.style.display = 'none'
                    } else {
                        moreButton.current.style.display = 'block'
                    }
                }
            })
            .catch(error => {
                alert('상품을 불러오는데 문제가 발생했습니다.')
                console.log(error)
            })
            window.scrollTo(0,scrollY)
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
        <div>
            <form
                onSubmit={search}>
                <input type="text" placeholder="상품 제목 입력" value={inputText} onChange={onChangeInputText} required />
                <input type="submit" value="검색" />
            </form>
            <CardsWrapper>
                {products.map((item: Item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </CardsWrapper>
            <button onClick={seeMore} ref={moreButton}>더보기</button>
        </div>
    )
}