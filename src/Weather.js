import { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Cards from "./Cards";


const Weather = () => {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('Paris');
  const [state, setState] = useState('Paris');

  // API KEY AND URL
  const apiKey = "935240a2e3b81e0ee46d3a97e2892b2f";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };




  return (
     
    <div className="text-center" > 
         <Navbar />
     
      <div className="container">
        <div >
          <div className=" ml-6">
            <label for="location-name mr-4 mb-4" >
              Enter Location :
            </label>
          </div>
          <div >
            <input
              type="text"
              id="location-name"
              class="shadow appearance-none border rounded w-2/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  mt-6 mb-6"
              onChange={inputHandler}
              value={getState}
            />
          </div>
          <button className="text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700 px-5 h-10 mb-10" onClick={submitHandler}>
            Search
          </button>
        </div>
            
        <Cards apiData={apiData}/>

    </div>
    </div>
  );
}

export default Weather;
