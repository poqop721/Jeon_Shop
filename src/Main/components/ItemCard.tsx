import { Product } from ".."

export default function ItemCard({item} : {item : Product}){
    return(
        <ul>
            <img src={item.thumbnail} alt={item.title} />
            <li>{item.brand} - {item.title}</li>
            <li>{item.price}$</li>
        </ul>
    )
}