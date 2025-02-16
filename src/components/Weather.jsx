
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faCloud,
//     faCloudShowersHeavy,
//     faSun,
//     faSmog,
// } from "@fortawesome/free-solid-svg-icons";
// import {API_KEY} from "../components/api"

// const Weather = () => {
//     const [search, setSearch] = useState("");
//     const [weatherData, setWeatherData] = useState(null);
//     const [bgImage, setBgImage] = useState("");
//     const handleInput = (e) => setSearch(e.target.value);

//     const fetchWeather = async () => {
//         if (!search) {
//             alert("Enter city name");
//             return;
//         }
//         try {
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`);
//             const data = await response.json();
//             if (data.cod !== 200) {
//                 alert("City not found!");
//                 return;
//             }
//             setWeatherData(data);
//             setSearch("");
//         } catch (error) {
//             alert("Failed to fetch data. Check your internet.");
//         }
//     };

//     useEffect(() => {
//         if (!weatherData) return;
//         const condition = weatherData.weather[0].main;
//         const backgrounds = {
//             Clouds: "url('https://images.unsplash.com/photo-1595661671412-e20c4a3e65cc?w=800')",
//             Clear: "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800')",
//             Rain: "url('https://images.unsplash.com/photo-1532203512255-3c9c9d666c50?w=800')",
//             Mist: "url('https://images.unsplash.com/photo-1608131143065-0310ca4b396d?w=800')",
//             Default: "url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800')"
//         };
//         setBgImage(backgrounds[condition] || backgrounds.Default);
//     }, [weatherData]);

//     return (
//         <div className="min-h-screen flex flex-col md:flex-row">
//             <div className="flex-1 flex items-center justify-center bg-cover bg-center w-full h-64 md:h-auto" style={{ backgroundImage: bgImage }}>
//                 <h1 className="text-4xl font-bold text-white bg-black/50 px-4 py-2 rounded-lg">Weather App</h1>
//             </div>
//             <div className="flex-1 flex items-center justify-center bg-black text-xl w-full p-4">
//                 <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
//                     <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Check Weather</h2>
//                     <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
//                         <input
//                             value={search}
//                             onChange={handleInput}
//                             type="text"
//                             placeholder="Enter city"
//                             className="bg-gray-200 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         />
//                         <button
//                             onClick={fetchWeather}
//                             className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 w-full md:w-auto"
//                         >
//                             Search
//                         </button>
//                     </div>
//                     {weatherData && (
//                         <div className="text-center mt-4 text-gray-600">
//                             <h2 className="text-2xl font-semibold">{weatherData.name}</h2>
//                             <FontAwesomeIcon
//                                 icon={
//                                     weatherData.weather[0].main === "Clouds" ? faCloud :
//                                         weatherData.weather[0].main === "Rain" ? faCloudShowersHeavy :
//                                             weatherData.weather[0].main === "Clear" ? faSun : faSmog
//                                 }
//                                 className="text-5xl mt-2"
//                             />
//                             <h2 className="text-3xl font-bold">{Math.round(weatherData.main.temp)}°C</h2>
//                             <h2 className="capitalize">{weatherData.weather[0].description}</h2>
//                             <h2>Humidity: {weatherData.main.humidity}%</h2>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Weather;


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCloudShowersHeavy, faSun, faSmog } from "@fortawesome/free-solid-svg-icons";
import { API_KEY } from "../components/api";

const Weather = () => {
    const [search, setSearch] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [bgImage, setBgImage] = useState("");
    const handleInput = (e) => setSearch(e.target.value);

    const fetchWeather = async () => {
        if (!search) {
            alert("Enter city name");
            return;
        }
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }
            setWeatherData(data);
            setSearch("");
        } catch (error) {
            alert("Failed to fetch data. Check your internet.");
        }
    };

    useEffect(() => {
        if (!weatherData) return;
        const condition = weatherData.weather[0].main;
        const backgrounds = {
            Clouds: "url('https://images.unsplash.com/photo-1595661671412-e20c4a3e65cc?w=800')",
            Clear: "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800')",
            Rain: "url('https://images.unsplash.com/photo-1532203512255-3c9c9d666c50?w=800')",
            Mist: "url('https://images.unsplash.com/photo-1608131143065-0310ca4b396d?w=800')",
            Default: "url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800')"
        };
        setBgImage(backgrounds[condition] || backgrounds.Default);
    }, [weatherData]);

    return (
        <div className="min-h-screen flex flex-col-reverse md:flex-row">
            {/* Weather Info Section */}
            <div className="flex-1 flex items-center justify-center bg-black text-white w-full p-6">
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-md">
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700 mb-4">Check Weather</h2>

                    {/* Input & Button */}
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
                        <input
                            value={search}
                            onChange={handleInput}
                            type="text"
                            placeholder="Enter city"
                            className="bg-gray-200 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            onClick={fetchWeather}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                        >
                            Search
                        </button>
                    </div>

                    {/* Weather Display */}
                    {weatherData && (
                        <div className="text-center mt-4 text-gray-600">
                            <h2 className="text-2xl font-semibold">{weatherData.name}</h2>
                            <FontAwesomeIcon
                                icon={
                                    weatherData.weather[0].main === "Clouds" ? faCloud :
                                        weatherData.weather[0].main === "Rain" ? faCloudShowersHeavy :
                                            weatherData.weather[0].main === "Clear" ? faSun : faSmog
                                }
                                className="text-5xl mt-2"
                            />
                            <h2 className="text-3xl font-bold">{Math.round(weatherData.main.temp)}°C</h2>
                            <h2 className="capitalize">{weatherData.weather[0].description}</h2>
                            <h2>Humidity: {weatherData.main.humidity}%</h2>
                        </div>
                    )}
                </div>
            </div>

            {/* Background Image Section */}
            <div className="flex-1 flex items-center justify-center bg-cover bg-center w-full h-52 md:h-auto" style={{ backgroundImage: bgImage }}>
                <h1 className="text-3xl sm:text-4xl font-bold text-white bg-black/50 px-4 py-2 rounded-lg">
                    Weather App
                </h1>
            </div>
        </div>
    );
};

export default Weather;
