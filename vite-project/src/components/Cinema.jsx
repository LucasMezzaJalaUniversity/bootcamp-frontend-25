import { useState } from "react"

export const Cinema = ({ row, rowsSeats }) => {
  const [cinemaSeats, setCinemaSeats] = useState(
    Array.from({ length: row }, (row, rowIndex) => {
      return Array.from({ length: rowsSeats }, (seat, seatIndex) => {
        return {
          row: rowIndex + 1,
          seat: seatIndex + 1,
          reserved: false
        }
      })
    })
  )

  console.log(cinemaSeats)

  return (
    <section>
      <h1>========= SCREEN =========</h1>
      <ul>
        {cinemaSeats.map((elm, idx) => (
          <li key={idx}>
            <em>Row {idx + 1}:</em>
            <ul>
              {elm.map((seat, seatIdx) => (
                <li key={seatIdx}>
                  <em>{seat.reserved ? 'R' : 'A'}</em>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}