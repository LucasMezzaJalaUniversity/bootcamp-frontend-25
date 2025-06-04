import { useState } from "react"

export const Cinema = ({ row, rowsSeats }) => {
  const [cinemaSeats, setCinemaSeats] = useState(
    Array.from({ length: row }, (row, rowIndex) => {
      Array.from({ length: rowsSeats }, (seat, seatIndex) => {
        return {
          row: rowIndex + 1,
          seat: seatIndex + 1,
          reserved: false
        }
      })
    })
  )

  return (<></>)
}