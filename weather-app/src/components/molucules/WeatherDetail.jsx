import { Text } from "../atoms/Text"

export const WeatherDetail = ({data = null}) => {
  return (
    <div>
      {data ? (
        data.city ? (
          <>
            <Text>Temperature: {data.temperature}</Text>
            <Text>Humidity: {data.humidity}</Text>
            <Text>Wind Speed: {data.windSpeed}</Text>
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