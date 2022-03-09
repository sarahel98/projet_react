import React from "react";
import {AiOutlineHeart }from  'react-icons/ai';
import {favorisTab} from "./Favoris";



const Cards = (apiData) => {

const handleAddFav = (data) => {
    const newFav = {
        id: data.id,
        name: data.name,
        main:{
          temp: data.main.temp
        },
        weather:{
          icon: data.weather[0].icon,
          description: data.weather[0].description,
        },
        date: new Date()
      };

      favorisTab.push(newFav);
      console.log("favorisTab " ,favorisTab);
}


const kelvinToFarenheit = (k) => {
  return (k - 273.15).toFixed(2);
};

    return (
        <>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<section
   class="
   bg-white
   pt-20
   lg:pt-[120px]
   pb-12
   lg:pb-[90px]
   relative
   z-20
   overflow-hidden
   "
   >
   <div class="container">
      <div class="flex flex-wrap justify-center">
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
               >
              <div className= "  bg-white rounded-b rounded lg:rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="card mt-3 mx-auto" >
          {apiData.apiData.main ? (
            <div class="card-body text-center">
              <img
                src={`http://openweathermap.org/img/w/${apiData.apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="ml-0"
              />

              <p className="h2">
                {kelvinToFarenheit(apiData.apiData.main.temp)}&deg; C
              </p>

              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>{' '}
                <strong>{apiData.apiData.name}</strong>
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i class="fas fa-temperature-low "></i>{' '}
                   
                    <strong>
                        min :   </strong>{kelvinToFarenheit(apiData.apiData.main.temp_min)}&deg; C
                      
                      
                    
                  </p>
                  <p>
                    <i className="fas fa-temperature-high "></i>{' '}
                    <strong>
                       max: </strong> {kelvinToFarenheit(apiData.apiData.main.temp_max)}&deg; C
                   
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    {' '}
                    <strong>{apiData.apiData.weather[0].main}</strong>
                  </p>
                  <p>
                  </p>
                 
                </div>
              </div>
              <AiOutlineHeart width={60} onClick= {() => handleAddFav(apiData.apiData)}/> 
          
            </div>
            
            
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
            </div>
         </div>
         
        
      </div>
   </div>
</section>
</>
);

}

export default Cards;

