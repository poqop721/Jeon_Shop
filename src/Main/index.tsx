import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";

interface Products{
    id : number,
    title : string,
    description : string,
    price : number,
    discountPercentage : number,
    rating : number,
    stock : number,
    brand : string,
    category : string,
    thumbnail : string,
    images: Array<string>
}

export default function Main() {
    const [inputText, setInputText] = useState<string>('')
    const [products, setProducts] = useState<Products[]>([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {setProducts(data.products)})
    },[])

    const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
      };

    const search = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://dummyjson.com/products/search?q=${inputText}`)
        .then(res => res.json())
        .then(data => {setProducts(data.products)})
    }   

    return (
        <div>
            <form
                onSubmit={search}>
                <input type="text" placeholder="상품 제목 입력" value={inputText} onChange={onChangeInputText}/>
                <input type="submit" value="검색" />
            </form>
            <div>{products.map((item : any)=>(
                <ItemCard key={item.id} item={item} />
            ))}</div>
        </div>
    )
}