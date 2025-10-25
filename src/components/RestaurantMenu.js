
import { useState,useEffect } from "react"
import { MENU_DETAILS } from "../menuApiResponse"
import Shimmer from "./Shimmer"

const RestaurantMenu = () =>{
    const [data,setData]=  useState(null)
    useEffect(()=>{
     fetchRestaurantMenu()
    },[])
    const fetchRestaurantMenu = async ()=>{
        try{
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.4220991&lng=75.7329695&restaurantId=672933&catalog_qa=undefined&submitAction=ENTER")
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }
        catch(err){
             console.log("response", response)
        }
        finally {
             setData(MENU_DETAILS)
        }
    }
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