import { useEffect, useState } from 'react';
import ResturantCard from'./ResturantCard';
import {Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const Body = () => {
   console.log("Rendered")

  const [listOfRestaurants, setListOfResturants]=useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  const [count,setCount] = useState(0)

  useEffect(()=>{fetchData()},[]);

  // useEffect(()=>{
     
  //   console.log("componentDidmount",count)
  //   return()=>{
  //     console.log("componentwillUnmount",count)
  //   }
  // },[count])

  const fetchData=async()=>{
    const data =  await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
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
  
  //conditional rendering
  return listOfRestaurants==0 ?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <div className='search'>
             <input type="text" 
                    className='search-box' 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value) }></input>
             <button onClick={() => filterResturants()}>search</button>

        </div>
        <button
        className='filter-btn'
        onClick={()=>{
         setListOfResturants(listOfRestaurants.filter(
            (res) => res.data.avgRating >= 4
          ))
        }}>
          Top Rated Restuarants
        </button>
      <div className="res-container">
        {filteredRestaurant.map((res)=>{
          return (
          <Link  key={res.info.id} to= {"restaurant/" + res.info.id}>
            <ResturantCard  resVal={res}/>
          </Link>
          )
        })}
      
     
      </div>
    </div>
    </div>
  );
};
export default Body;
