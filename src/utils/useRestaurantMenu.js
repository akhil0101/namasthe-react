import { useState, useEffect } from "react";
import { FOODFIRE_MENU_API_URL } from "../service/constants.js"

const useRestaurantMenu = ({resId}) => {
    console.log("resid",resId)
    const [res,setRes] = useState(null)
    useEffect(()=>{
        fetchRestaurantMenu()
        },[])
    
    const fetchRestaurantMenu = async()=>{
        try{
        const data = await fetch(FOODFIRE_MENU_API_URL + resId)
        console.log("data",data)
        const json = await data.json()
        console.log("json",json)
        setRes(json.data)
        }
        catch(err){
            
        }
    }

    return res
}

export default useRestaurantMenu