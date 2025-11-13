
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestuarantCategory from "./RestaurantCategory"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const resId = useParams()
    const data = useRestaurantMenu(resId)
    if(data === null) return <Shimmer/>
    let { name , cuisines , costForTwo, cloudinaryImageId } = data?.data?.cards[2]?.card?.card?.info
    const categories = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
      return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwo}</p>
            {/*categories accordions */}
            {
              categories.map((category,i) => ( <RestuarantCategory key={i} data={category?.card?.card}/>))
            }
        </div>
    )
}

export default RestaurantMenu