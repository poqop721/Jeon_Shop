import { Item } from "../../pages/Home";

function getDiscountInfo(item : Item | undefined) : [boolean, number]{
    if(item){
        const isDiscount = item.discountPercentage !== 0
        const discountPrice = ~~(item.price * ((100 - item.discountPercentage) / 100))
        return [isDiscount,discountPrice]
    } else {
        return [false,0]
    }
}

export default getDiscountInfo