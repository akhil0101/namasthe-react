import { useState, useEffect } from "react"
import { MENU_DETAILS } from "../utils/menuApiResponse"

const useRestaurantMenu = (resId) => {
    console.log("resid",resId)
    const [res,setRes] = useState(null)
    useEffect(()=>{
        fetchRestaurantMenu()
        },[])
    
    const fetchRestaurantMenu = async()=>{
        try{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.4220991&lng=75.7329695&restaurantId=672933&catalog_qa=undefined"+resId)
        console.log("data",data)
        const json = await data.json()
        console.log("json",json)
        setRes(json.data)
        }
        catch(err){
            setRes(MENU_DETAILS)
        }
    }

    return res
}

export default useRestaurantMenu