class Seat {
  constructor(row, column) {
    this.row = row;
    this.seatNumber = column;
    this.reserved = false;
  }

  reserve() {
    if(!this.reserved) {
      this.reserved = true
      return true
    } else {
      return false
    }
  }
}

class Cinema {
  constructor(rows, rowsSeats) {
    this.rows = rows;
    this.rowsSeats = rowsSeats;
    this.cinemaSeats = this.createCinema()
  }

  createCinema() {}

  showSeatStatus() {}

  reserveSeat(row, seat) {}
}


