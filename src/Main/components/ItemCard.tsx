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

export default function ItemCard({item} : {item : Products}){
    return(
        <li>{item.title}</li>
    )
}