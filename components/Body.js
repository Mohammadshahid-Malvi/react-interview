import resList from "./utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="search">
               <button onClick={()=>{
                const filteredList = listOfRestaurant.filter(
                    (resList) => resList.info.avgRating > 4.3
                )
                setListOfRestaurant(filteredList);
               }}>Filter</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => 
                        <RestaurantCard key={restaurant?.info?.id} resData = {restaurant}/>
                    )
                }
            </div>
        </div>
    )
}

export default Body;