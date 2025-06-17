import { useRef, useState } from "react";
import { Searcher } from "../molucules/Searcher";
import { WeatherDetail } from "../molucules/WeatherDetail";

export const CityWeather = () => {
  const inputRef = useRef(null);
  const [data, setData] = useState(null)
  const [cityList, setCityList] = useState([])

  const mockWeatherData = {
    'New York': {
      temperature: '22°C',
      humidity: '56%',
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    'London': {
      temperature: '15°C',
      humidity: '70%',
      windSpeed: '20 km/h'
    },
  };

  const handleSearch = () => {
    const city = inputRef.current.value;
    if(mockWeatherData[city]) {
      setData({city: mockWeatherData[city]})
      setCityList(prev => [...prev, city])
    } else {
      setData({city: null})
    }
  }

  const handleHistoricalSearch = (row) => {
    setData({city: mockWeatherData[row]})
  }

  const handleClear = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
    setData(null)
    setCityList([])
  }

  return (
    <div>
      <Searcher inputRef={inputRef} handleSearch={handleSearch} handleClear={handleClear}></Searcher>
      {cityList.length > 0 ?
        <ul>
          {cityList.map((row, idx) => (
            <li key={idx}>
              <button onClick={e => handleHistoricalSearch(row)}>{row}</button>
            </li>
          ))}
        </ul>
      : null}
      <WeatherDetail data={data}></WeatherDetail>
    </div>
  )
}