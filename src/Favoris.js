import React from "react";
import Cards from './Cards'
export let favorisTab = [];




const Favoris = () => {
    console.log("data " , favorisTab);
 
        
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