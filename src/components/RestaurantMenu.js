import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestuarantCategory from "./RestaurantCategory";
import {
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../service/constants.js";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const resId = useParams();
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [currActive, setCurrActive] = useState(null);
  const data = useRestaurantMenu(resId);

  // Set restaurant data when data changes
  useEffect(() => {
    if (data) {
      const restaurantData =
        data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);
    }
  }, [data]);

  const categories =
    data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return c.card?.card?.["@type"] === MENU_ITEM_TYPE_KEY;
    });

  if (data === null || !categories) return <Shimmer />;
  console.log("categories", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restaurant?.name}</h1>
      <p className="font-bold text-lg">
        {restaurant?.cuisines.join(", ")} - {restaurant?.costForTwo}
      </p>
      {/*categories accordions */}
      {(categories || []).map((category, i) => (
        <RestuarantCategory
          key={i}
          data={category?.card?.card}
          showitem={currActive === i}
          setCurrActive={() => setCurrActive(currActive === i ? null : i)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
