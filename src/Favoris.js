import React, {useState, useEffect} from "react";
import Navbar from './Navbar'
import Cards from './Cards'
export let favorisTab = [];


const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

const Favoris = () => {
    console.log("data " , favorisTab);
    const favs = favorisTab
        
        return (

          <div >
        {favorisTab.map((fav, i) => (
          <div key={fav._id} >
                
              <Cards apiData={{'apiData':{fav}}}></Cards>
          </div>

                      ) 
                  )}
        </div>

            
           
        );
}

export default Favoris