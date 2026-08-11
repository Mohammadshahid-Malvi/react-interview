import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.023046&lng=72.537736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return listOfRestaurant.length === 0 ? ( <Shimmer/> ) :
    (
        <div className="body">
            <div className="search-filter-container">
            <div className="search-container">
               <input type="text" className="search-txt" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
               <button onClick={()=>{
                 const filteredRestaurant = listOfRestaurant.filter(
                    (resList) => resList.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                setFilteredRestaurant(filteredRestaurant);
                // Filter the restaurant card and update the UI
               }}>Search</button>
            </div>
            <div className="top-rated-container">
               <button onClick={()=>{
                const filteredList = listOfRestaurant.filter(
                    (resList) => resList.info.avgRating > 4.3
                )
                setListOfRestaurant(filteredList);
               }}>Top Rated Restaurant</button>
               
            </div>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => 
                        <RestaurantCard key={restaurant?.info?.id} resData = {restaurant}/>
                    )
                }
            </div>
        </div>
    )
}

export default Body;