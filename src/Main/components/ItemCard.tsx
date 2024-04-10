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
        <ul>
            <img src={item.thumbnail} alt={item.title} />
            <li>{item.brand} - {item.title}</li>
            <li>{item.price}$</li>
        </ul>
    )
}