import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg"/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } = resData?.info ;
    return (
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} rating</h4>
        </div>
    )
}

const resList = [
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "36974",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/a18ecb53-470d-4eb2-9f77-3a6c7949e94d_36974.JPG",
                      "locality": "Venus Atlantis Business Park",
                      "areaName": "Prahlad Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "2456",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "7.8K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-02 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Top-rated for Bolt, based on user votes."
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Top-rated for Pizza, based on user votes."
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Bolt, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated for Pizza, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹27"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "2.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-54722bce-a9fe-40c9-a592-fd06d6d898e9"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ahmedabad/dominos-pizza-venus-atlantis-business-park-prahlad-nagar-rest36974",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "41119",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/98488218-7cab-45c6-883b-6b9b469e507e_41119.jpg",
                      "locality": "Venus Atlantis",
                      "areaName": "Prahlad Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "39K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-02 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Top-rated for Burger, based on user votes."
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Top-rated for Corporate, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Burger, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated for Corporate, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-54722bce-a9fe-40c9-a592-fd06d6d898e9"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ahmedabad/burger-king-venus-atlantis-prahlad-nagar-rest41119",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "233245",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/75823c87-8dad-48f5-9116-c99c1e7b1970_233245.JPG",
                      "locality": "Bodakdev",
                      "areaName": "Sanidhya",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "7.7K+",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-02 04:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Top-rated for Bolt, based on user votes."
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Top-rated for Burger, based on user votes."
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Top-rated for Corporate, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Bolt, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated for Burger, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated for Corporate, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹64"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "4.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-54722bce-a9fe-40c9-a592-fd06d6d898e9"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ahmedabad/mcdonalds-bodakdev-sanidhya-rest233245",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1146612",
                      "name": "Aurum Burger",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/19/e18f6068-10ad-4791-9386-adcfd3501a2f_1146612 (1).jpg",
                      "locality": "Prahlad Nagar",
                      "areaName": "Prahlad Nagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Burgers"
                      ],
                      "avgRating": 4,
                      "parentId": "659467",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "749",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-02 09:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-54722bce-a9fe-40c9-a592-fd06d6d898e9"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ahmedabad/aurum-burger-prahlad-nagar-rest1146612",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "384986",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/9/d2ea0e70-3632-4fee-9d39-66fbb35ca911_384986.JPG",
                      "locality": "Shyamal",
                      "areaName": "Shyamal",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "4961",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "6.5K+",
                      "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-02 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Top-rated for Pizza, based on user votes."
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Pizza, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "976"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-54722bce-a9fe-40c9-a592-fd06d6d898e9"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ahmedabad/la-pinoz-pizza-shyamal-rest384986",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "37650",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/02a7b846-5b42-462f-8c3b-c205c67fb392_37650.JPG",
                      "locality": "Prahlad Nagar",
                      "areaName": "Prahlad Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "13K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 0.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "0.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-02 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "4.2K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-54722bce-a9fe-40c9-a592-fd06d6d898e9"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ahmedabad/pizza-hut-prahlad-nagar-rest37650",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "37942",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/e79ae7f7-c217-4f39-bd8d-d7593350a20b_37942.JPG",
                      "locality": "Prahlad Nagar",
                      "areaName": "Prahlad Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "14K+",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-02 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-54722bce-a9fe-40c9-a592-fd06d6d898e9"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ahmedabad/kfc-prahlad-nagar-rest37942",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1129915",
                      "name": "Sub Slider By Uboat",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/26/4795a006-20ec-411f-ab51-bb9ffb88197a_1129915.JPG",
                      "locality": "Prahlad Nagar",
                      "areaName": "Prahlad Nagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Healthy Food"
                      ],
                      "avgRating": 3.9,
                      "parentId": "651079",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "212",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-02 08:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-54722bce-a9fe-40c9-a592-fd06d6d898e9"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ahmedabad/sub-slider-by-uboat-prahlad-nagar-rest1129915",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  }
                ];
const Body = () => {
    return (
        <div className="body">
            <div className="search">
               Search 
            </div>
            <div className="res-container">
                {
                    resList.map((restaurant) => 
                        <RestaurantCard key={restaurant?.info?.id} resData = {restaurant}/>
                    )
                }
            </div>
        </div>
    )
}



const Footer = () => {
    return (
        <div>Footer</div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);