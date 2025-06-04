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

  const reserveSeat = (selectedRow, selectedSeat) => {
    if((selectedRow > row || selectedRow < 1) || (selectedSeat > rowsSeats || selectedSeat < 1)) {
      console.log("The seat must be between 1 - " + row + " rows and 1 - " + rowsSeats + " seats")
    } else {
      const selectedSeat = cinemaSeats[selectedRow - 1][selectedSeat - 1];
      if(!selectedSeat.reserved) {
        console.log("You reserve this seat (" + selectedRow + " row, " + selectedSeat + " seat) ")
        setCinemaSeats(prevState => (
          prevState.map((rowSeat, rowIdx) => {
            rowSeat.map((elm, elmIdx) => {
              if(rowIdx === selectedRow && elmIdx == selectedSeat) {
                return { ...elm, reserved: true }
              }
              return elm;
            })
          })
        ))
      } else {
        console.log("This seat (" + selectedRow + " row, " + selectedSeat + " seat) has already reserved")
      }
    }
  }

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