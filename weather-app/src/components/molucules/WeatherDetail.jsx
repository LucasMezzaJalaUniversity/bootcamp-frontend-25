import { Text } from "../atoms/Text"

export const WeatherDetail = ({data = null}) => {
  return (
    <div>
      {data ? (
        data.city ? (
          <>
            <Text>Temperature: {data.city.temperature}</Text>
            <Text>Humidity: {data.city.humidity}</Text>
            <Text>Wind Speed: {data.city.windSpeed}</Text>
          </>
        ) : (
          <Text>City not found</Text>
        )
      ) : (
        null
      )}
    </div>
  )
}