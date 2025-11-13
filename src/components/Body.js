import { useEffect, useState } from 'react';
import ResturantCard, { withPromotedLabel } from'./ResturantCard';
import {Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import { FOODFIRE_API_URL } from '../service/constants'

const Body = () => {

  const [listOfRestaurants, setListOfResturants]=useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  const [count,setCount] = useState(0)

  const RestaurantCardPromoted = withPromotedLabel(ResturantCard)

  useEffect(()=>{fetchData()},[]);

  // useEffect(()=>{
     
  //   console.log("componentDidmount",count)
  //   return()=>{
  //     console.log("componentwillUnmount",count)
  //   }
  // },[count])

  const fetchData=async()=>{
    const data =  await fetch(FOODFIRE_API_URL);
    const json = await data.json();
    
    
    setListOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
  }
  const filterResturants = () => {
      const filteredRes = listOfRestaurants.filter((value,index)=>{
       return value.info.name.toLowerCase().includes(searchText.toLowerCase()) 
      })
      setFilteredRestaurant(filteredRes)

  }

  if(!useOnlineStatus())
    return (<h1>User Please check the internet</h1>)
  
  //conditional rendering
  return listOfRestaurants==0 ?<Shimmer/>:(
    <div className="body">
      <div className="filter flex">
        <div className='search m-4 p-4'>
             <input type="text" 
                    className='border border-solid border-black' 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value) }></input>
             <button className="px-4 py-2 bg-green-200 m-4 rounded-lg" onClick={() => filterResturants()}>search</button>

        </div>
        <div className='search m-4 p-4 flex items-center'>
             <button
              className='px-4 py-2 bg-gray-300 rounded-lg'
              onClick={()=>{
              setListOfResturants(listOfRestaurants.filter(
                  (res) => res.data.avgRating >= 4
                ))
              }}>
                Top Rated Restuarants
              </button>
        </div>
      </div>
        
      <div className="flex flex-wrap">
        {filteredRestaurant.map((res)=>{
          return (
          <Link  key={res.info.id} to= {"restaurant/" + res.info.id}>
            {res.info.isOpen ? <RestaurantCardPromoted {...res?.info}/> : <ResturantCard {...res?.info}/>}
            
          </Link>
          )
        })}
      
     
      </div>
    </div>
  );
};
export default Body;
