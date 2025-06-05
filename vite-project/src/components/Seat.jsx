import './Seat.css'

export const Seat = ({seat, onClick = () => {} }) => {
  return (
    <li key={seat.seat} className="seat">
      <button onClick={onClick} className={`${seat.reserved ? 'reserved' : ''}`}>{seat.reserved ? 'R' : 'A'}</button>
    </li>
  )
}