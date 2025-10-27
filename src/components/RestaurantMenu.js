
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer"

const RestaurantMenu = () =>{
    const resId = useParams()
    const data = useRestaurantMenu(resId)
    if(data === null) return <Shimmer/>
    let { name , cuisines , costForTwo, cloudinaryImageId } = data?.data?.cards[2]?.card?.card?.info
    let {itemCards} = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log("itemCards",itemCards)
    return (
        <div className="restaurantMenu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwo}</p>
            <ul>
                {itemCards.map((item,i) => <li key={item.card.info.id}>{item.card.info.name} - {"Rs "} {item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu