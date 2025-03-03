import React, { useEffect } from "react";
import { getRestaurants } from "../../action/restaurantAction";
import { useDispatch, useSelector } from "react-redux";

export default function Count(){
    const dispatch =useDispatch();
    const{loading,error,count,showVegOnly,pureRestaurantsount}=useSelector((state)=>state.restaurants);
    useEffect(()=>{

        dispatch(getRestaurants());
    },[dispatch]);
    return( 
    <div>
        {loading ? (<p>Loading Restaurant count...</p>):eroor ? (<p>Error:{error}</p>):(
    <p className="NumofRestro">
        {showVegOnly ? pureVegRestaurants:count}{""} 
    
    
     <span className="Restro">{ showVegOnly
     ? pureRestaurantsount === 1
     ? "Restaurant"
     : "Restaurants":count===1
     ? "Restaurant"
     : "Restaurants"}</span>
      
     </p>)}
     <hr/>    

    </div>
    );
}