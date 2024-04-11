import { Item } from "../pages/Home"
import { CardsItem } from "./CardStyle"
import { useNavigate } from "react-router-dom"

export default function ItemCard({item} : {item : Item}){
    const navigate = useNavigate()

    return(
        <CardsItem onClick={()=>{navigate(`/product/${item.id}`)}}>
            <img src={item.thumbnail} alt={item.title} />
            <p className="title">{item.brand} - {item.title}</p>
            <p>{item.price}$</p>
        </CardsItem>
    )
}