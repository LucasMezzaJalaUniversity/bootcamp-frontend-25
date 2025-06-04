import { useState } from "react"

export const Cinema = ({ row, rowsSeats }) => {
  const [ cinemaSeats, setCinemaSeats ] = useState(
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
  const [ state, setState ] = useState('')

  const reserveSeat = (selectedRow, selectedSeat) => {
    const getSelectedSeat = cinemaSeats[selectedRow - 1][selectedSeat - 1];
    if(!getSelectedSeat.reserved) {
      setCinemaSeats(prevState => (
        prevState.map((rowSeat, rowIdx) =>
          rowSeat.map((elm, elmIdx) =>
            rowIdx + 1 === selectedRow && elmIdx + 1 === selectedSeat
              ? { ...elm, reserved: true }
              : elm
          )
        )
      ))
      setState("You reserve this seat (" + selectedRow + " row, " + selectedSeat + " seat) ")
    } else {
      setState("This seat (" + selectedRow + " row, " + selectedSeat + " seat) has already reserved")
    }
  }

  return (
    <section>
      <h1>========= SCREEN =========</h1>
      <ul>
        {cinemaSeats.map((elm, idx) => (
          <li key={idx}>
            <em>Row {idx + 1}:</em>
            <ul>
              {elm.map((seat) => (
                <li key={seat.seat}>
                  <button onClick={e => reserveSeat(idx + 1, seat.seat)}>{seat.reserved ? 'R' : 'A'}</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {state && <p>{state}</p>}
    </section>
  )
}