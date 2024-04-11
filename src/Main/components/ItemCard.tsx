import { Product } from ".."
import { CardsItem } from "./CardStyle"

export default function ItemCard({item} : {item : Product}){

    return(
        <CardsItem>
            <img src={item.thumbnail} alt={item.title} />
            <p className="title">{item.brand} - {item.title}</p>
            <p>{item.price}$</p>
        </CardsItem>
    )
}