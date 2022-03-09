import React from "react";

export let favorisTab = [];

const kelvinToFarenheit = (k) => {
  return (k - 273.15).toFixed(2);
};

const Favoris = () => {
  console.log("data ", favorisTab);


  return (

    <div >
      {favorisTab.map((fav, i) => (
        <div key={fav._id} >

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
                  <div className="  bg-white rounded-b rounded lg:rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="card mt-3 mx-auto" >
                      {fav ? (
                        <div class="card-body text-center">
                          <img
                            src={`http://openweathermap.org/img/w/${fav.icon}.png`}
                            alt="weather status icon"
                            className="ml-0"
                          />

                          <p className="h2">
                            {kelvinToFarenheit(fav.temp)}&deg; C
              </p>

                          <p className="h5">
                            <i className="fas fa-map-marker-alt"></i>{' '}
                            <strong>{fav.name}</strong>
                          </p>

                          <div className="row mt-4">
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6">

                              <p>
                              </p>

                            </div>
                          </div>


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
        </div>

      )
      )}
    </div>



  );
}

export default Favoris