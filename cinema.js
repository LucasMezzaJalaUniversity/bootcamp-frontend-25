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

  createCinema() {
    let arrayRows = new Array(this.rows)
    for (let i = 0; i < this.rows; i++) {
      arrayRows[i] = new Array(this.rowsSeats)
      for (let j = 0; j < this.rowsSeats; j++) {
        arrayRows[i][j] = new Seat(i + 1, j + 1);
      }
    }

    return arrayRows;
  }

  showSeatStatus() {
    console.log(" ")
    console.log("====== SCREEN ======")
    for (let i = 0; i < this.rows; i++) {
      let row = "ROW " + (i + 1) + " ";
      for (let j = 0; j < this.rowsSeats; j++) {
        row += this.cinemaSeats[i][j].reserved ? "R " : "A ";
      }
      console.log(row)
    }
    console.log("      ")
    console.log("A: Available, R: Reserved")
    console.log(" ")
  }

  reserveSeat(row, seat) {}
}

const cinema = new Cinema(5, 10)

cinema.showSeatStatus()


