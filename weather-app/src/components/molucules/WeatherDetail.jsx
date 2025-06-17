import { Text } from "../atoms/Text"

export const WeatherDetail = ({data}) => {
  return (
    <div>
      data ? (
        <Text>Temperature: {data.temperature}</Text>
        <Text>Humidity: {data.humidity}</Text>
        <Text>Wind Speed: {data.windSpeed}</Text>
      ) : (
        <Text>City not found</Text>
      )
    </div>
  )
}